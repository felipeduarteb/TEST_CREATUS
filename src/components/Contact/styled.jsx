import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 5vw;
    justify-content: center;
    *{
        color: #888888;
    }
    @media (max-width: 767px){
        flex-direction: column;   
        align-items: center;
    }

`;
export const Apresentation = styled.aside`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
    @media (max-width: 767px){
        width: 90%;
    }
    `;
export const Title = styled.h2`
    font-size: 1.5vw;
    @media (max-width: 767px){
        font-size: 4.5vw;   
    }
    `;
export const Text = styled.p`
    width: 100%;
    height: 100%;
    `;
export const FormContainer = styled.aside`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
    @media (max-width: 767px){
        width: 90%;   
    }
`;
