export default function getSign(number) {
    if (!number || number === 0 || Object.is(number, -0)) return 0;
    return Math.abs(number) / number;
}
