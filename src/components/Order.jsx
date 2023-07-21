import styles from "../pages/Home.module.css";

const Orders = ({ meal }) => {
  const { mealOrderType } = styles;

  return (
    <p className={mealOrderType}>{meal}</p>
  )
}

export default Orders;