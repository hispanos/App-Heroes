import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeroeCard = ({heroe}) => {
    return (
        <div className="col-4">
            <Card className="mx-2 my-2">
                <Row>
                    <div className="col-md-4">
                        <Card.Img variant="top" src={`assets/images/heroes/${heroe.id}.jpg`} />
                    </div>
                    <div className="col-md-8">
                        <Card.Body>
                            <Card.Title>{heroe.superhero}</Card.Title>
                            <p>{heroe.alter_ego}</p>
                            <p>{heroe.first_appearance}</p>
                            <Link to={`/heroe/${heroe.id}`}>Más...</Link>
                        </Card.Body>
                    </div>
                </Row>
            </Card>
        </div>
    )
}

export default HeroeCard
