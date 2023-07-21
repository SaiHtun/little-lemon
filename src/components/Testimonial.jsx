import styles from "../pages/Home.module.css";

const Orders = ({ t }) => {
  const { testi, testiContent, testiName } = styles;

  return (
    <div className={testi}>
      <p className={testiContent}>{t.content}</p>
      <span className={testiName}>{t.name}</span>
    </div>
  )
}

export default Orders;