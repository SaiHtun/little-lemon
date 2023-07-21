import Availability from "../components/Availability";
import { availability } from "../constants";
import styles from "./Reservation.module.css";

const Reservation = () => {
  const { reservation } = styles;

  return (
    <main className={reservation}>
      <h1>Availability</h1>
      <span>May 4th</span>
      <Availability availability={availability} />
    </main>

  )
}

export default Reservation;