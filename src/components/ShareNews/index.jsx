import React from 'react';

import { Container, TitleContainer, Line, Title, SubTitle, FormStyle, ContainerInput, Label, InputStyle, ButtonStyle } from './styled';

function ShareNews() {
    const initialState = {
        friendname: '',
        friendemail: '',
    }
    const [friendInfos, setFriendInfos] = React.useState(initialState);
    const handleChangeValues = (e) => {
        const { name, value } = e.target;
        if (name === 'friendname') {
            setFriendInfos({ ...friendInfos, [name]: value });
        } else if (name === 'friendemail') {
            setFriendInfos({ ...friendInfos, [name]: value });
        }
    }
    const handleSubmitSuccessfull = () => {
        setFriendInfos(initialState);
        const inputs = document.querySelectorAll('.error');
        console.log(inputs);
        inputs.forEach(input => {
          console.log(input);
          input.classList.remove('error');
          input.setAttribute('placeholder', `Digite o ${input.id === 'friendname' ? 'Nome' : 'E-mail'} do seu amigo`);
        });
    }
    const alertUser = (typeInput, control) => {
        const input = document.querySelector(`#${typeInput}`);
        input.classList.remove('error');
        const nameInput = typeInput === 'friendname' ? 'Nome'
        : 'E-mail';
        const mesageAlert = `Digite um ${nameInput} válido`;
        input.focus();
        input.setAttribute('placeholder', mesageAlert);
        input.value = '';
        input.classList.add('error');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const isValidEmail = validEmail.test(friendInfos.friendemail);
        const isValidName = friendInfos.friendname === '';
        isValidName ? alertUser('friendname', isValidName)
        : !isValidEmail ? alertUser('friendemail', isValidEmail)
        : handleSubmitSuccessfull();
        
    }
    return (
        <Container id='shareNews'>
            <TitleContainer>
                <Line />
                <Title>Compartilhe a novidade</Title>
                <Line />
            </TitleContainer>
            <SubTitle>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</SubTitle>

            <FormStyle>
                <ContainerInput>
                    <Label htmlFor='friendname'>Nome do seu amigo:</Label>
                    <InputStyle
                        type='text'
                        id='friendname'
                        name="friendname"
                        placeholder='Digite o Nome do seu amigo'
                        value={friendInfos.friendname}
                        onChange={e => handleChangeValues(e)}
                    />
                </ContainerInput>
                <ContainerInput>
                    <Label htmlFor='friendemail'>E-mail do seu amigo:</Label>
                    <InputStyle
                        type='text'
                        id='friendemail'
                        name="friendemail"
                        placeholder='Digite o E-mail do seu amigo'
                        value={friendInfos.friendemail}
                        onChange={e => handleChangeValues(e)}
                    />
                </ContainerInput>
            </FormStyle>
            <ButtonStyle onClick={(e) => handleSubmit(e)}>Enviar agora</ButtonStyle>
        </Container>
    );
}

export default ShareNews;