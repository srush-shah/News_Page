import React from "react";
import { Link } from "react-router-dom";

function Hello() {
  return (
    <>
      <img
        className="fixed h-screen blur-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3pDJdlsYkBCHMyNzQPykn4JBRCpfmUN2Ig&usqp=CAU"
        alt="hero banner"
      />
      <div className="fixed z-10 pt-80 pl-80 text-center">
        <h1 className="text-6xl font-medium p-2 text-slate-100">
          Welcome to the True Rumours!
        </h1>
        <p className="p-2 text-slate-100">Find the most relevant news here.</p>
        <Link className="bg-slate-100 p-2 rounded-md mt-1 text-slate-800"></Link>
        Go to News Page
      </div>
    </>
  );
}

export default Hello;
