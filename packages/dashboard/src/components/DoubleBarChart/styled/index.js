import styled from 'styled-components';

const StyledContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const StyledUl = styled.ul`
    display: flex;
    list-style: none;
`;

const StyledLi = styled.li`
    display: flex;
    margin-right: 1em;
`;

const Bullet = styled.span`
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${(props) => props.color};
`;

const StyledSpan = styled.span`
    text-transform: uppercase;
    line-height: 16px;
    font-weight: bold;
    color: ${(props) => props.color};
`;

export { StyledContainer, StyledUl, StyledLi, Bullet, StyledSpan };
