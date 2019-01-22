import React, { Component } from 'react'


class AnimalList extends Component {
   
   
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    state = {

        employees: this.employeesFromAPI

    }
   
    render() {

        return (
            <section className="employees">
            {
                this.state.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList