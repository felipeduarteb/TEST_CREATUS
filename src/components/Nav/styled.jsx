import styled from 'styled-components';

export const Container = styled.nav`
    width: min-content;
    @media (max-width: 767px){
        width: 70vw;
    }
`;
export const List = styled.ul`
    display: flex;
    gap: 1.5vw;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px){
        gap: 4.5vw;
        flex-wrap: wrap;
        
    }
`;
export const ItemList = styled.li`
    cursor: pointer;
    border-radius: 4px;
    border: solid 1px #707070;
    width: 13vw;
    height: 2.5vw;
    background: #FFFFFF;
    @media (max-width: 767px){
        width: 30vw;
        height: 6vw;
    }
`;
export const Link = styled.a`
    width: 100%;
    height: 100%;
    color: #888888;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    
`;
