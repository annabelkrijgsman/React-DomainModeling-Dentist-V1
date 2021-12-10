import React from 'react'

const NewIllnessOption = (props) => {
    return (
        <option value={props.id}>{props.firstname} {props.surname}</option>
    )
}

export default NewIllnessOption