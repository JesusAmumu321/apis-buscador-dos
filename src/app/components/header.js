import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link className="flex items-center" href="/">
              <img
                className="h-7 w-auto"
                src="https://en.wikipedia.org/wiki/File:Seattle_Seahawks_logo.svg"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              href="#"
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              About Us
            </Link>

            <Link
              href="#"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              ###
            </Link>
          </div>

          <div className="flex items-center justify-end gap-3">
            <Link
              href="/login"
              className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            >
              Sign in
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
