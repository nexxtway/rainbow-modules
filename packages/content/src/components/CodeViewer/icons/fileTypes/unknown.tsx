import React from 'react';
import { BaseProps } from '../../types';

const UnknownFile: React.FC<BaseProps> = (props: BaseProps) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="13px"
            height="16px"
            viewBox="0 0 26 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-154.000000, -99.000000)" fill="#000000">
                    <path d="M174,107 C172.896,107 172,106.104 172,105 L172,101 L178,107 L174,107 L174,107 Z M178,127 C178,128.104 177.104,129 176,129 L158,129 C156.896,129 156,128.104 156,127 L156,103 C156,101.896 156.896,101 158,101 L169.972,101 C169.954,103.395 170,105 170,105 C170,107.209 171.791,109 174,109 L178,109 L178,127 L178,127 Z M172,99 L172,99.028 C171.872,99.028 171.338,98.979 170,99 L158,99 C155.791,99 154,100.791 154,103 L154,127 C154,129.209 155.791,131 158,131 L176,131 C178.209,131 180,129.209 180,127 L180,109 L180,107 L172,99 L172,99 Z" />
                </g>
            </g>
        </svg>
    );
};

UnknownFile.defaultProps = {
    className: undefined,
    style: undefined,
};

export default UnknownFile;
