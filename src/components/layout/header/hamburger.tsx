"use client";
import React, { useState } from "react";
import { Hamburger, HamburgerMenu } from "./menu-toogle";


const MobileHamburger: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenuOpen = () => {
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <>
      <Hamburger
        isMenuOpen={isMenuOpen}
        onToggleMenuOpen={handleToggleMenuOpen}
      />
      <HamburgerMenu
        isMenuOpen={isMenuOpen}
        onToggleMenuOpen={handleToggleMenuOpen}
      />
    </>
  );
};

export default MobileHamburger;
