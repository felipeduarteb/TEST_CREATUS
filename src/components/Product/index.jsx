import React from 'react';

import { Container, ContainerImage, Image, DescriptionContainer, Title, Description, PriceContainer, Span } from './styled';

function Product() {
    return (
        <Container>
            <ContainerImage>
                <Image />
            </ContainerImage>
            <DescriptionContainer>
                <Title>Nome do produto</Title>
                <Description>
                    Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices.
                </Description>
                <PriceContainer>
                    De: R$ 99,90
                    <Span>Por: R$ 19,30</Span>
                    ou 2x de R$ 9,90
                </PriceContainer>

            </DescriptionContainer>
        </Container>
    );
}

export default Product;