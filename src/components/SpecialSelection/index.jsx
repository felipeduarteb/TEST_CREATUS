import React, { useEffect, useState } from 'react';
import { GetMoreProducts } from '../../services/GetMoreProducts';
import { GetProducts } from '../../services/GetProducts';
import Product from '../Product';

import { Container, TitleContainer, Title, Line, ProductContainer, ButtonMoreProducts } from './styled';

function SpecialSelection() {
    const textButton = 'Veja ainda mais produtos aqui!';
    const [listProducts, setListProducts] = useState([]);
    const parcels = 2;
    const [page, setPage] = useState(2);
    const [nameBtn, setNameBtn] = useState(textButton);
    const handleGetProducts = async () => {
        const response = await GetProducts();
        if (response) setListProducts(response.products);
    }
    const handleMoreProducts = async (e) => {
        e.target.setAttribute('disabled', 'disabled');
        setNameBtn('Carregando, aguarde...');
        const response = await GetMoreProducts(page);
        if (response) setListProducts([...listProducts, ...response.products]);
        setNameBtn(textButton);
        e.target.removeAttribute('disabled', 'disabled');
        setPage(page + 1);
    }
    useEffect(() => {
        handleGetProducts();
    }, []);
    return (
        <Container id='userSelection'>
            <TitleContainer>
                <Line />
                <Title>Sua seleção especial</Title>
                <Line />
            </TitleContainer>
            <ProductContainer>
                {
                    listProducts.map((item) => {
                        return (
                            <>
                                <Product
                                    key={item.id}
                                    poster={item.image.replace('//', 'https://')}
                                    name={item.name}
                                    description={item.description}
                                    oldPrice={item.oldPrice}
                                    price={item.price}
                                    parcel={parcels}

                                />
                            </>
                        );
                    })
                }
            </ProductContainer>
            <ButtonMoreProducts onClick={(e) => handleMoreProducts(e)}>{nameBtn}</ButtonMoreProducts>
        </Container>
    );
}

export default SpecialSelection;