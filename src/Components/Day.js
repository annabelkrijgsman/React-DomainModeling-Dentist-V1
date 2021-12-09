import React from "react"
import "../style/Day.css"
import AppointmentInDay from "./AppointmentInDay"

export default ({ appointments }) => {
  const appointmentsJSX = appointments.map(
    ({ time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
      />
    )
  )
  const sortedAppointmentsJSX = appointmentsJSX.sort((a, b,) => a.props.time - b.props.time)
  return <ul className="dayview">{sortedAppointmentsJSX}</ul>;
}
