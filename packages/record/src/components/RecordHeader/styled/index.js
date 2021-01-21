import styled from 'styled-components';
import { LoadingShape } from 'react-rainbow-components';
import { CubeFilled } from '@rainbow-modules/icons';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid ${(props) => props.theme.rainbow.palette.border.divider};
`;

export const LeftContent = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.rainbow.palette.text.disabled};
`;

export const CubeIcon = styled(CubeFilled)`
    width: 16px;
    height: 16px;
`;

export const Label = styled.h3`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.header};
    margin-left: 8px;
`;

export const Description = styled.h1`
    font-size: 28px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-family: Lato Bold, Helvetica, sans-serif;
`;

export const TagsContainer = styled.div`
    display: flex;
    margin-left: 12px;
`;

export const ActionsContainer = styled.div`
    padding-left: 8px;
`;

export const Body = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
`;

export const LabelLoadingShape = styled(LoadingShape)`
    margin: 5px 0 15px;
    width: 120px;
`;

export const DescriptionLoadingShape = styled(LoadingShape)`
    margin: 0 0 6px;
    width: 220px;
    height: 25px;
`;
