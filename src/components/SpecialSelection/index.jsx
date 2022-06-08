import React from 'react';
import Product from '../Product';

import { Container, TitleContainer, Title, Line, ProductContainer, ButtonMoreProducts } from './styled';

function SpecialSelection() {
    return (
        <Container>
            <TitleContainer>
                <Line />
                <Title>Sua seleção especial</Title>
                <Line />
            </TitleContainer>
            <ProductContainer>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </ProductContainer>
            <ButtonMoreProducts>Ainda mais produtos aqui!</ButtonMoreProducts>
        </Container>
    );
}

export default SpecialSelection;