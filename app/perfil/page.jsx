"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import clienteAxios from "../config/clienteAxios";
import axios from "axios";
import Image from "next/image";
const Page = () => {
  const [user, setUser] = useState([]);
  const { data, status } = useSession();
  console.log(data.user);
  console.log(data);
  console.log(status);

  useEffect(() => {
    const userInfo = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_URL}/usuarios/perfil`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${data?.user.token}`,
            "Content-Type": "application/json",
          },
        });
        return setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    userInfo();
  }, [data]);
  if (status === "loading") {
    return <div>Cargando...</div>;
  }
  console.log(user);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full bg-[#CCC4BB]">
        <TopBar />
        <div className="w-full flex  items-center justify-center">
          <div className=" w-1/3 bg-[#CCC4BB] h-screen overflow-auto ">
            <div className="grid gap-5 pr-8 pl-4">
              <div className=" rounded-lg flex flex-col ">
                <div className="flex justify-center">
                  <Image src={data.img} width={200} height={200} alt="1" />
                </div>
                <div className="grid justify-items-start my-3">
                  <div className="grid">
                    <div className="mb-5">
                      <p>Nombre: {data.nombre}</p>
                      <p>Apellido: {data.nombre} </p>
                      <p>Correo: {data.email}</p>
                      <p>Direccion:</p>
                      <p>Piso: </p>
                      <p>Unidad: </p>
                      <p>Código Postal: </p>
                      <p>Provincia: </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-2/3 h-screen"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
