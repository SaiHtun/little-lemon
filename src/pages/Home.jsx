import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { mealTypes, dishesTypes, testimonials } from "../constants";
import Orders from "../components/Orders";
import Testimonials from "../components/Testimonials";
import Dishes from "../components/Dishes";

const Home = () => {
  const { heroCity, hero, heroText, reserveBtn, heroTitle, mealOrder, mealOrderTitle, dishes, testis } = styles;

  return (
    <main>
      {/* Hero */}
      <section className={hero}>
        <div className={heroText}>
          <h1 className={heroTitle}>Little Lemon</h1>
          <p className={heroCity}>Mediterranean Specialty @ Chicago</p>
          <Link to="/booking" className={reserveBtn}>Reserve Table</Link>
        </div>
      </section>
      {/* Order */}
      <section className={mealOrder}>
        <h2 className={mealOrderTitle}>order for delivery!</h2>
        <Orders mealTypes={mealTypes} />
      </section>
      {/* Dishes */}
      <section className={dishes}>
        <Dishes dishes={dishesTypes} />
      </section>
      {/* Testimonials */}
      <section className={testis}>
        <Testimonials testimonials={testimonials} />
      </section>
    </main>
  )
}

export default Home;