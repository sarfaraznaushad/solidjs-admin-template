import { Link } from "solid-app-router";
import { Component, createSignal, For, Show, onCleanup } from "solid-js";
import { BsArrowLeftCircle } from 'solid-icons/bs'
import { Dynamic } from "solid-js/web";
import { Icons } from "../component/icon";

import { createStore } from "solid-js/store"



const Sidebar: Component<any> = (props) => {

    debugger;
    const activeClass = "text-gray-300";
    const expandedClass = "border-l border-grey-400 ml-4 pl-4"
    const shrinkedClass = "bg-dark-purple sm:absolute left-20 sm:shadow-md sm:z-10 sm:bg-grey-900 sm:rounded-md sm:p-4 border-l sm:border-none border-grey-400 ml-4 pl-4 sm:ml-0"
   // const [open, setOpen] = createSignal(false);
    let menuArray = [
        { title: "Dashboard", Icon: "DASHBOARD", child: [], Type: "MENU" },
        { title: "Lead", Icon: "LEAD", child: [], Type: "MENU" },
        { title: "Opportunity", Icon: "OPPORTUNITY", child: [], Type: "MENU" },
        { title: "", Icon: "", child: [], Type: "DIVIDER" },
        { title: "Quote", Icon: "QUOTE", child: [], Type: "MENU" },
        { title: "Order", Icon: "ORDER", child: [], Type: "MENU" },
        { title: "Billing", Icon: "BILLING", child: [], Type: "MENU" },
        { title: "", Icon: "", child: [], Type: "DIVIDER" },
        { title: "Business", Icon: "BUSINESS", child: [], Type: "MENU" },
        { title: "Item", Icon: "ITEM", gap: true, child: [], Type: "MENU" },
        { title: "Setting", Icon: "SETTING", child: [], Type: "MENU" }
    ]
    const [menus, setMenus] = createStore({ Menus: menuArray });

 
    return (
        <>
            <div class="flex">
                <div class={`${props.open() == true ? 'block' : 'hidden'} fixed inset-0 z-20 transition-opacity bg-dark-purple opacity-50 lg:hidden`}  onClick={() => props.setOpen(false)}></div>
                <div class={`${props.open() == true ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} drop-shadow-md  fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-dark-purple lg:translate-x-0 lg:static lg:inset-0`}>
                    <div class="flex items-center justify-center mt-2 border-b pb-2">
                        <img src="./src/assets/logo.png" class={`cursor-pointer duration-500 w-8 ${props.open() && 'rotate-[360deg]'}`} />
                        <span class="mx-2 text-[22px] font-semibold text-white">CRM</span>
                    </div>
                    <nav class="mt-2 pl-2 pr-2">
                        <For each={menus.Menus}>{(menu, index) =>
                            <Show when={menu.Type == 'MENU'} fallback={<div class={` border-dashed border-light-white  border origin-left duration-200 mt-4 mb-4`}></div>}>
                                <div class={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2  ${index() == 0 && 'bg-light-white'}`}>
                                    <Dynamic component={Icons[menu.Icon]} /><span class={`origin-left duration-200`}>  {menu.title}</span>
                                </div>
                            </Show>
                        }</For>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
