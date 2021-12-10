import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`)

export default ({time, patient, dentist, removeAppointment, editAppointment, id}) => {
  if (dentist.isIll) {
    return (
      <div className="appointment ill">
        <span className="time">{format_time(time)}</span>
        <span className="patient">{`${patient.firstname} ${patient.surname}`}</span>
        <span className="icon-trash" onClick={() => {removeAppointment(id)}}><FontAwesomeIcon icon={faTrash} /></span>
        <span className="icon-edit" onClick={() => {editAppointment(id)}}><FontAwesomeIcon icon={faEdit} /></span>
    </div>
    )
  } else {
    return(
      <div className="appointment">
          <span className="time">{format_time(time)}</span>
          <span className="patient">{`${patient.firstname} ${patient.surname}`}</span>
          <span className="icon-trash" onClick={() => {removeAppointment(id)}}><FontAwesomeIcon icon={faTrash} /></span>
          <span className="icon-edit" onClick={() => {editAppointment(id)}}><FontAwesomeIcon icon={faEdit} /></span>
      </div>
    )
  }
}