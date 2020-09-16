export default function getSign(number) {
    if (!number || Math.abs(number) === 0) return 0;
    return Math.abs(number) / number;
}
