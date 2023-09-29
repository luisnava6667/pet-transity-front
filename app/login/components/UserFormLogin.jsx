import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import SwitchUsuarioRefugio from "@/app/components/SwitchUsuarioRefugio";

const UserFormLogin = () => {
  const [selectedButton, setSelectedButton] = useState("refugio");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  console.log(selectedButton);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El correo electrónico es inválido")
        .required("El correo electrónico es requerido"),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(3, "La contraseña debe tener al menos 3 caracteres"),
    }),
    onSubmit: (values) => {
      console.log(values);

      axios
        .post(
          `https://giant-jersey-colt.cyclic.app/${selectedButton}/login`,
          values
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const { handleSubmit, handleChange, handleBlur, touched, errors } = formik;

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="flex flex-col items-center">
        <h2 class=" text-center text-6xl font-bold leading-9 tracking-tight text-[#6F4C48]">
          INICIAR SESIÓN
        </h2>
        <SwitchUsuarioRefugio
          selectedButton={selectedButton}
          handleButtonClick={handleButtonClick}
        />
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
          class="space-y-6"
        >
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
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                autocomplete="correo"
                required
                placeholder="Correo electrónico"
                class={`block w-[25rem] h-12 p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  touched.email && errors.email
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.email && errors.email && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.email}
                </div>
              )}
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
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                autocomplete="current-password"
                placeholder="**********"
                required
                class={`block w-[25rem] h-12 p-2 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                  touched.password && errors.password
                    ? "ring-red-500  focus:ring-red-500"
                    : "ring-gray-300 placeholder-text-gray-400 focus:ring-indigo-600"
                } focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {touched.password && errors.password && (
                <div className="flex flex-row-reverse w-[11.5rem] sm:w-[13.5rem] mt-5 text-red-500 text-xs sm:text-sm">
                  {errors.email}
                </div>
              )}
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
              class="flex w-96 h-14 lg:text-2xl items-center justify-center rounded-md bg-[#E59D1C] px-3 py-1.5 text-sm font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ingresar
            </button>
            <button
              type="submit"
              class="flex mt-4 w-96 h-14 text-center items-center  border-2 border-[#4F3300] justify-center rounded-md bg-[#ccc4bb] px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
