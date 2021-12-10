import React, { useReducer } from 'react'
import './style/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './Components/Home'
import Calendar from './Components/Calendar'
import Day from './Components/Day'
import data from './database'
import generateRandomAppointments from './functions/generateRandomAppointments'

const randomAppointments = generateRandomAppointments(150)

const App = () => {
  const initialState = {
      patients: data.patients,
      dentists: data.dentists,
      assistants: data.assistants,
      appointments: randomAppointments
  }

  const reducer = (state, newState) => ({...state, ...newState})
  const [state, setState] = useReducer(reducer, initialState)  

  const addNewPatient = (patient) => {
    const patients = state.patients
    patients.push(patient)
    setState({
      patients
    })
    alert(`Patient '${patient.firstname} ${patient.surname}' added`)
  }

  // make dentist sick, used in NewIllness
  const makeDentistSick = (dentists) => {
    alert('Dentist is ill, check the calender for planning.')
    setState({
      dentists
    })
  }

  // make patient sick, used in NewIllness
  const makePatientSick = (appointments) => {
    alert('Patient is ill. Appointments removed.')
    setState({
      appointments
    })
  }

  // Add new dentist / assistant, used in NewDentist
  const addDentist = (event) => {
    event.preventDefault()
    const type = event.target.type.value
    const checkboxes = Array.from(document.getElementsByClassName('skill-checkbox'))
    const skills = checkboxes.map(checkbox => {if (checkbox.checked){return checkbox.value} else {return null}})

    // Compile the person
    const newPerson = {
      id: state[event.target.type.value].slice(-1)[0].id +1,
      firstname: event.target.firstname.value,
      surname: event.target.surname.value,
      email: `${event.target.firstname.value}.${event.target.surname.value}@tandartspraktijkbvt.nl`,
      skills: skills
    }
    const employees = state[event.target.type.value]
    employees.push(newPerson)

    // Push the person into the corresponding array, if the type is dentist
    // Else if the type is assistant
    if (type === 'dentists') {
      setState({
        dentists: employees
      })
    } else {
      setState({
        assistants: employees
      })
    }
    event.target.reset()
    alert('New employee added. Thank you!')
  }

  // Add new appointment, used in NewAppointment
  const addAppointment = (newAppointment) => {
    const appointments = state.appointments
    appointments.push(newAppointment)
    setState({
      appointments
    })
    alert('Appointment added. Thank you!')
  }

  // Remove an appointment, used in Calender
  const removeAppointment = (appointment) => {
    const answer = window.confirm('Do you want to remove this appointment?')
    if (answer) {
      const appointments = state.appointments.filter(app => {
        return app.id !== appointment
      })
      setState({
        appointments
      })
    }
  }

  // Edit appointment, used in Calender
  const editAppointment = (appId) => {
    // Ask user for a dy, and store available times in 'times'
    const selectedDay = parseInt(prompt('Enter a new day (1 - 28)'))
    const selectedApp = state.appointments.find(app => app.id === appId)
    const appsOnDay = state.appointments
    .filter(app => app.day === selectedDay)
    let times = Array.from({length: 11}, (v, k) => k + 8)
    appsOnDay.forEach(app => {
      if (app.dentist.id === selectedApp.dentist.id || app.assistant.id === selectedApp.assistant.id) {
        times = times.filter(time => time !== app.time)
      }
    })

    // Ask user for a time, and sent it to appointments
    const selectedTime = parseInt(prompt(`Pick an available time (${times}`))
    if (times.includes(selectedTime)) {
      selectedApp.time = selectedTime
      selectedApp.day = selectedDay
      const appointments = state.appointments.filter (app => app.id !== appId)
      appointments.push(selectedApp)
      setState({
        appointments
      })
    } else {
      alert('Invalid time. Move aborted. Please try again.')
    }
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/calendar">
              <Calendar 
                appointments={state.appointments} 
                removeAppointment={removeAppointment}
                editAppointment={editAppointment}
              />
            </Route>
            <Route path="/day">
              <Day 
                appointments={state.appointments.filter(app => app.day === 1)} 
              />
            </Route>
            <Route path="/">
              <Home 
                data={state}
                makeDentistSick={makeDentistSick}
                makePatientSick={makePatientSick}
                addDentist={addDentist}
                addAppointment={addAppointment}
                addNewPatient={addNewPatient}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App