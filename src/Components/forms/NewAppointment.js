import React, { useReducer } from 'react'
import NewAppointmentPerson from './NewAppointmentPerson'
import NewAppointmentTime from './NewAppointmentTime'

const NewAppointment = (props) => {
    const initialState = {
        selectedPatient: "",
        selectedType: null,
        eligibleDentists: [],
        eligibleAssistants: [],
        selectedDentist: null,
        selectedAssistant: null,
        selectedDay: null,
        eligibleTimes: [],
        selectedTime: null,
        patients: props.data.patients,
        dentists: props.data.dentists,
        assistants: props.data.assistants,
        appointments: props.data.appointments
    }

    const reducer = (state, newState) => ({...state, ...newState})
    const [state, setState] = useReducer(reducer, initialState)

    // Get the patient ID from the form and set it to stat
    const setPatient = (event) => {
        setState({
            selectedPatient: parseInt(event.target.value)
        })
    }

    // When the type is selected, check wich employees have the required skill
    const getEligible = (event) => {
        const dentists = state.dentists.filter(dentist => {
            return dentist.skills.includes(event.target.value)
        })

        const assistants = state.assistants.filter(assist => {
            return assist.skills.includes(event.target.value)
        })

        setState({
            eligibleAssistants: assistants
        })

        setState({
            eligibleDentists: dentists
        })

        setState({
            selectedType: event.target.value
        })
    }

    // When the field is selected, set it to state
    const setDentist = (event) => {
        setState({
            selectedDentist: parseInt(event.target.value)
        })
    }

    // When the type is selected, check wich assistants have the required skill
    const setAssistant = (event) => {
        setState({
            selectedAssistant: parseInt(event.target.value)
        })
    }

    // Set day AND check for available timeslots
    const setDay = (event) => {
        setState({
            selectedDay: parseInt(event.target.value)
        })
    }

    // When the time is selected, set it to state
    const setTime = (event) => {
        setState({
            selectedTime: parseInt(event.target.value)
        })
    }

    // On submit, call function from ./App and push the appointment
    const handleSubmit = (event) => {
        event.preventDefault()
        const checkAssistant = () => {
            if(state.selectedAssistant !== null) {
                return state.assistants.find(assistant => {
                    return assistant.id === state.selectedAssistant
                })
            } else {
                return null
            }
        }

        // Compile new appointment
        const appointment = {
            patient: state.patients.find(patient => { return patient.id === state.selectedPatient}),
            type: state.selectedType,
            dentist: state.dentists.find(dentist => {return dentist.id === state.selectedDentist}),
            assistant: checkAssistant(),
            day: state.selectedDay,
            time: state.selectedTime
        }
        props.addAppointment(appointment)
        event.target.reset()
    }

    // Get list of patients
    const getPatients = state.patients
    .sort((a, b) => {return a.firstname.localeCompare(b.firstname)})
    .map(person => {return <NewAppointmentPerson {...person} key={person.id}/>})

    // Get list of dentists with the selected skill
    const eligibleDentists = state.eligibleDentists
    .sort((a, b) => {return a.firstname.localeCompare(b.firstname)})
    .map(person => {return <NewAppointmentPerson {...person} key={person.id} />})

    // Get list of assistants with the selected skill
    const eligibleAssistants = state.eligibleAssistants
    .sort((a, b) => {return a.firstname.localeCompare(b.firstname)})
    .map(person => {return <NewAppointmentPerson {...person} key={person.id}/>})

    // Get available times for the selected day, with the selected dentist and assistant
    const day = state.selectedDay
    const dentist = state.selectedDentist
    const assistant = state.selectedAssistant
    const appsInDay = state.appointments.filter(app => {
        return app.day === day
    })

    // Check for available timeslot
    let times = Array.from({length: 11}, (v, k) => k + 8)
    appsInDay.forEach(app => {
        if(dentist !== app.dentist.id) {
            if(assistant === null || assistant !== app.assistant.id) {
                // do nothing, timeslot is free
            } else {
                times = times.filter(time => time !== app.time)
            }
        } else {
            times = times.filter(time => time !== app.time)
        }
    })

    // Compile the list for timeslots
    const eligibleTimes = times.map(time => {
        return <NewAppointmentTime time={time} key={time} />
    })

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create a new appointment</h1>
            
            {/*Select a patient*/}
            <select name="patient" defaultValue="" value={state.patient} onChange={setPatient} required>
                <option disabled value="">Select a patient</option>
                {getPatients}
            </select>
            
            {/*Select type of operation and check which dentist is elligabl*/}
            <select name="type" defaultValue="" onChange={getEligible} required>
                <option disabled value="">Select a type of appointment</option>
                <option value="Set filling">Set filling</option>
                <option value="Set crown">Set crown</option>
                <option value="Pull tooth">Pull tooth</option>
                <option value="Dental surgery">Dental surgery</option>
            </select>

            {/*Select a dentist*/}
            <select name="dentist" onChange={setDentist} defaultValue="" required>
                <option disabled value="">Select an eligible dentist</option>
                {eligibleDentists}
            </select>

            {/*Select an assistant*/}
            <select name="dentist" onChange={setAssistant} defaultValue="null">
                <option disabled value="null">Select an eligible assistant (optional)</option>
                {eligibleAssistants}
            </select>

            {/*Select the day and check availability for*/}
            <select onChange = {setDay} defaultValue="">
                <option disabled value="">Select a day</option>
                    <option value="1">1</option>        
                    <option value="2">2</option>        
                    <option value="3">3</option>        
                    <option value="4">4</option>        
                    <option value="5">5</option>        
                    <option value="6">6</option>        
                    <option value="7">7</option>        
                    <option value="8">8</option>        
                    <option value="9">9</option>        
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
            </select>
            {/*Select a time from available times*/}
            <select defaultValue="" onChange={setTime}>
                <option disabled value="">Select an open timeslot</option>
                {eligibleTimes}
            </select>

            <input className="submit" type="submit" value="Add appointment" />
        </form>
    )
}

export default NewAppointment