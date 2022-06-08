import React from 'react';

import { Container, Label, InputStyle, GenderContainer, ButtonStyle } from './styled';
import '../../global/Style/Animations/AlertInvalidInfos.css';

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
    const input = document.querySelector(`#${typeInput}`);
    const nameInput = typeInput === 'name' ? 'Nome'
    : typeInput === 'email' ? 'E-mail'
    : 'CPF'
    const mesageAlert = `Digite um ${nameInput} válido`;
    input.focus();
    input.setAttribute('placeholder', mesageAlert);
    input.classList.toggle('error');
    input.value = '';
  }
  const handleSubmitSuccessfull = () => {
    setUserInfos(initialState);
    const inputs = document.querySelectorAll('.error');
    inputs.forEach(input => {
      console.log(input);
      input.classList.remove('error');
      input.setAttribute('placeholder', `Digite seu ${input.id === 'name' ? 'Nome' : input.id === 'email' ? 'E-mail' : 'CPF (somente números)'}`);
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validCPF = /^\d{3}\d{3}\d{3}\d{2}$/;
    userInfos.name === '' ? alertUser('name')
    :!validEmail.test(userInfos.email) ? alertUser('email') 
    :!validCPF.test(userInfos.cpf) ? alertUser('cpf') 
    :   handleSubmitSuccessfull();

    
  }
  return (
    <Container id='form-contact'>
      <Label htmlFor='name'>Seu nome:</Label>
      <InputStyle
        type='text'
        id='name'
        name="name"
        placeholder='Digite seu Nome'
        value={userInfos.name}
        onChange={e => handleChangeValues(e)}
      />
      <Label htmlFor='email'>E-mail:</Label>
      <InputStyle
        type='text'
        id='email'
        name="email"
        placeholder='Digite seu E-mail'
        value={userInfos.email}
        onChange={e => handleChangeValues(e)}
      />
      <Label htmlFor='cpf'>CPF:</Label>
      <InputStyle
        type='number'
        id='cpf'
        name="cpf"
        placeholder='Digite seu CPF (somente números)'
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