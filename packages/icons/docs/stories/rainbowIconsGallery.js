import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
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
                <StyledCategoryTitle>Standars Icons</StyledCategoryTitle>
                <StyledCategoryDescription>
                    Lorem ipsum dolor sit amet, lorem ac viverra augue sit, vel eget, lobortis vel.
                </StyledCategoryDescription>
                <StyledIconsGallery>{standards}</StyledIconsGallery>
            </RenderIf>
            <RenderIf isTrue={!!customs.length}>
                <StyledCategoryTitle>Custom Icons</StyledCategoryTitle>
                <StyledCategoryDescription>
                    Lorem ipsum dolor sit amet, lorem ac viverra augue sit, vel eget, lobortis vel.
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
