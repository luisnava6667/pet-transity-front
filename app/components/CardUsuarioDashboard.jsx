import Image from "next/image";
import usuarioFake from "../../assets/usuarioFake.svg";
import ubicacionCard from "../../assets/ubicacionCard.svg";
import telCard from "../../assets/telCard.svg";
import huellaCard from "../../assets/huellaCard.svg";
import { SessionProvider, useSession } from 'next-auth/react'

const CardUsuarioDashboard = () => {
   const { data } = useSession()
   console.log(data);
  return (
    <>
      <div className="relative flex flex-col mt-7 ">
        <div className="flex justify-center w-72 h-20 bg-[#6F4C48] rounded-tl-2xl rounded-tr-2xl ">
          <Image
            className="absolute mt-6  "
            alt="1"
            src={usuarioFake}
            width={91}
            height={91}
          />
        </div>

        <div className="flex flex-col w-72 h-60 bg-[#E6E2DD] rounded-bl-2xl rounded-br-2xl items-center justify-center">
          <h2 className="w-48  mb-4 text-2xl font-medium">Marcos Fuentes</h2>

          <div className="flex w-48 gap-1 my-1">
            <Image
              className=" "
              alt="1"
              src={ubicacionCard}
              width={20}
              height={20}
            />
            <p className="text-base font-medium">Dirección</p>
          </div>
          <div className="flex w-48 gap-1 my-1">
            <Image className=" " alt="1" src={telCard} width={20} height={20} />
            <p className="text-base font-medium">Teléfono</p>
          </div>
          <div className="flex w-48 gap-1 my-1">
            <Image
              className=" "
              alt=""
              src={huellaCard}
              width={20}
              height={20}
            />
            <p className="text-base font-medium">Mascotas</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardUsuarioDashboard;
