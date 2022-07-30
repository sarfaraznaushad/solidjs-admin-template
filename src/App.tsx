import { Component, createSignal } from 'solid-js';
import { BiCompass,BiLogoAirbnb } from "solid-icons/bi";
import { useRoutes } from 'solid-app-router';
import { routes } from './route';

const App: Component = () => {
  const Route = useRoutes(routes);
  return (
    <>
    <Route />
    </>   
  );
};

export default App;
