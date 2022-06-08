import React from 'react';

import { Container, Label, InputStyle, GenderContainer, ButtonStyle } from './styled';

function Form() {
  return (
    <Container>
      <Label htmlFor='name'>Seu nome:</Label>
      <InputStyle type='text' id='name' placeholder='Digite seu nome aqui' />
      <Label htmlFor='email'>E-mail:</Label>
      <InputStyle type='text' id='email' placeholder='Digite seu e-mail aqui' />
      <Label htmlFor='cpf'>CPF:</Label>
      <InputStyle type='text' id='cpf' placeholder='Digite seu CPF aqui' />

      <GenderContainer>
        <InputStyle type="radio" id="masculino" name="gender" value="masculino" />
        <Label htmlFor="masculino">Masculino</Label>
        <InputStyle type='radio' id='feminino' name="gender" value='feminino' />
        <Label htmlFor='feminino'>Feminino</Label>
      </GenderContainer>

      <ButtonStyle>Enviar</ButtonStyle>
    </Container>
  );
}

export default Form;