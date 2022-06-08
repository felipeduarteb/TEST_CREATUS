import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vw;
    width: 13vw;
    height: 100%;
    
`;
export const ContainerImage = styled.figure`
    width: 13vw;
    height: 12vw;
    border: 1px solid #707070;
    border-radius: 1px;
    overflow: hidden;
    cursor: pointer;
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
`;
export const DescriptionContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: .8vw;
`;
export const Title = styled.h2`
    font-size: 1.3vw;
`;
export const Description = styled.p`

`;
export const PriceContainer = styled.p`
    display: flex;
    flex-direction: column;
    gap: .3vw;
`;
export const Span = styled.span`
    font-size: 1.5vw;
    font-weight: bold;
`;
export const ButtonStyle = styled.button`
    width: 100%;
    height: 2.5vw;
    border: solid 1px #707070;
    border-radius: 4px;
    cursor: pointer;
    
`;
