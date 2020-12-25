export default function isSupported() {
    return (
        (window.clipboardData && window.clipboardData.setData) ||
        (document.queryCommandSupported && document.queryCommandSupported('copy'))
    );
}
