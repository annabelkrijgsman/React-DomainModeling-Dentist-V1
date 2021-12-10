import React, { Component } from 'react'
import './style/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './Components/Home'
import Calendar from './Components/Calendar'
import Day from './Components/Day'
import data from './database'
import generateRandomAppointments from './functions/generateRandomAppointments'

const randomAppointments = generateRandomAppointments(150)

class App extends Component {
  constructor(){
    super()
    this.state = {
      patients: data.patients,
      dentists: data.dentists,
      assistants: data.assistants,
      appointments: randomAppointments
    }
  }
  // add new patient, used in NewPatient
  newPatient = (patient) => {
    const patients = this.state.patients
    patients.push(patient)
    this.setState({
      patients
    })
    alert(`Patient '${patient.firstname} ${patient.surname}' added`)
  }

  // make dentist sick, used in NewIllness
  makeDentistSick = (dentists) => {
    alert('Dentist is ill, check the calender for planning.')
    this.setState({
      dentists
    })
  }

  // make patient sick, used in NewIllness
  makePatientSick = (appointments) => {
    alert('Patient is ill. Appointments removed.')
    this.setState({
      appointments
    })
  }

  // Add new dentist / assistant, used in NewDentist
  addDentist = (event) => {
    event.preventDefault()
    const type = event.target.type.value
    const checkboxes = Array.from(document.getElementsByClassName('skill-checkbox'))
    const skills = checkboxes.map(checkbox => {if (checkbox.checked){return checkbox.value} else {return null}})

    // Compile the person
    const newPerson = {
      id: this.state[event.target.type.value].slice(-1)[0].id +1,
      firstname: event.target.firstname.value,
      surname: event.target.surname.value,
      email: `${event.target.firstname.value}.${event.target.surname.value}@tandartspraktijkbvt.nl`,
      skills: skills
    }
    const employees = this.state[event.target.type.value]
    employees.push(newPerson)

    // Push the person into the corresponding array, if the type is dentist
    // Else if the type is assistant
    if (type === 'dentists') {
      this.setState({
        dentists: employees
      })
    } else {
      this.setState({
        assistants: employees
      })
    }
    event.target.reset()
    alert('New employee added. Thank you!')
  }

  // Add new appointment, used in NewAppointment
  addAppointment = (newAppointment) => {
    const appointments = this.state.appointments
    appointments.push(newAppointment)
    this.setState({
      appointments
    })
    alert('Appointment added. Thank you!')
  }

  // Remove an appointment, used in Calender
  removeAppointment = (appointment) => {
    const answer = window.confirm('Do you want to remove this appointment?')
    if (answer) {
      const appointments = this.state.appointments.filter(app => {
        return app.id !== appointment
      })
      this.setState({
        appointments
      })
    }
  }

  // Edit appointment, used in Calender
  editAppointment = (appId) => {
    // Ask user for a dy, and store available times in 'times'
    const selectedDay = parseInt(prompt('Enter a new day (1 - 28)'))
    const selectedApp = this.state.appointments.find(app => app.id === appId)
    const appsOnDay = this.state.appointments
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
      const appointments = this.state.appointments.filter (app => app.id !== appId)
      appointments.push(selectedApp)
      this.setState({
        appointments
      })
    } else {
      alert('Invalid time. Move aborted. Please try again.')
    }
  }

  render() {
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
                  appointments={this.state.appointments} 
                  removeAppointment={this.removeAppointment}
                  editAppointment={this.editAppointment}
                />
              </Route>
              <Route path="/day">
                <Day appointments={this.state.appointments.filter(app => app.day === 1)} />
              </Route>
              <Route path="/">
                <Home 
                  data={this.state}
                  makeDentistSick={this.makeDentistSick}
                  makePatientSick={this.makePatientSick}
                  addDentist={this.addDentist}
                  addAppointment={this.addAppointment}
                  newPatient={this.newPatient}
                />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App