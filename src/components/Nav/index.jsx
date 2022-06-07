import React from 'react';

import { Container, ItemList, Link } from './styled';

function Nav() {
    return (
        <Container>
            <ItemList><Link href='http://google.com' target='_blank'>Conheça a Creatus</Link></ItemList>
            <ItemList><Link>Ajude o algorítimo</Link></ItemList>
            <ItemList><Link>Seus produtos</Link></ItemList>
            <ItemList><Link>Compartilhe</Link></ItemList>
        </Container>
    );
}

export default Nav;