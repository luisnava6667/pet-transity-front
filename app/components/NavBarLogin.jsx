import Image from "next/image";
import logo from "../../assets/logo.svg";
import Link from "next/link";

const NavBarLogin = ({ textButtonNav, imgButton, styles, ruta }) => {
  return (
    <header className="w-full bg-[#ccc4bb]">
      <div className="mx-auto py-14 bg-[#ccc4bb] flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <Link className="block text-teal-600" href="/">
            <Image className="" width={427} height={90} alt="logo" src={logo} />
          </Link>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 px-auto">
              <Link className={styles} href={`${ruta}`}>
                <Image
                  className=""
                  width={50}
                  height={50}
                  alt="logo"
                  src={imgButton}
                />
                {textButtonNav}
              </Link>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
