import React from 'react';

import { Container, TitleContainer, Line, Title, SubTitle, FormStyle, ContainerInput, Label, InputStyle, ButtonStyle } from './styled';

function ShareNews() {
    return (
        <Container>
            <TitleContainer>
                <Line />
                <Title>Compartilhe a novidade</Title>
                <Line />
            </TitleContainer>
            <SubTitle>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</SubTitle>

            <FormStyle>
                <ContainerInput>
                    <Label htmlFor='friendname'>Nome do seu amigo:</Label>
                    <InputStyle type='text' id='friendname' placeholder='' />
                </ContainerInput>
                <ContainerInput>
                    <Label htmlFor='friendemail'>E-mail do seu amigo:</Label>
                    <InputStyle type='text' id='friendemail' placeholder='' />
                </ContainerInput>
            </FormStyle>
                <ButtonStyle>Enviar agora</ButtonStyle>
        </Container>
    );
}

export default ShareNews;