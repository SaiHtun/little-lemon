import styles from "../pages/Home.module.css";

const Orders = ({ d }) => {
  const { dish, dishName, dishDescription, dishPrice, underline } = styles;

  return (
    <div className={dish}>
      <h2 className={dishName}>{d.name}</h2>
      <p className={dishDescription}>{d.description}</p>
      <span className={dishPrice}>{d.price}</span>
      <div className={underline} />
    </div>
  )
}

export default Orders;