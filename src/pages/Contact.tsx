import { useState } from "react";
import Button from "../ui/Button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { Input, TextArea } from "../ui/InputField";
// import { toast } from "sonner";

function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <MessageSection />
      <MapSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative bg-[var(--color-font-black)] text-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.3)",
        }}
      ></div>
      <div className="container !mx-auto !px-4 !py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold !mb-4">Contact Us</h1>
        <div className="w-20 h-1 bg-[var(--color-red)] !mx-auto !mb-6"></div>
        <p className="text-xl max-w-2xl !mx-auto">
          Have a question or feedback? We'd love to hear from you!
        </p>
      </div>
    </div>
  );
}

function MessageSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call to send message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // toast.success("Your message has been sent successfully!");
    }, 1500);
  };

  return (
    <section className="!py-16">
      <div className="container !mx-auto !px-4">
        <div className="md:w-2/3 lg:w-1/2 !mx-auto bg-white rounded-lg shadow-md !p-6">
          <h2 className="text-2xl font-bold !mb-6">Send Us a Message</h2>

          {isSubmitted ? (
            <div className="text-center !py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center !mx-auto !mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold !mb-2">Thank You!</h3>
              <p className="text-gray-600 !mb-6">
                Your message has been sent successfully. We'll get back to you
                as soon as possible.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-[var(--color-red)] hover:bg-pizza-tomato"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="!mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 !mb-1"
                >
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={formErrors.subject ? "border-red-500" : ""}
                />
                {formErrors.subject && (
                  <p className="text-red-500 text-sm !mt-1">
                    {formErrors.subject}
                  </p>
                )}
              </div>

              <div className="!mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 !mb-1"
                >
                  Message *
                </label>
                <TextArea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={formErrors.message ? "border-red-500" : ""}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm !mt-1">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--color-red)] hover:bg-pizza-tomato"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="!py-12">
      <div className="container !mx-auto !px-4">
        <h2 className="text-2xl font-bold !mb-6 text-center">
          Find Us On The Map
        </h2>
        <div className="bg-white rounded-lg shadow-md !p-4 h-[400px] flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31703.232797215816!2d68.35865353691901!3d25.39086571159515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1744925906175!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
