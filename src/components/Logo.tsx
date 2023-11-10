import logo from "../assets/logo.png";
import whiteLogo from "../assets/white-logo.png";
import { useState } from "react";

const Logo = () => {
  const [isLogoHovered, setLogoHovered] = useState(false);
  const defaultLogo = whiteLogo;
  const hoverLogo = logo;

  const handleMouseEnter = () => {
    setLogoHovered(true);
  };

  const handleMouseLeave = () => {
    setLogoHovered(false);
  };
  return (
    <img
      className="logo"
      src={isLogoHovered ? hoverLogo : defaultLogo}
      alt="Logo"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Logo;
