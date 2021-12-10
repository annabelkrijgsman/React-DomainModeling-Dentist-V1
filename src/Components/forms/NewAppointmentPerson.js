import React from 'react'

const NewAppointmentPerson = (props) => {
    return (
        <option value={props.id}>{props.firstname} {props.surname}</option>
    )
}

export default NewAppointmentPerson