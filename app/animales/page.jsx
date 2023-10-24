import usePet from "../hooks/usePet";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Image from "next/image";

const Page = () => {
  const { animal } = usePet();
  console.log(animal);
  return (
    <main className="min-h-full">
      <TopBar />
      <div className="flex">
        <Sidebar />
        <div className="flex w-full">
          <div className=" w-1/3 bg-[#CCC4BB]">
            <div className="mb-24">
              <h2 className="font-extrabold text-4xl pt-8 pl-7 mb-2 ">
                Refugios
              </h2>
              <p className="px-14 text-xl">
                Encuentra un refugio cerca de tu zona, puedes solicitar hacer
                transito, adoptar un animal o colaborar con un donativo{" "}
              </p>
            </div>
            <div className="grid gap-5 pr-8 pl-4">
              {/* {refugios.map((refugio) => (
                <div key={refugio._id} className="bg-white rounded-lg flex">
                  <div>
                    <Image src={refugio.img} width={200} height={200} />
                  </div>
                  <div className="grid justify-items-center my-3">
                    <div className="grid">
                      <h3 className="text-center text-xl mb-3 font-bold capitalize">
                        {refugio.razon_social}
                      </h3>
                      <p className="mb-7">
                        Refugio de animales dirigido por veterinarios.
                      </p>
                      <div className="mb-5">
                        <p>
                          Direccion:{" "}
                          {`${refugio.direccion}, ${refugio.provincia}`}
                        </p>
                        <p>Telefono: {refugio.whatsApp}</p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <button className="border-black border-2 px-4 rounded-lg font-bold">
                        Ver ubicación
                      </button>
                      <button>Contactar</button>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
          <div className=" w-2/3 h-screen">
            <div
              className={`  bg-[#CCC4BB] w-full flex justify-center min-h-screen`}
            >
              {/* <Image src={spinner} /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
