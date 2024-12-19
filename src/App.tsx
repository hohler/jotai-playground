import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import jotaiLogo from "/jotai.png";
import "./App.css";
import { Jotai0 } from "./Jotai0.tsx";
import { Jotai1 } from "./Jotai1.tsx";
import { Jotai2 } from "./Jotai2.tsx";
import { Jotai3 } from "./Jotai3.tsx";
import { Jotai4 } from "./Jotai4.tsx";
import { Suspense } from "react";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://jotai.dev" target="_blank">
          <img src={jotaiLogo} className="logo jotai" alt="Jotai logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>React + Jotai + Vite</h1>
      <Jotai0 />
      {/*<Jotai1 />*/}
      {/*<Jotai2 />*/}
      {/*<Jotai3 />*/}
      {/*<Suspense fallback={<div>Loading...</div>}>*/}
      {/*  <Jotai4 />*/}
      {/*</Suspense>*/}
    </>
  );
}

export default App;
