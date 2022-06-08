import React from 'react';

import { Container, Label, InputStyle, GenderContainer, ButtonStyle } from './styled';

function Form() {
  const initialState = {
    name: '',
    email: '',
    cpf: '',
    gender: ''
  }
  const [userInfos, setUserInfos] = React.useState(initialState);
  const handleChangeValues = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setUserInfos({ ...userInfos, [name]: value });
    } else if (name === 'email') {
      setUserInfos({ ...userInfos, [name]: value });
    } else if (name === 'cpf') {
      setUserInfos({ ...userInfos, [name]: value });
    } else if (name === 'gender') {
      setUserInfos({ ...userInfos, [name]: value });
    }
  }
  const alertUser = (typeInput) => {
    const mesageAlert = `Digite um ${typeInput} válido`;
    const input = document.querySelector(`#${typeInput}`);
    input.focus();
    input.setAttribute('placeholder', mesageAlert);
    input.classList.add('error');
    input.value = '';
  }
  const handleSubmit = (e) => {
    console.log(e.value);
    e.preventDefault();
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    userInfos.name === '' ? alertUser('name')
    :!validEmail.test(userInfos.email) ? alertUser('email') 
    :!validCPF.test(userInfos.cpf) ? alertUser('cpf') 
    :  setUserInfos(initialState);

    
  }
  return (
    <Container>
      <Label htmlFor='name'>Seu nome:</Label>
      <InputStyle
        type='text'
        id='name'
        name="name"
        placeholder='Digite seu nome aqui'
        value={userInfos.name}
        onChange={e => handleChangeValues(e)}
      />
      <Label htmlFor='email'>E-mail:</Label>
      <InputStyle
        type='text'
        id='email'
        name="email"
        placeholder='Digite seu e-mail aqui'
        value={userInfos.email}
        onChange={e => handleChangeValues(e)}
      />
      <Label htmlFor='cpf'>CPF:</Label>
      <InputStyle
        type='number'
        id='cpf'
        name="cpf"
        placeholder='Digite seu CPF aqui'
        value={userInfos.cpf}
        onChange={e => handleChangeValues(e)}
      />

      <GenderContainer>
        <InputStyle
          type="radio"
          id='masculino'
          name="gender"
          value='masculino'
          onChange={e => handleChangeValues(e)}
        />
        <Label htmlFor="masculino">Masculino</Label>
        <InputStyle
          type='radio'
          id='feminino'
          name='gender'
          value='feminino'
          onChange={e => handleChangeValues(e)}
        />
        <Label htmlFor='feminino'>Feminino</Label>
      </GenderContainer>

      <ButtonStyle onClick={e => handleSubmit(e)}>Enviar</ButtonStyle>
    </Container>
  );
}

export default Form;