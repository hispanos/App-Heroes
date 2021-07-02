import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {getHeroesByPublisher} from '../../selectors/filters';
import HeroeCard from './HeroeCard';

const HeroesList = ({publisher}) => {

    const list = getHeroesByPublisher(publisher);

    return (
        <Container>
            <Row>
                {
                    list.map((heroe) => (
                        <HeroeCard 
                            key={heroe.id}
                            heroe={heroe}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}

export default HeroesList
