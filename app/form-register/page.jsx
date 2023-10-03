"use client";
import { useState } from "react";
import NavBarLogin from "../components/NavBarLogin";
import FormRegister from "./components/FormRegister";
import SwitchUsuarioRefugio from "../components/SwitchUsuarioRefugio";
import ComponentImage from "../components/ComponentImage";
import canUsuario from "@/assets/canUsuario.svg";
import canRefugio from "@/assets/canRefugio.svg";

const Page = () => {
  const [selectedButton, setSelectedButton] = useState("refugio");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  console.log(selectedButton);
  return (
    <>
      <NavBarLogin />
      <div className="flex bg-[#ccc4bb] ">
        <div className="flex flex-col">
          <p>REGISTRO</p>
          <SwitchUsuarioRefugio
            selectedButton={selectedButton}
            handleButtonClick={handleButtonClick}
          />

          {selectedButton === "refugio" ? (
            <ComponentImage image={canRefugio} />
          ) : (
            <ComponentImage image={canUsuario} />
          )}
        </div>
        <FormRegister selectedButton={selectedButton} />
      </div>
    </>
  );
};

export default Page;
