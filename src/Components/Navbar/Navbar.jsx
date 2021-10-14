import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Images } from "../../Assests/Images";
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="px-8 sm:px-20 lg:px-40 relative z-24 pt-8">
            <div className="flex justify-between  h-12">
              <div className="flex-shrink-0 flex  items-center">
                <div className="flex lg:hidden justify-center items-center">
                  <img src={Images.Logo} alt="" className="h-12" />
                  <h1 className="text-2xl text-white font-semibold">Lorem</h1>
                </div>
                <div className="lg:flex hidden justify-center items-center">
                  <img src={Images.Logo} alt="" className="h-12" />
                  <h1 className="text-2xl text-white font-semibold">Lorem</h1>
                </div>
              </div>
              <div className="hidden gap-8  sm:flex">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-white hover:border-gray-300 hover:text-gray-100" */}
                <a
                  href="#"
                  className="border-white text-white inline-flex items-center border-b-2 text-xs"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="border-transparent text-white hover:border-white hover:text-gray-100 inline-flex items-center pt-1 border-b-2 text-xs font-medium"
                >
                  About
                  <ChevronDownIcon className=" h-4 w-4 mt-0.5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="border-transparent text-white hover:border-white hover:text-gray-100 inline-flex items-center pt-1 border-b-2 text-xs font-medium"
                >
                  ART
                </a>
                <a
                  href="#"
                  className="border-transparent text-white hover:border-white hover:text-gray-100 inline-flex items-center pt-1 border-b-2 text-xs font-medium"
                >
                  Docs
                  <ChevronDownIcon className=" h-4 w-4 mt-0.5" aria-hidden="true" />

                </a>
                <a
                  href="#"
                  className="border-transparent text-white hover:border-white hover:text-gray-100 inline-flex items-center pt-1 border-b-2 text-xs font-medium"
                >
                  Community
                </a>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden z-10 relative">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-white hover:bg-gray-50 hover:border-white hover:text-gray-100" */}
              <a
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="border-transparent text-white hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="border-transparent text-white hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                ART
              </a>
              <a
                href="#"
                className="border-transparent text-white hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Docs
              </a>
              <a
                href="#"
                className="border-transparent text-white hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Community
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
