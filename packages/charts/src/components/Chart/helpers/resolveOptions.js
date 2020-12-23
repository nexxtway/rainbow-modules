const { default: merge } = require('./merge');

const defaultOptions = {
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
};

const resolveOptions = (options, props) => {
    const { theme } = props;
    const { palette } = theme.rainbow;
    const legend = {
        label: palette.text.label,
        border: palette.border.divider,
    };
    const tooltips = {
        background: palette.getContrastText(palette.background.main),
        color: palette.getContrastText(palette.text.main),
    };
    const intermediateOptions = {
        options: {
            legend: {
                labels: {
                    usePointStyle: true,
                    fontColor: legend.label,
                },
            },
            tooltips: {
                mode: 'index',
                backgroundColor: tooltips.background,
                titleFontColor: tooltips.color,
                bodyFontColor: tooltips.color,
            },
        },
    };
    return merge(defaultOptions, intermediateOptions, options);
};

export default resolveOptions;
