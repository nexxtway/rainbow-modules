import { FormattableUnit } from '../types';

export default function getTimeDiff(createdAt: number): [number, FormattableUnit] {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = createdAt - Date.now();
    const absElapsed = Math.abs(elapsed);

    if (absElapsed < msPerMinute) {
        return [Math.round(elapsed / 1000), 'seconds'];
    }
    if (absElapsed < msPerHour) {
        return [Math.round(elapsed / msPerMinute), 'minutes'];
    }
    if (absElapsed < msPerDay) {
        return [Math.round(elapsed / msPerHour), 'hours'];
    }
    if (absElapsed < msPerMonth) {
        return [Math.round(elapsed / msPerDay), 'days'];
    }
    if (absElapsed < msPerYear) {
        return [Math.round(elapsed / msPerMonth), 'months'];
    }
    return [Math.round(elapsed / msPerYear), 'years'];
}
