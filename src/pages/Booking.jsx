import { useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../utils/fakeAPI";

const updateTimes = (state, data) => {
  const res = fetchAPI(new Date(data));
  return res.length !== 0 ? res : state
}

const initializeTimes = (initTimes) => [...initTimes, ...fetchAPI(new Date())];

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [isBooked, setIsBooked] = useState(false);

  const submitData = (formData) => {
    const res = submitAPI(formData);
    if (res) setIsBooked(true);
  }

  return (
    <div style={{ height: "100vh" }}>
      {isBooked ? <h1>Your table is booked!</h1> : <BookingForm availableTimes={availableTimes} dispatchOnChange={dispatch} submitData={submitData} />}
    </div>
  )
}

export default Booking