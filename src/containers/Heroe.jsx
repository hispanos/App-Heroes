import React from 'react'
import { useParams } from "react-router";
import { getHeroeById } from "../selectors/filters";
import { Container, Row, Card } from 'react-bootstrap'

const Heroe = () => {
    const {id} = useParams();
    const heroe = getHeroeById(id);

    return (
        <Container>
            <Card>
                <Row>
                    <div className="col-4">
                        <Card.Img variant="top" src={`../assets/images/heroes/${heroe.id}.jpg`} />
                    </div>
                    <div className="col-8">
                        <Card.Body>
                            <Card.Title>{heroe.superhero}</Card.Title>
                            <p>{heroe.alter_ego}</p>
                            <p>{heroe.first_appearance}</p>
                            <p>{heroe.characters}</p>
                        </Card.Body>
                    </div>
                </Row>
            </Card>
        </Container>
    )
}

export default Heroe
