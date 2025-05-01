import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  address,
  email,
  openingHours,
  phone,
} from "../../data/restaurentInformation";
import { updateActivePizzaDetail } from "../../features/menu/menuSlice";
import { useDispatch } from "react-redux";
import { useFetchMenu } from "../../hooks/useFetchMenu";

function Footer() {
  const dispatch = useDispatch();
  const { menu } = useFetchMenu();

  return (
    <footer className="bg-[var(--color-font-black)] text-white !pt-12 !pb-6">
      <div className="container !mx-auto !px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="!space-y-4">
            <div className="flex items-center text-2xl font-bold">
              <span className="text-[var(--color-red)]">Pizza</span>
              <span className="text-white">Delight</span>
            </div>
            <p className="text-gray-300 !mt-2">
              Serving the most delicious pizzas made with fresh ingredients and
              traditional recipes since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold !mb-4">Quick Links</h3>
            <ul className="!space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[var(--color-red)] transition-colors"
                >
                  Home
                </Link>
              </li>
              {/* For Mobile */}
              <li className="text-gray-300 hover:text-[var(--color-red)] transition-colors block sm:hidden">
                <Link to="/menu">Menu</Link>
              </li>
              {/* For Large Sreens */}
              <li className="text-gray-300 hover:text-[var(--color-red)] transition-colors hidden sm:block">
                <Link
                  to="/menu/1"
                  onClick={() => {
                    dispatch(updateActivePizzaDetail(menu[0]));
                  }}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[var(--color-red)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[var(--color-red)] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold !mb-4">Contact Us</h3>
            <ul className="!space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[var(--color-red)] !mr-2 !mt-0.5" />
                <span className="text-gray-300">{address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[var(--color-red)] !mr-2" />
                <span className="text-gray-300">{phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[var(--color-red)] !mr-2" />
                <span className="text-gray-300">{email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold !mb-4">Opening Hours</h3>
            <ul className="!space-y-2">
              <li className="text-gray-300">
                Monday - Friday: {openingHours.mondayToFriday}
              </li>
              <li className="text-gray-300">
                Saturday: 1{openingHours.saturday}
              </li>
              <li className="text-gray-300">Sunday: {openingHours.sunday}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 !mt-10 !pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pizza Delight. All rights
              reserved.
            </p>
            <div className="!mt-4 md:!mt-0">
              <ul className="flex !space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
