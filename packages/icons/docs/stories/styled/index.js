import styled from 'styled-components';
import { Input } from 'react-rainbow-components';

export const StyledWrapperIcons = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    color: #576574;
`;

export const StyledIconsTotal = styled.div`
    display: flex;
    flex: 2;
    font-size: 1.5rem;
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
    padding: 40px 0 30px 0;
    align-items: baseline;
`;

export const StyledCategoryTitle = styled.div`
    display: flex;
    font-size: 1.3rem;
    margin: 40px 0 10px 0;
    color: #576574;
`;

export const StyledIconBox = styled.div`
    min-height: 50px;
    text-align: center;
    margin-right: 20px;
    padding: 0 20px;
    cursor: pointer;
    background: none;
    border: none;
`;

export const Container = styled.div`
    height: 240px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Dropdown = styled.div`
    width: 220px;
    height: 220px;
    border: solid 1px #e4e4e4;
    border-radius: 0.875rem;
    background: white;
    box-shadow: #d7d9e2 0 2px 4px 0;
    transition: all 0.1s linear;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
