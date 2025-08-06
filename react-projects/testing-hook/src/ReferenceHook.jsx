import { useState, useEffect } from "react";

const AboutUs = () => <h2>Aboout Us</h2>;
const ContactUs = () => <h2>Contact Us</h2>;

const route = {
  "/about-us": <AboutUs />,
  "/contact-us": <ContactUs />,
};

const App = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePop = () => setPath(window.location.pathname);
    window.addEventListener("propState", handlePop);
    return () => {};
  });
};
