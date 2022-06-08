import React, { useEffect, useState } from 'react';
import { GetProducts } from '../../services/getProducts';
import Product from '../Product';

import { Container, TitleContainer, Title, Line, ProductContainer, ButtonMoreProducts } from './styled';

function SpecialSelection() {
    const [listProducts, setListProducts] = useState([]);

    const handleGetProducts = async () => {
        const response = await GetProducts();
        if (response) setListProducts(response.products);
    }
    useEffect(() => {
        handleGetProducts();
    }, []);
    return (
        <Container>
            <TitleContainer>
                <Line />
                <Title>Sua seleção especial</Title>
                <Line />
            </TitleContainer>
            <ProductContainer>
                {
                    listProducts.map((item) => {
                        return (
                            <Product
                                key={item.id}
                                poster={item.image.replace('//', 'https://')}
                                name={item.name}
                                description={item.description}
                                oldPrice={item.oldPrice}
                                price={item.price}
                            />
                        );
                    })
                }
            </ProductContainer>
            <ButtonMoreProducts>Ainda mais produtos aqui!</ButtonMoreProducts>
        </Container>
    );
}

export default SpecialSelection;