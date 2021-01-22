interface Data {
    label: string;
    values?: Array<number>;
}

export interface DoubleBarChartProps {
    /** The titles of the datasets */
    titles?: Array<string>;
    /** The data to show in the chart */
    data?: Array<Data>;
    /** Label of the X axis */
    xLabel?: string;
    /** Label of the Y axis */
    yLabel?: string;
}

export default function (props: DoubleBarChartProps): JSX.Element | null;
