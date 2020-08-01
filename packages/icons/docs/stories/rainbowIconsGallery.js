import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { StyledIconsGallery, StyledCategoryTitle, StyledIconBox } from './styled';

const getCategorizedIcons = (icons) => {
    const categorizedIcons = {
        standards: [],
        customs: [],
    };
    icons.forEach((rainbowIcon, index) => {
        const key = `rainbowIcon-${index}`;
        const iconBox = (
            <StyledIconBox key={key}>
                <rainbowIcon.icon style={{ color: '#a4a7b5' }} />
                <div>{rainbowIcon.name}</div>
            </StyledIconBox>
        );
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
                <div>
                    Lorem ipsum dolor sit amet, lorem ac viverra augue sit, vel eget, lobortis vel.
                </div>
                <StyledIconsGallery>{standards}</StyledIconsGallery>
            </RenderIf>
            <RenderIf isTrue={!!customs.length}>
                <StyledCategoryTitle>Custom Icons</StyledCategoryTitle>
                <div>
                    Lorem ipsum dolor sit amet, lorem ac viverra augue sit, vel eget, lobortis vel.
                </div>
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
