import React, { useState } from 'react';
import { Application } from 'react-rainbow-components';
import PageRating from '../../src/components/PageRating';

export const SimplePageRating = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <PageRating label="Was this page helpful?" value={value} onChange={setValue} />
        </Application>
    );
};

export const PageRatingWithLabelAlignment = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <PageRating label="Was this page helpful?" value={value} onChange={setValue} />
            </div>
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <PageRating
                    label="Was this page helpful?"
                    value={value}
                    onChange={setValue}
                    labelAlignment="left"
                />
            </div>
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <PageRating
                    label="Was this page helpful?"
                    value={value}
                    onChange={setValue}
                    labelAlignment="right"
                />
            </div>
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <PageRating
                    label="Was this page helpful?"
                    value={value}
                    onChange={setValue}
                    labelAlignment="inlineLeft"
                />
            </div>
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <PageRating
                    label="Was this page helpful?"
                    value={value}
                    onChange={setValue}
                    labelAlignment="inlineRight"
                />
            </div>
        </Application>
    );
};

export default {
    title: 'Modules/Content/Stories/PageRating',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
