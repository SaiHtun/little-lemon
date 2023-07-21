import Time from "./Time";
import styles from "../pages/Reservation.module.css";

const Availability = ({ availability }) => {
  const { avai } = styles;

  return (
    <main className={avai}>
      {availability.map((a, i) => <Time key={i} time={a} />)}
    </main>
  )
}

export default Availability;