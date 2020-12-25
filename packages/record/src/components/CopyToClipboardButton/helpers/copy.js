export default function copy(text) {
    if (!text) return false;

    let success = false;

    const range = document.createRange();
    const selection = document.getSelection();

    const mark = document.createElement('span');
    mark.textContent = text;
    mark.style.all = 'unset';
    mark.style.position = 'fixed';
    mark.style.top = 0;
    mark.style.clip = 'rect(0, 0, 0, 0)';
    mark.style.whiteSpace = 'pre';
    mark.style.webkitUserSelect = 'text';
    mark.style.MozUserSelect = 'text';
    mark.style.msUserSelect = 'text';
    mark.style.userSelect = 'text';

    document.body.appendChild(mark);

    try {
        range.selectNodeContents(mark);
        selection.addRange(range);
        document.execCommand('copy');
        success = true;
    } catch (err) {
        try {
            window.clipboardData.setData('text', text);
            success = true;
        } catch (err) {
            success = false;
        }
    } finally {
        if (selection) {
            if (typeof selection.removeRange === 'function') {
                selection.removeRange(range);
            } else {
                selection.removeAllRanges();
            }
        }

        if (mark) {
            document.body.removeChild(mark);
        }
    }
    return success;
}
