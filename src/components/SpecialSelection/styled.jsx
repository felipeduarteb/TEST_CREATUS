import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3vw;
`;
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const Title = styled.h2`
    width: 50vw;
    padding: 0 1vw;
    text-align: center;
    font-size: 1.8vw;
`;
export const Line = styled.span`
    width: 100%;
    background-color: #707070;
    height: 1px;
`;
export const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
`;
export const ButtonMoreProducts = styled.button`
    width: 30vw;
    height: 3vw;
    margin: 0 auto;
`;
