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
    height: 13vw;
    border: 1px solid #707070;

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
