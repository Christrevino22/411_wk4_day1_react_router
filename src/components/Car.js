import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import {Container, Paper, Chip} from '@material-ui/core';
// Container, Paper, Chip //
//BELOW I BEILEVE I NEED TO FULLY FILL OUT THE FORM INVOLVED WITH THE FROM OR ATLEAST LOOK INTO FORMS!!!!!
const Car = (props) => {
    let carId = props.match.params.id-1
    const car = cars[carId]
    console.log("this is the id bitch!!!!", car)
    return (
        <Container maxWidth="sm" className="car-container">
        <Paper className="car-paper">
            <h2>{cars.Name}</h2>
            {
                Object.keys(cars).map((key, idx) => {
                    return <Chip label={`${key}: ${car[key]}`}></Chip>
                })
            }
        </Paper>
    </Container>
    )
}

export default Car