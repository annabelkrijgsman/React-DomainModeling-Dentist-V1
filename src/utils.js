import personData from "./Data/PersonData"
import { v4 as uuidv4 } from 'uuid'

const getRandomClient = () => {
  let person = personData.clients[Math.floor(Math.random() * personData.clients.length)]
  return `${person.firstName} ${person.lastName}`
}

const getRandomDentist = () => {
  let person = personData.dentists[Math.floor(Math.random() * personData.dentists.length)]
  return `${person.firstName} ${person.lastName}`
}

const getRandomAssistant = () => {
  let person = personData.assistants[Math.floor(Math.random() * personData.assistants.length)]
  return `${person.firstName} ${person.lastName}`
}

const getRandomTime = () => {
  let hour
  while (true) {
    hour = Math.floor(Math.random() * 24)
    if (hour > 7 && hour < 19) {
      return hour
    }
  }
}

const getRandomDay = () => Math.floor(Math.random() * 20) + 1

const generateRandomAppointment = () => ({
  id: uuidv4(),
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getRandomClient(),
  dentist: getRandomDentist(),
  assistant: getRandomAssistant(),
})

const generateRandomAppointments = num =>
  Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment())

export default generateRandomAppointments