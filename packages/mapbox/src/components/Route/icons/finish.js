const finish = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="70px" height="100px" viewBox="0 0 72 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>marker</title>
    <defs>
        <filter x="-85.0%" y="-67.5%" width="270.7%" height="235.0%" filterUnits="objectBoundingBox" id="filter-1">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="7" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.0597577378   0 0 0 0 0.490857111   0 0 0 0 0.114212395  0 0 0 0.48314576 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
    </defs>
    <g id="Variant-3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="dispatch/new-ride-step-3-copy-2" transform="translate(-1151.000000, -657.000000)">
            <g id="Group-19" transform="translate(977.000000, 240.000000)">
                <g id="marker" transform="translate(194.000000, 437.000000)">
                    <circle id="Oval" fill="#00AB8E" cx="15.3333333" cy="39.9393939" r="6.06060606"></circle>
                    <g id="Group-36" filter="url(#filter-1)" fill-rule="nonzero">
                        <path d="M15.6862745,0 C7.03413272,0 0,7.03438563 0,15.6862745 C0,20.6031415 2.46620493,25.8839246 6.54898448,31.3616243 C7.94607496,33.2360439 9.44850605,35.0115272 10.9674922,36.6446328 L11.5782728,37.2929537 L12.1337099,37.8672338 L12.6279841,38.3644479 L13.241986,38.9591527 C13.9167251,39.5897465 14.7881787,39.9286988 15.6862745,39.9286988 C16.5842104,39.9286988 17.4554364,39.5898691 18.1219449,38.9672992 L18.5184751,38.5867168 L18.9825956,38.1267104 L19.5092,37.5896281 L20.0931814,36.9778183 C20.1950093,36.8697532 20.2990152,36.7586723 20.4050927,36.6446245 C21.9240792,35.0115056 23.4264945,33.2360328 24.8235751,31.3616212 C28.9063504,25.8839121 31.372549,20.6031377 31.372549,15.6862745 C31.372549,7.03438563 24.3384163,0 15.6862745,0 Z" id="Path" fill="#FFFFFF"></path>
                        <path d="M15.6862745,2.85204991 C8.60906863,2.85204991 2.85204991,8.60973708 2.85204991,15.6862745 C2.85204991,25.15459 14.6933601,36.4081996 15.1975045,36.883066 C15.3353387,37.0118761 15.5108066,37.0766488 15.6862745,37.0766488 C15.8617424,37.0766488 16.0372103,37.0118761 16.1751114,36.883066 C16.6791889,36.4081996 28.5204991,25.15459 28.5204991,15.6862745 C28.5204991,8.60973708 22.7634804,2.85204991 15.6862745,2.85204991 Z M15.6862745,22.8164216 C11.7549242,22.8164216 8.55612745,19.6176248 8.55612745,15.6862745 C8.55612745,11.7549242 11.7549911,8.55612745 15.6862745,8.55612745 C19.6175579,8.55612745 22.8164216,11.7549911 22.8164216,15.6862745 C22.8164216,19.6175579 19.6176248,22.8164216 15.6862745,22.8164216 Z" id="Shape" fill="#8BEA97"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
`;

export default finish;
