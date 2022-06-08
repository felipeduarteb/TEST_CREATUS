import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3vw;
    align-items: center;
    /* justify-content: center; */
`;
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const Title = styled.h2`
    width: 70vw;
    padding: 0 1vw;
    text-align: center;
    font-size: 1.8vw;
`;
export const Line = styled.span`
    width: 100%;
    background-color: #707070;
    height: 1px;
`;
export const SubTitle = styled.h3`

`;

export const FormStyle = styled.form`
    display: flex;
    align-items: center;
    gap: 3vw;
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5vw;
`;

export const Label = styled.label`
    font-size: 1vw;
`;
export const InputStyle = styled.input`
    border: 1px solid #707070;
    border-radius: 4px;
    height: 2.5vw;
    width: 30vw;
`;
export const GenderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .3vw;
    label {
        margin-right: 2vw;
        cursor: pointer;
    }
    input {
        cursor: pointer;
    }
`;
export const ButtonStyle = styled.button`
    border: 1px solid #707070;
    border-radius: 4px;
    width: 30vw;
    height: 3vw;
    cursor: pointer;
`;

