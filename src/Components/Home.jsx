import React, { useState } from "react";

function Home() {
    const [openmodal, setopenmodal] = useState(false)
  return (
    <div className="justify-center flex items-center flex-col h-full w-full">
      <h2 className="font-semibold md:text-5xl text-xl">Welcome to my homepage</h2>

      <p className="text-center md:text-base text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolore fuga laboriosam sint non corporis adipisci corrupti et, consequatur voluptates quia! Recusandae, eius! Laborum doloremque cupiditate sequi libero temporibus. Quam.</p>
     <button onClick={()=>setopenmodal(true)} className="py-1 px-4 rounded-full text-sm bg-blue-600 text-white mt-5">New Product</button>
     {openmodal &&  <div className="w-[50vh] p-2 h-[50vh] overflow-hidden rounded-xl absolute bg-black  ">
        <div className="h-52 bg-white">
            <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/fc/b0/4a/fcb04afe2357f53d6326b1ca9ce1d0ba.jpg" alt="" />

        </div>
     <div className="w-full flex mt-5 justify-center">
     <button onClick={()=>setopenmodal(false)} className="py-1 px-4  rounded-full text-sm bg-blue-600 text-white mt-5">close</button>
     </div>
        </div> }
    </div>
  );
}

export default Home;
