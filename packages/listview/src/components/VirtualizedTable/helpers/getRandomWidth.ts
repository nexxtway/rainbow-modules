const widths = ['40%', '60%', '70%', '85%', '95%'];

const getRandomWidth = (): string => {
    return widths[Math.floor(Math.random() * widths.length)];
};

export default getRandomWidth;
