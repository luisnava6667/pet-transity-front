import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.svg";
import donar from "../../assets/donar.svg";

const NavBarLogin = () => {
  return (
    <header class="w-full bg-[#ccc4bb]">
      <div class="mx-auto py-14 bg-[#ccc4bb] flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-1 items-center justify-end md:justify-between">
          <a class="block text-teal-600" href="/">
            <Image className="" width={427} height={90} alt="logo" src={logo} />
          </a>
          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4 px-auto">
              <a
                class="flex rounded-md bg-[#106CB0] px-5 py-2.5 text-3xl justify-around font-medium text-white transition hover:bg-teal-700 w-44 h-14"
                href="/"
              >
                <Image
                  className=""
                  width={50}
                  height={50}
                  alt="logo"
                  src={donar}
                />
                Donar
              </a>
            </div>

            <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span class="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBarLogin;
