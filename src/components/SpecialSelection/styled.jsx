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
    align-items: center;
    justify-content: space-between;
    gap: 3vw;
`;
export const ButtonMoreProducts = styled.button`
    margin: 0 auto;
    width: 30vw;
    height: 3vw;
    border: solid 1px #707070;
    border-radius: 4px;
    cursor: pointer;
`;
