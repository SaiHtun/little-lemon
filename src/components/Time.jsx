import styles from "../pages/Reservation.module.css";

const Time = ({ time }) => {
  const { timeSlices, timeSlice, timeStart } = styles;

  return (
    <div>
      <span className={timeStart}>{time.start}</span>
      <div className={timeSlices}>
        {time.slices.map((s, i) => <p className={timeSlice} key={i}>{s}</p>)}
      </div>
    </div>
  )
}

export default Time;