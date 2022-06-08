import styled from 'styled-components';

export const Container = styled.header`
    height: 23vw;
    background: #707070;
    background-repeat:no-repeat;
    overflow: visible;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4vw;
    text-align: center;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 65%);
`;
export const Title = styled.h1`
    color: #FFFFFF;
`;
export const TitleSpan = styled.span`
    display: block;
    font-size: 2vw;
    color: #FFFFFF;
`;
export const SubTitle = styled.h2`
    color: #FFFFFF;
    padding: 2vw;
`;
