const start = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="70px" height="70px" viewBox="0 0 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>point</title>
    <defs>
        <filter x="-82.1%" y="-82.1%" width="264.3%" height="264.3%" filterUnits="objectBoundingBox" id="filter-1">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.0597577378   0 0 0 0 0.490857111   0 0 0 0 0.114212395  0 0 0 0.317253059 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
    </defs>
    <g id="Variant-3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="point" fill-rule="nonzero">
            <g fill="#8BEA97" id="Path">
                <path d="M35,0 C15.6700338,0 0,15.6700338 0,35 C0,54.3299662 15.6700338,70 35,70 C54.3299662,70 70,54.3299662 70,35 C70,15.6700338 54.3299662,0 35,0 Z" fill-opacity="0.1"></path>
                <path d="M35.4320988,12.0987654 C22.306813,12.0987654 11.6666667,22.7389118 11.6666667,35.8641975 C11.6666667,48.9894833 22.306813,59.6296296 35.4320988,59.6296296 C48.5573845,59.6296296 59.1975309,48.9894833 59.1975309,35.8641975 C59.1975309,22.7389118 48.5573845,12.0987654 35.4320988,12.0987654 Z" fill-opacity="0.4"></path>
            </g>
            <g id="Group-35" filter="url(#filter-1)" transform="translate(21.000000, 21.000000)">
                <path d="M14,0 C6.2680135,0 0,6.2680135 0,14 C0,21.7319865 6.2680135,28 14,28 C21.7319865,28 28,21.7319865 28,14 C28,6.2680135 21.7319865,0 14,0 Z" id="Path" fill="#FFFFFF"></path>
                <path d="M14,2 C20.627417,2 26,7.372583 26,14 C26,20.627417 20.627417,26 14,26 C7.372583,26 2,20.627417 2,14 C2,7.372583 7.372583,2 14,2 Z M14,9 C11.2385763,9 9,11.2385763 9,14 C9,16.7614237 11.2385763,19 14,19 C16.7614237,19 19,16.7614237 19,14 C19,11.2385763 16.7614237,9 14,9 Z" id="Combined-Shape" fill="#8BEA97"></path>
            </g>
        </g>
    </g>
</svg>
`;

export default start;
