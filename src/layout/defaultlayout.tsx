import { Outlet, Route, useRoutes } from "solid-app-router";
import { Component, createEffect, createSignal, For } from "solid-js";
import Header from "./header";
import Sidebar from "./sidebar";
import { BsArrowLeftCircle } from 'solid-icons/bs'
import { AiOutlineDashboard, AiOutlineHome } from "solid-icons/ai";
import { RiDocumentContactsBookLine } from 'solid-icons/ri'
import { Dynamic } from "solid-js/web";
import { Icons } from "../component/icon";


const RedThing = () => <AiOutlineHome size={24} color="#000000" />;
const GreenThing = () => <AiOutlineDashboard size={24} color="#000000" />;
const BlueThing = () => <RiDocumentContactsBookLine size={24} color="#000000" />;

const options = {
  DASHBOARD: RedThing,
  HOME: GreenThing,
  CONTACT: BlueThing
}

const DefaultLayout: Component = () => {
  const [open, setOpen] = createSignal(false);
  createEffect(() => {
    // render some stuff based on `b`
   console.log(open())
  })
  const [menus, setMenus] = createSignal([
    { title: "Dashboard", Icon: "DASHBOARD" },
    { title: "Inbox", Icon: "HOME" },
    { title: "Accounts", Icon: "DASHBOARD", gap: true },
    { title: "Schedule", Icon: "DASHBOARD" },
    { title: "Search", Icon: "DASHBOARD" },
    { title: "Analytics", Icon: "HOME" },
    { title: "Files", Icon: "DASHBOARD", gap: true },
    { title: "Setting", Icon: "CONTACT" }
  ]);



  return (
    <>
    
    <div class="flex h-screen bg-gray-200 font-roboto">
        <Sidebar open={open} setOpen={setOpen}   />

        <div class="flex-1 flex flex-col overflow-hidden">
          <Header open={open} setOpen={setOpen} />

          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div class="p-4">
                <Outlet />
            </div>
          </main>
        </div>
      </div>
      {/* <div class="flex min-h-screen">
          <Sidebar />

          <div class="flex flex-col flex-grow bg-gray-200">
            <Header />

            <div class="mb-auto">
              <Outlet />
            </div>
            <div>Footer</div>
          </div>
        </div> */}
    </>
  );
}

export default DefaultLayout;
