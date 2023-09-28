import { useState } from "react";

const UserFormLogin = () => {
  const [selectedButton, setSelectedButton] = useState("refugio"); // Inicialmente, el botón "Ingresar" está seleccionado

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="flex flex-col items-center">
        <h2 class=" text-center text-6xl font-bold leading-9 tracking-tight text-[#6F4C48]">
          INICIAR SESIÓN
        </h2>

        <div className="w-[25rem] mt-5 flex justify-center items-center">
          <button
            type="submit"
            className={`flex w-96 h-14 lg:text-2xl items-center border-2 border-[#4F3300] justify-center rounded-l-xl ${
              selectedButton === "refugio"
                ? "bg-[#E59D1C] text-white"
                : "bg-[#ccc4bb] text-[#303030]"
            } px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            onClick={() => handleButtonClick("refugio")}
          >
            Refugio
          </button>
          <button
            type="submit"
            className={`flex w-96 h-14 text-center items-center border-2 border-[#4F3300] justify-center rounded-r-xl ${
              selectedButton === "usuario"
                ? "bg-[#E59D1C] text-white"
                : "bg-[#ccc4bb] text-[#303030]"
            } px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            onClick={() => handleButtonClick("usuario")}
          >
            Usuario
          </button>
        </div>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Correo
            </label>
            <div class="mt-2">
              <input
                id="correo"
                name="correo"
                type="email"
                autocomplete="correo"
                required
                placeholder="Correo electrónico"
                class="block w-[25rem] h-12 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                placeholder="**********"
                required
                class="block w-[25rem] h-12 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div class="text-sm mt-2 flex justify-end">
                <a
                  href="#"
                  class="font-semibold underline text-[#6F4C48] hover:text-indigo-500"
                >
                  ¿Olvido su contraseña?
                </a>
              </div>
            </div>
          </div>

          <div className="w-[25rem] flex flex-col items-center ">
            <button
              type="submit"
              class="flex w-96 h-14 lg:text-2xl items-center justify-center rounded-md bg-[#E59D1C] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ingresar
            </button>
            <button
              type="submit"
              class="flex mt-4 w-96 h-14 text-center items-center  border-2 border-[#4F3300] justify-center rounded-md bg-[#ccc4bb] px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 text-[#303030] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormLogin;