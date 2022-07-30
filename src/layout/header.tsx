import { Component, createSignal, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Transition } from "solid-transition-group";
import { Icons } from "../component/icon";


const Header: Component<any> = (props) => {
  const [openMatMenu, setOpenMatMenu] = createSignal(false);
  const menu: any = "MENU"
  return (
    <>
      <header class="flex items-center justify-between px-6 py-2 bg-white border-b border-dark-purple drop-shadow-md">
        <div class="flex items-center">
          <button class="text-gray-500 focus:outline-none cursor-pointer lg:hidden" onClick={() => props.setOpen(true)}>
             <Dynamic component={Icons[menu]} />
          </button>

          <div class="relative mx-4 lg:mx-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <input
              class="w-full px-8 py-1 border rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div class="flex items-center">
          <button class="flex mx-4 text-gray-600 focus:outline-none">
            <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div class="relative">
            <button class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none" onClick={() => setOpenMatMenu(!openMatMenu())}>
              <img
                class="object-cover w-full h-full"
                src="./src/assets/img/2.jpg"
                alt="Your avatar"
              />
            </button>
            <Show when={openMatMenu() == true}>
              <div class="fixed inset-0 z-10 w-full h-screen" onClick={() => setOpenMatMenu(!openMatMenu())}></div>
            </Show>


            <div>
            
                <Show when={openMatMenu() == true} fallback={<></>}>
                <div class="transition delay-100 duration-700 ease-in-out absolute right-0 z-20 w-48 py-2 bg-white rounded-b-lg shadow-xl">
                  <a
                    href="#"
                    class="block px-4 py-2   border-t  text-sm text-dark-purple hover:bg-dark-purple hover:text-white"
                  >Profile</a>
                  <a
                    href="#"
                    class="block border-t px-4 py-2 text-sm text-dark-purple hover:bg-dark-purple hover:text-white">Products</a>
                  <a href="#"
                    class="block border-t px-4 py-2 text-sm text-dark-purple hover:bg-dark-purple hover:text-white">Log out</a>                    
                </div>
              </Show>
             
            </div>
          </div>
        </div >
      </header >
    </>
  );
}

export default Header;