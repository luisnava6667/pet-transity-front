"use client";
import NavBarLogin from "../components/NavBarLogin";
import UserRegister from "./components/UserRegister";
import donar from "../../assets/donar.svg";

const Page = () => {
  return (
    <>
      <NavBarLogin
        imgButton={donar}
        textButtonNav={"Donar"}
        styles={
          "flex rounded-md bg-[#E59D1C] px-5 py-2.5 text-3xl justify-around font-medium text-black transition w-44 h-14 shadow-md"
        }
      />
      <UserRegister />
    </>
  );
};

export default Page;
