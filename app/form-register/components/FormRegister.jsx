import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormRegister = ({ selectedButton }) => {
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
    <div class="flex flex-col items-center p-24 max-h-screen  overflow-y-auto">
      <p>{selectedButton}</p>
      <form
        className="bg-[#C1A88D] px-20 pt-5 pb-10 rounded-3xl "
        onKeyDown={handleKeyDown}
        onSubmit={handleSubmit}
        class="space-y-6 "
      >
        <p className="pb-10"> Información de la cuenta</p>
        <div className="">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Razón Social <span className="text-red-600">*</span>
          </label>
          <div class="mt-2 w-full">
            <input
              id="correo"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              autocomplete="correo"
              required
              placeholder="Correo electrónico"
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
              Cuit <span className="text-red-600">*</span>
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
              class={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Correo <span className="text-red-600">*</span>
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Contraseña <span className="text-red-600">*</span>
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Reingrese contraseña <span className="text-red-600">*</span>
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Estado del Refugio <span className="text-red-600">*</span>
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

        <p className="py-10">Información de contacto</p>
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Dirección <span className="text-red-600">*</span>
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
        <div className="flex gap-6">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Piso <span className="text-red-600">*</span>
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
                class={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Unidad <span className="text-red-600">*</span>
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
                class={`block w-60 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Provincia <span className="text-red-600">*</span>
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Localidad <span className="text-red-600">*</span>
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Código Postal <span className="text-red-600">*</span>
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
              class={`block w-44 h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Télefono <span className="text-red-600">*</span>
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Web
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Redes Sociales
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Redes Sociales
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
              class={`block w-[31.5rem] h-12 p-2 rounded-2xl py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
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

        <div className="w-[31.5rem] flex justify-end items-center pt-10">
          <button
            type="submit"
            class="flex mt-4 w-56 h-14 text-center items-center  border-2 border-[#4F3300] justify-center rounded-2xl bg-[#E59D1C] px-3 py-1.5 text-sm lg:text-2xl font-semibold leading-6 text-[#4F3300]  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
