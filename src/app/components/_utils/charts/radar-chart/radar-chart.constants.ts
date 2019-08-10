export const RadarValueAxisConfig = {
    color: 'black',
    labels: {
        color: 'black',
        font: `font-family: 'Open Sans', sans-serif; font-size: 14px; font-weight: bold`,
    },
    line: {
        color: 'black',
    },
    majorGridLines: {
        color: 'black',
    },
    minorGridLines: {
        color: 'black',
    },
    minorTicks: {
        color: 'black',
    },
    majorTicks: {
        color: 'black',
    }
};

export const RadarCategoryAxisConfig = {
    labels: {
        visible: true,
        color: 'black',
        font: `font-family: 'Open Sans', sans-serif; font-size: 12px; font-weight: bold`,
        content: (e) => e.value.replace(' ', '\n')
    },
    color: 'black',
    line: {
        color: 'black',
    },
    majorGridLines: {
        color: 'black',
    },
    minorGridLines: {
        color: 'black',
    },
    minorTicks: {
        color: 'black',
    },
    majorTicks: {
        color: 'black',
    }
};