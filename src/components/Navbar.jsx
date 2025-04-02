import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}

      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" alt="" className="w-8 h-8" />
        <span>SadokDEV </span>
      </div>

      {/* mobile menu button for the navbar  */}

      <div className="md:hidden">
        <div className="cursor-pointer text-4xl" onClick={()=>setOpen((prev)=>!prev)}  >
          {open ? "X"  : "☰"}
           </div>

           {/* MOBILE LINK LIST */}

           <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-color[#e6e4ff] transition-all ease-in-out ${open ?"-right-0" :"-right-[100%]" }`}>
menu
           </div>
      </div>

      {/* Desktom menu  */}

      <div className="hidden md:flex">

      <a href="/">Home</a>
      <a href="/">Trending</a>
      <a href="/">Most Popular</a>
      <a href="/">About</a>

      </div>
    </div>
  );
};

export default Navbar;
