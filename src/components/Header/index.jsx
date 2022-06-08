import React from 'react';
import Nav from '../Nav';

import { Container, ContainerTitle, Title, TitleSpan, SubTitle } from './styled';

function Header() {
    return (
        <Container>
            <Title>
                Uma seleção de produtos
                <TitleSpan>Especial para você</TitleSpan>
            </Title>
            <SubTitle>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</SubTitle>
            
            <Nav />
        </Container>
    );
}

export default Header;