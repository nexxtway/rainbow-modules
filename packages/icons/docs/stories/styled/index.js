import styled from 'styled-components';
import { Input } from 'react-rainbow-components';

export const StyledWrapperIcons = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
`;

export const StyledIconsTotal = styled.div`
    display: flex;
    flex: 2;
    font-size: 1.5rem;
    font-weight: 700;
    align-items: center;
`;

export const StyledSpan = styled.span`
    padding: 0 5px;
`;

export const StyledInputSearch = styled(Input)`
    flex: 1;
`;

export const StyledIconsGallery = styled.div`
    display: flex;
    padding: 40px 0 15px 0;
    align-items: baseline;
    flex-wrap: wrap;
`;

export const StyledCategoryTitle = styled.div`
    display: flex;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 40px 0 10px 0;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
`;

export const StyledCategoryDescription = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: #666;
`;

export const StyledButton = styled.button`
    border: none;
    background: transparent;
    padding: 20px 30px;
    min-height: 80px;
    cursor: pointer;
    border-radius: 8px;
    color: #3f4954;

    > svg {
        margin-bottom: 10px;
        width: 40px;
        height: 40px;
    }

    &:focus,
    &:active {
        outline: 0;
    }

    &:focus,
    &:hover {
        background: #f6f7f9;
    }

    &:focus > svg,
    &:hover > svg {
        color: #01b6f5;
    }
`;

export const StyledTooltip = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    border-radius: 0.875rem;
    box-shadow: #a4a7b5 0 0 4px 0;
    border: solid 1px #f6f7f9;
    background-color: #fff;
    min-width: 60px;
    max-width: 450px;
`;

export const StyledTitle = styled.div`
    display: flex;
    font-size: 1.3rem;
    line-height: 1.3rem;
    font-weight: 700;
    margin-bottom: 17px;
    color: #333;
    align-items: center;
`;

export const StyledSample = styled.div`
    display: flex;
    font-size: 1rem;
    margin-bottom: 10px;
    color: #666;
    align-items: center;
`;

export const StyledIconContainer = styled.span`
    margin-right: 8px;
`;

export const StyledText = styled.div`
    font-size: 0.8125rem;
    font-family: 'Courier New', Courier, monospace;
    line-height: 2;
    color: #333;
    background: #d7d9e2;
    padding: 10px;
    border-radius: 0.375rem;
    font-weight: 700;
`;
