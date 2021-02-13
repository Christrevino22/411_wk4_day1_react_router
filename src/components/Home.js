import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import cars from '../cars.json'
import {Link} from 'react-router-dom';

const Home = () => {
    console.log('CARS', cars)
    return (
        <div className="card-container">
            {cars.map((car, idx) => (
                //DOES THIS ********FOR EVERY CAR IN CAR GIVE IT AN INDEX KEY AND RETURN ALL INFO FROM THE CARD COMPONENT, THEN PASS DOWN TO CAR.JS AND DISPLAY THE APROPRIATE THING OR PROPS OR WHATVER
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{car.Name.toUpperCase()}</span>
                        <ul>
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${car.id}`}>
                        <a>See more Details</a>
                        </Link>
                        
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home