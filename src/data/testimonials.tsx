type Testimonial = {
  id: number;
  name: string;
  image: string;
  content: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    content:
      "The best pizza I've ever had! The crust is perfectly crispy, and the toppings are always fresh. I order from Pizza Delight at least once a week.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "As someone who reviews restaurants for a living, I can confidently say Pizza Delight offers authentic Italian flavors that transport you straight to Naples.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Thompson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "My family loves ordering from Pizza Delight for our Friday movie nights. The online ordering is simple, delivery is always on time, and the pizzas are outstanding!",
    rating: 4,
  },
];
