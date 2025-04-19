import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, HomeIcon } from "lucide-react";
import Button from "../../ui/Button";

function OrderConfirmation() {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit order number

  // Redirect to home if user refreshes this page
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("confirmationVisited", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const visited = sessionStorage.getItem("confirmationVisited");
    if (visited) {
      navigate("/");
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      sessionStorage.removeItem("confirmationVisited");
    };
  }, [navigate]);

  return (
    <div className="!py-16 bg-gray-50 min-h-screen">
      <div className="container !mx-auto !px-4 text-center">
        <div className="bg-white !p-8 rounded-lg shadow-md max-w-lg !mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center !mx-auto !mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold !mb-4">Order Confirmed!</h1>

          <p className="text-gray-600 !mb-6">
            Thank you for your order. We've received your order and will start
            preparing your delicious pizza right away!
          </p>

          <div className="bg-gray-50 !p-6 rounded-lg !mb-6">
            <h2 className="text-xl font-semibold !mb-2">
              Order #{orderNumber}
            </h2>
            <p className="text-gray-600 !mb-4">
              You will receive a confirmation email with your order details.
            </p>

            <div className="text-left !mb-4">
              <div className="flex justify-between border-b border-gray-200 !py-2">
                <span className="font-medium">Estimated Delivery:</span>
                <span>30-45 minutes</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 !py-2">
                <span className="font-medium">Delivery Address:</span>
                <span className="text-right">123 Main St, Anytown</span>
              </div>
              <div className="flex justify-between !py-2">
                <span className="font-medium">Payment Method:</span>
                <span>Credit Card</span>
              </div>
            </div>

            <div className="bg-pizza-red/10 !p-4 rounded-lg">
              <p className="text-pizza-red font-medium">
                Your pizza is being prepared with love!
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full !py-2 !mb-3 rounded">
              <Link to="/" className="flex justify-center items-center gap-2">
                <HomeIcon className="!mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>

            <button className="!py-1.5 rounded w-full border border-[var(--color-red)] text-[var(--color-red)] hover:bg-[var(--color-red)]hover:text-white">
              <Link to="/menu">Order Another Pizza</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
