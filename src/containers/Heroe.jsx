import React from 'react'
import { useParams } from "react-router";
import { getHeroeById } from "../selectors/filters";
import { Container, Row, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

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
                        </Card.Body>
                        <ListGroup>
                            <ListGroupItem>Alter Ego: {heroe.alter_ego}</ListGroupItem>
                            <ListGroupItem>Publisher: {heroe.publisher}</ListGroupItem>
                            <ListGroupItem>First Appearance: {heroe.first_appearance}</ListGroupItem>
                            <ListGroupItem>Characters: {heroe.characters}</ListGroupItem>
                        </ListGroup>
                    </div>
                </Row>
            </Card>
        </Container>
    )
}

export default Heroe
