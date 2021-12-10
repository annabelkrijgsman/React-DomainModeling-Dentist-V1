import React from 'react'
import '../style/App.css'

import NewPatient from './forms/NewPatient'
import NewDentist from './forms/NewDentist'
import NewAppointment from './forms/NewAppointment'
import NewIllness from './forms/NewIllness'

const Home = (data) => {
    return (
        <div className="form-container">
            <NewPatient {...data} />
            <NewDentist {...data} />
            <NewAppointment {...data} />
            <NewIllness {...data} />
        </div>
    )
}
export default Home