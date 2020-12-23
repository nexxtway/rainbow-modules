import React, {
    useState,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import ChartJS from 'chart.js';
import StyledContainer from './styled';
import ChartContext from './context';
import resolveOptions from './helpers/resolveOptions';

const Chart = React.forwardRef((props, ref) => {
    const { type, labels, plugins, children, ...rest } = props;
    const themeContext = useContext(ThemeContext);
    const chartRef = useRef();
    const [chart, setChart] = useState();
    const datasets = useRef([]);
    const options = useRef({});

    useImperativeHandle(ref, () => ({
        chart,
    }));

    const registerOption = useCallback((key, option) => {
        options.current[key] = option;
        if (chart) {
            const opts = resolveOptions(
                {
                    type,
                    data: {
                        labels,
                        datasets: datasets.current,
                    },
                    ...options.current,
                },
                { theme: themeContext, ...props },
            );
            chart.options = opts;
            chart.update();
        }
    }, []);

    const context = useMemo(
        () => ({
            chart,
            registerOption,
        }),
        [chart, registerOption],
    );

    useEffect(() => {
        const node = chartRef.current;
        const opts = resolveOptions(
            {
                type,
                data: {
                    labels,
                    datasets: [],
                },
                options: {
                    ...rest,
                    ...options.current,
                },
                plugins,
            },
            { theme: themeContext, ...props },
        );

        const chart = new ChartJS(node, opts);
        setChart(chart);
        return () => {
            chart.destroy();
            setChart(undefined);
        };
    }, [type, plugins, themeContext]);

    return (
        <StyledContainer>
            <canvas ref={chartRef} />
            <ChartContext.Provider value={context}>{children}</ChartContext.Provider>
        </StyledContainer>
    );
});

Chart.propTypes = {
    /** The type of chart to draw. */
    type: PropTypes.oneOf([
        'bar',
        'horizontalBar',
        'line',
        'radar',
        'pie',
        'doughnut',
        'polarArea',
        'bubble',
    ]),
    /** Defines the names of the sections for the corresponding values. */
    labels: PropTypes.arrayOf(PropTypes.string),
    plugins: PropTypes.array,
    children: PropTypes.node,
};

Chart.defaultProps = {
    type: 'bar',
    labels: [],
    plugins: [],
    children: undefined,
};

export default Chart;
