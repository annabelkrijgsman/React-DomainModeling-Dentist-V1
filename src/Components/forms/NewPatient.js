import React from 'react'

const NewPatient = (props) => {
    const patients = props.data.patients
    const handleSubmit = (event) => {
        event.preventDefault()
        const patient = {
            id: patients.sort((a, b) => a.id - b.id).slice(-1)[0].id +1,
            firstname: event.target.firstname.value,
            surname: event.target.surname.value,
            birthyear: event.target.birthyear.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
        }
        props.newPatient(patient)
        event.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add new patient</h1>
            <input type="text" name="firstname" placeholder="Enter firstname" required/>
            <input type="text" name="surname" placeholder="Enter lastname" required/>
            <input type="text" name="birthyear" placeholder="Enter birthyear" required/>
            <input type="text" name="email" placeholder="Enter e-mail address" required/>
            <input type="text" name="phone" placeholder="Enter phonenumber" required/>
            <input type="submit" className="submit" value="Add patient" required/>
        </form>
    )
}

export default NewPatient