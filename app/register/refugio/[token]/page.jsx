"use client";
import axios from "axios";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { token } = useParams();
  const router = useRouter();
  console.log(router);

  const path = usePathname();
  console.log(path);
  const parts = path.split("/"); // Divide la cadena en partes usando "/"
  const specificPart = parts[2];
  console.log(specificPart);

  specificPart === "usuarios"
    ? useEffect(() => {
        axios
          .get(
            `https://giant-jersey-colt.cyclic.app/refugio/confirmar/${token}`
          )
          .then((res) => {
            router.push("/login");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "El sitio al que desea acceder no existe",
              showConfirmButton: false,
              timer: 2000,
            });
          });
      }, [])
    : useEffect(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "El sitio al que desea acceder no existe",
          showConfirmButton: false,
          timer: 2000,
        });
      }, []);
  return <div className="min-h-screen bg-[#ccc4bb]"></div>;
};

export default Page;
