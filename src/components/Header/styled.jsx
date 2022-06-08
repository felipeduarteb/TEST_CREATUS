import styled from 'styled-components';

export const Container = styled.header`
    height: 23vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4vw;
    text-align: center;
    
    @media (max-width: 767px){
        height: 60vw;
    }
`;
export const Background = styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 23vw;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 65%);
    background: #707070;
    @media (max-width: 767px){
        height: 55vw;
    }
`;
export const Title = styled.h1`
    color: #FFFFFF;
`;
export const TitleSpan = styled.span`
    display: block;
    font-size: 2vw;
    color: #FFFFFF;
    @media (max-width: 767px){
        font-size: 6vw;
    }
    
`;
export const SubTitle = styled.h2`
    color: #FFFFFF;
    padding: 2vw;
    @media (max-width: 767px){
        padding: 6vw;   
    }
`;
