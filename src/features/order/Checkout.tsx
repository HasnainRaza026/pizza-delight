import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, TextArea } from "../../ui/InputField";
import Button from "../../ui/Button";
import { errorToast } from "../../utils/toastFunctions";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import getSubTotal from "../../utils/getSubTotal";
import { deliveryFee, tax } from "../../data/fees";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state: RootState) => ({
    cartItems: state.cart.cartItems,
  }));

  const subTotal = getSubTotal(cartItems);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    // Required fields for all orders
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.city.trim()) errors.city = "City is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      errorToast("Please fix the errors in the form");
      return;
    }
    setIsSubmitting(true);

    // Simulate API call to process order
    setTimeout(() => {
      setIsSubmitting(false);
      //   clearCart();
      navigate("/order-confirmed");
    }, 1500);
  };

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="!py-12 bg-gray-50 min-h-screen">
      <div className="container !mx-auto !px-4">
        <h1 className="text-3xl font-bold !mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-md !p-6"
            >
              {/* Contact Information */}
              <div className="!mb-8">
                <h2 className="text-xl font-semibold !mb-4">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName">First Name *</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={formErrors.firstName ? "border-red-500" : ""}
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-sm !mt-1">
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name *</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={formErrors.lastName ? "border-red-500" : ""}
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-sm !mt-1">
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? "border-red-500" : ""}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm !mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone">Phone Number *</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={formErrors.phone ? "border-red-500" : ""}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm !mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Delivery Address (only shown for delivery) */}

              <div className="!mb-8">
                <h2 className="text-xl font-semibold !mb-4">
                  Delivery Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="address">Street Address *</label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={formErrors.address ? "border-red-500" : ""}
                    />
                    {formErrors.address && (
                      <p className="text-red-500 text-sm !mt-1">
                        {formErrors.address}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="city">City *</label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={formErrors.city ? "border-red-500" : ""}
                    />
                    {formErrors.city && (
                      <p className="text-red-500 text-sm !mt-1">
                        {formErrors.city}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="zipCode">Zip Code</label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={formErrors.zipCode ? "border-red-500" : ""}
                    />
                    {formErrors.zipCode && (
                      <p className="text-red-500 text-sm !mt-1">
                        {formErrors.zipCode}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="!mb-8">
                <label htmlFor="notes">Additional Notes (optional)</label>
                <TextArea
                  id="notes"
                  name="notes"
                  placeholder="Special instructions, delivery notes, etc."
                  value={formData.notes}
                  onChange={handleInputChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-pizza-red hover:bg-pizza-tomato"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md !p-6 sticky to!p-24">
              <h2 className="text-xl font-bold !mb-4">Order Summary</h2>

              <div className="!space-y-4 !mb-6">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.size}-${item.toppings?.join(",")}`}
                    className="flex justify-between"
                  >
                    <div className="flex items-start">
                      <span className="text-sm">
                        {item.quantity} x {item.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 !pt-4 !space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-base !pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${(subTotal + deliveryFee + tax).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
