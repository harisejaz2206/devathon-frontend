import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/profile.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation("header");
  const isRTL = currentLanguage === "ur";

  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      <div
        className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="relative flex h-16 items-center">
          {/* Logo */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:static">
            <Link to="/">
              <img alt="Your Company" src={Logo} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className="flex flex-1 justify-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink href="/dashboard" text={t("dashboard")} />
              <NavLink href="/patients" text={t("patients")} />
              <NavLink href="/appointments" text={t("appointments")} />
              <NavLink href="/billing" text={t("billing")} />
              <NavLink href="/reports" text={t("reports")} />
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4 sm:static sm:ml-6 sm:pr-0">
            {/* Language Dropdown */}
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="flex items-center text-gray-500 hover:text-gray-700">
                  <span className="sr-only">Select language</span>
                  {currentLanguage === "en" ? t("english") : t("urdu")}
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition">
                <MenuItem>
                  <button
                    onClick={() => changeLanguage()}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {currentLanguage === "en" ? t("switchur") : t("switchen")}
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>

            {/* Notification Button */}
            <button
              type="button"
              className="relative p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" />
            </button>

            {/* Profile Dropdown */}
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="flex items-center text-gray-500 hover:text-gray-700">
                  <img
                    alt="Profile"
                    src={Profile}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition">
                <MenuItem>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>

            {/* Login/Signup Buttons */}
            <Link
              to="/login"
              className="hidden sm:block text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("login")}
            </Link>
            <Link
              to="/register"
              className="hidden sm:block text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {t("signup")}
            </Link>
            <Link
              to="/find-doctor"
              className="hidden sm:block text-white bg-teal-700 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Find Doctor
            </Link>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-white">
        <div className="space-y-1 pb-4 pt-2">
          <MobileNavLink href="#" text="Dashboard" active />
          <MobileNavLink href="#" text="Team" />
          <MobileNavLink href="#" text="Projects" />
          <MobileNavLink href="#" text="Calendar" />
          <Link
            to="/login"
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2 text-base font-medium text-gray-700 bg-indigo-600 hover:bg-indigo-700 hover:text-white"
          >
            Sign up
          </Link>
          <button
            onClick={() => changeLanguage()}
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            {currentLanguage === "en" ? "Switch to Urdu" : "Switch to English"}
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

function NavLink({
  href,
  text,
  active = false,
}: {
  href: string;
  text: string;
  active?: boolean;
}) {
  return (
    <Link
      to={href}
      className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
        active
          ? "border-indigo-500 text-gray-900"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900"
      }`}
    >
      {text}
    </Link>
  );
}

function MobileNavLink({
  href,
  text,
  active = false,
}: {
  href: string;
  text: string;
  active?: boolean;
}) {
  return (
    <DisclosureButton
      as={Link}
      to={href}
      className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
        active
          ? "bg-gray-100 border-indigo-500 text-gray-900"
          : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900"
      }`}
    >
      {text}
    </DisclosureButton>
  );
}
