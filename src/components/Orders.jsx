import styles from "../pages/Home.module.css";
import Order from "./Order";

const Orders = ({ mealTypes }) => {
  const { mealOrderList } = styles;

  return (
    <>
      <ul className={mealOrderList}>
        {mealTypes.map((meal, i) => <Order key={i} meal={meal} />)}
      </ul><hr />
    </>
  )
}

export default Orders;