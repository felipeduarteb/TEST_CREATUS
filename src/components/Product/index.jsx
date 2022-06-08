import React from 'react';

import { Container, ContainerImage, Image, DescriptionContainer, Title, Description, PriceContainer, Span } from './styled';

function Product({poster, name, description, oldPrice, price}) {
    return (
        <Container>
            <ContainerImage>
                <Image src={poster} />
            </ContainerImage>
            <DescriptionContainer>
                <Title>{name}</Title>
                <Description>{description}</Description>
                <PriceContainer>
                    De: R$ {oldPrice}
                    <Span>Por: R$ {price}</Span>
                    ou 2x de R$ 9,90
                </PriceContainer>

            </DescriptionContainer>
        </Container>
    );
}

export default Product;