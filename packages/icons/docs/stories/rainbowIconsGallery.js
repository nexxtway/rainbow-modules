import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import { StyledIconsGallery, StyledCategoryTitle, StyledCategoryDescription } from './styled';
import RainbowIconItem from './rainbowIconItem';

const getCategorizedIcons = (icons) => {
    const categorizedIcons = {
        standards: [],
        customs: [],
    };
    icons.forEach((rainbowIcon, index) => {
        const key = `rainbowIcon-${index}`;
        const iconBox = <RainbowIconItem key={key} iconBoxId={index} rainbowIcon={rainbowIcon} />;
        if (rainbowIcon) {
            if (rainbowIcon.category === 'standard') {
                categorizedIcons.standards.push(iconBox);
            } else if (rainbowIcon.category === 'custom') {
                categorizedIcons.customs.push(iconBox);
            }
        }
    });
    return categorizedIcons;
};

const RainbowIconsGallery = (props) => {
    const { icons } = props;
    const { standards, customs } = getCategorizedIcons(icons);

    return (
        <div>
            <RenderIf isTrue={!!standards.length}>
                <StyledCategoryTitle>Standard Icons</StyledCategoryTitle>
                <StyledCategoryDescription>
                    These are all our standard icons so far.
                </StyledCategoryDescription>
                <StyledIconsGallery>{standards}</StyledIconsGallery>
            </RenderIf>
            <RenderIf isTrue={!!customs.length}>
                <StyledCategoryTitle>Custom Icons</StyledCategoryTitle>
                <StyledCategoryDescription>
                    These are all our custom icons so far.
                </StyledCategoryDescription>
                <StyledIconsGallery>{customs}</StyledIconsGallery>
            </RenderIf>
        </div>
    );
};

RainbowIconsGallery.propTypes = {
    /** Icons list. */
    icons: PropTypes.array,
};

RainbowIconsGallery.defaultProps = {
    icons: null,
};

export default RainbowIconsGallery;
