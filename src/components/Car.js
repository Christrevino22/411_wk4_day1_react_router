import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import {Container, Paper, Chip} from '@material-ui/core';
// Container, Paper, Chip //

const Car = (props) => {
    let id = props.match.params.id
    return (
        <Container maxWidth="sm" className="car-container">
        <Paper className="car-paper">
            <h2>{cars.Name}</h2>
            {
                Object.keys(cars).map((key, idx) => {
                    return <Chip label={`${id}: ${cars[key]}`}></Chip>
                })
            }
        </Paper>
    </Container>
    )
}

export default Car