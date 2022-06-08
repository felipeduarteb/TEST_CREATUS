import styled from 'styled-components';

export const Container = styled.form`
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
    height: 2.5vw;
    cursor: pointer;
`;



