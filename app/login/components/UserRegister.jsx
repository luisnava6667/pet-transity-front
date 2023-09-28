import Image from "next/image";
import can from "../../../assets/perro-usuario.svg";
import UserFormLogin from "./UserFormLogin";

const UserRegister = () => {
  return (
    <div className="bg-[#ccc4bb] flex justify-around  ">
      <div className=" flex items-end pt-[18.3rem] ml-8 ">
        <Image className="" src={can} width={506} height={619} />
      </div>
      <UserFormLogin />
    </div>
  );
};

export default UserRegister;
