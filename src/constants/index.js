const navs = [
  {
    path: "/",
    name: "home"
  },
  {
    path: "/reservation",
    name: "reservation"
  }
];

const mealTypes = ["Lunch", "Mains", "Desserts", "A La Carte", "Kebab", "Drinks"]

const dishesTypes = [
  {
    name: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago..",
    price: "$12.99"
  },
  {
    name: "Brushetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garli..",
    price: "$7.99"
  },
  {
    name: "Grilled Fish",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat eget nunc ut aliquet. Aenean malesuada dolor faucibus tortor placerat, vel vehicula lorem malesuada..",
    price: "$18"
  },
  {
    name: "Kebab",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat eget nunc ut aliquet. Aenean malesuada dolor faucibus tortor placerat, vel vehicula lorem malesuada..",
    price: "$30.22"
  }
]


const testimonials = [
  {
    name: "-Phillip",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat eget nunc ut aliquet."
  },
  {
    name: "-Jessi",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat eget nunc ut aliquet."
  },
  {
    name: "-Issac",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat eget nunc ut aliquet."
  },
]

const availability = [
  {
    start: "10:00 AM",
    slices: ["10:00", "10:15", "10:30", "10:45"]
  },
  {
    start: "11:00 AM",
    slices: ["11:00", "11:15", "11:30", "11:45"]
  },
  {
    start: "12:00 AM",
    slices: ["12:00", "12:15", "12:30", "12:45"]
  },
  {
    start: "1:00 AM",
    slices: ["1:00", "1:15", "1:30", "1:45"]
  },
  {
    start: "2:00 AM",
    slices: ["2:00", "2:15", "2:30", "2:45"]
  },
  {
    start: "3:00 AM",
    slices: ["3:00", "3:15", "3:30", "3:45"]
  },
]


export { navs, mealTypes, dishesTypes, testimonials, availability }