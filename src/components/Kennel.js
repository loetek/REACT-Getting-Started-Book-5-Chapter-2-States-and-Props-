import React, { Component } from "react"
import EmployeeList from "./Employee/EmployeeList"
import LocationList from "./Location/LocationList"
import AnimalList from "./Animal/AnimalList"
import "./Kennel.css"


class Kennel extends Component {

    animalsFromAPI = [
        { id: 1, name: "Centaur" },
        { id: 2, name: "Dragon" },
        { id: 3, name: "Phoenix" },
        { id: 4, name: "Gryphyn" }
    ]

    state = {

        animals: this.animalsFromAPI

    }
   
   

    render() {
        return (
            <article className="kennel">
                <h1> Locations </h1>
                <LocationList locations={this.props.locations} />
                <br/>
                <h1> Employees </h1>
                <EmployeeList employees={this.props.employees} />
                <br/>
                <h1> Animals </h1>
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}

export default Kennel