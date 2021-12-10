import data from '../database.js'

// Get random patient
const getRandomPatient = () => {
  let person = data.patients[Math.floor(Math.random() * data.patients.length)]
  return person
}

// Get random dentist
const getRandomDentist = () => {
  let person = data.dentists[Math.floor(Math.random() * data.dentists.length)]
  return person
}

// Get random assistant
const getRandomAssistant = () => {
  let person = data.assistants[Math.floor(Math.random() * data.assistants.length)]
  return person
}

// Get random time
const getRandomTime = () => {
  let hour
  while (true) {
    hour = Math.floor(Math.random() * 24)
    if (hour > 7 && hour < 19) {
      return hour
    }
  }
}

// Get random day
const getRandomDay = () => Math.floor(Math.random() * 20) + 1

// Get random type
const getRandomType = () => {
  const types = ['Filling', 'Place crown', 'Pull', 'Surgery']
  const type = types[Math.floor(Math.random() * 4)]
  return type
}

// Generate x amount of appointments
const generateRandomAppointments = (amount) => {
  const appointments = []
  let id = 0
  for(let i = amount; i > 0; --i) {
    id++
    const appointment = {
      id: id,
      day: getRandomDay(),
      time: getRandomTime(),
      patient: getRandomPatient(),
      dentist: getRandomDentist(),
      assistant: getRandomAssistant(),
      type: getRandomType()
    }
    appointments.push(appointment)
  }
  return appointments
}

export default generateRandomAppointments