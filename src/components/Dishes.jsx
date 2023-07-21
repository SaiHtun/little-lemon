import Dish from "./Dish";

const Dishes = ({ dishes }) => {
  return (
    <>
      {dishes.map((d, i) => <Dish key={i} d={d} />)}
    </>
  )
}

export default Dishes;