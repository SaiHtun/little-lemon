import Testimonial from "./Testimonial";

const Testimonials = ({ testimonials }) => {
  return (
    <>
      {testimonials.map((t, i) => <Testimonial key={i} t={t} />)}
    </>
  )
}

export default Testimonials;