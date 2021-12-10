import React, { useReducer } from 'react'
import NewIllnessOption from './NewIllnessOption'

const NewIllness = (props) => {
    const initialState = {
        selector: 'Please select a type of person',
        selected: [],
        appointments: props.data.appointments
    }

    const reducer = (state, newState) => ({...state, ...newState})
    const [state, setState] = useReducer(reducer, initialState)

    // Update changes made in the form
    const handleChange = (event) => {
        const selected = props.data[event.target.value]
        setState({
            selected
        })
    }

    // Handling submit event to mark sick
    const handleSubmit = (event) => {
        event.preventDefault()
        const type = event.target.type.value
        const id = parseInt(event.target.id.value)

        if (type === 'dentists') {
            const newList = state.selected
            newList[id].isIll = true
            props.makeDentistSick(newList)
        } else {
            const appointments = state.appointments.filter(app => {
                return app.patient.id !== id
            })
            props.makePatientSick(appointments)
        }
        event.target.reset()
    }

    const getOptions = 
        state.selected.map(person => {
            return <NewIllnessOption {...person} key={person.id} />
        })

    return (
        <form onSubmit={handleSubmit}>
            <h1>Mark sick</h1>
            <select name="type" onChange={handleChange} defaultValue="" required>
                <option value="" disabled>{state.selector}</option>
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

export default NewIllness