import React from 'react';

import { Container, ContainerImage, Image, DescriptionContainer, Title, Description, PriceContainer, Span, ButtonStyle } from './styled';

function Product({poster, name, description, oldPrice, price, parcel}) {
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
                    ou {parcel}x de R$ {price / parcel}
                </PriceContainer>
            </DescriptionContainer>
            <ButtonStyle>Comprar</ButtonStyle>
        </Container>
    );
}

export default Product;