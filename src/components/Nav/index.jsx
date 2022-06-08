import React from 'react';

import { Container, List, ItemList, Link } from './styled';
import Contact from '../Contact';

function Nav() {
    return (
        <Container>
            <List>
                <ItemList><Link href='https://creatusdev.com/' target='_blank'>Conheça a Creatus</Link></ItemList>
                <ItemList><Link href='#contact'>Ajude o algorítimo</Link></ItemList>
                <ItemList><Link href='#userSelection'>Seus produtos</Link></ItemList>
                <ItemList><Link href='#shareNews'>Compartilhe</Link></ItemList>
            </List>
        </Container>
    );
}

export default Nav;