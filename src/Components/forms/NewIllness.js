import React, { Component } from 'react'
import NewIllnessOption from './NewIllnessOption'

class NewIllness extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selector: 'Please select a type of person',
            selected: [],
            appointments: props.data.appointments
        }
    }

    // Update changes made in the form
    handleChange = (event) => {
        const selected = this.props.data[event.target.value]
        this.setState({
            selected
        })
    }

    // Handling submit event to mark sick
    handleSubmit = (event) => {
        event.preventDefault()
        const type = event.target.type.value
        const id = parseInt(event.target.id.value)

        if (type === 'dentists') {
            const newList = this.state.selected
            newList[id].isIll = true
            this.props.makeDentistSick(newList)
        } else {
            const appointments = this.state.appointments.filter(app => {
                return app.patient.id !== id
            })
            this.props.makePatientSick(appointments)
        }
        event.target.reset()
    }

    render() {
        const getOptions = 
            this.state.selected.map(person => {
                return <NewIllnessOption {...person} key={person.id} />
            })

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Mark sick</h1>
                <select name="type" onChange={this.handleChange} defaultValue="" required>
                    <option value="" disabled>{this.state.selector}</option>
                    <option value="patients">Patient</option>
                    <option value="dentists">Dentist</option>
                </select>
                <select name="id" defaultValue="" required >
                    <option value="" disabled>Select a Person</option>
                    {getOptions}
                </select>
                <input className="submit" type="submit" value="Mark sick"/>
            </form>
        )
    }
}

export default NewIllness