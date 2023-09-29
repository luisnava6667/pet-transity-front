import can from "../../../assets/perro-usuario.svg";
import UserFormLogin from "./UserFormLogin";
import ComponentImage from "@/app/components/ComponentImage";

const UserRegister = () => {
  return (
    <div className="bg-[#ccc4bb] flex justify-around  ">
      {/* <div className=" flex items-end pt-[18.3rem] ml-8 ">
        <Image className="" src={can} width={506} height={619} />
      </div> */}
      <ComponentImage image={can} />
      <UserFormLogin />
    </div>
  );
};

export default UserRegister;
