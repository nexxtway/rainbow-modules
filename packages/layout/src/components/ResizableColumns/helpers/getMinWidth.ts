import { Width } from '../types';

const getMinWidth = (minWidth: Width): string => {
    if (!minWidth) return '0px';

    const { px, percent } = minWidth;
    if (px) return `${px}px`;
    if (percent) return `${percent}%`;

    return '0px';
};

export default getMinWidth;
