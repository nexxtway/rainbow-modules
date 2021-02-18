export default function getOptions(options) {
    const { xLabel, yLabel, suggestedMax } = options;
    return {
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'top',
        },
        scales: {
            xAxes: [
                {
                    id: 'frontAxis',
                    stacked: true,
                    type: 'category',
                    barThickness: 27,
                    gridLines: {
                        display: false,
                    },
                    scaleLabel: {
                        display: !!xLabel,
                        labelString: xLabel,
                        fontFamily: 'Lato',
                        fontSize: 14,
                        fontStyle: 'bold',
                        fontColor: '#000',
                    },
                },
                {
                    id: 'backAxis',
                    stacked: true,
                    type: 'category',
                    gridLines: {
                        display: false,
                    },
                    display: false,
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    scaleLabel: {
                        display: !!yLabel,
                        labelString: yLabel,
                        fontFamily: 'Lato',
                        fontSize: 14,
                        fontStyle: 'bold',
                        fontColor: '#000',
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax,
                    },
                },
            ],
        },
        tooltips: {
            mode: 'index',
            itemSort: (a, b) => {
                return b.datasetIndex - a.datasetIndex;
            },
        },
    };
}
