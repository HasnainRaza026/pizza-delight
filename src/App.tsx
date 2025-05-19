import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";

// Eagerly loaded HomePage
import HomePage from "./pages/HomePage";

// Lazy-loaded pages
const MenuPage = lazy(() => import("./pages/MenuPage"));
const PizzaDetail = lazy(() => import("./features/menu/PizzaDetail"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const OrderConfirmationPage = lazy(
  () => import("./pages/OrderConfirmationPage")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
        children: [
          {
            path: ":id",
            element: <PizzaDetail />,
          },
        ],
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "order-confirmed",
        element: <OrderConfirmationPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
