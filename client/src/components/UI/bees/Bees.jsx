import React, { useEffect } from 'react';


const Bees = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".object").forEach(function(move){
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 200 ;
        let y = (e.clientY * moving_value) / 200 ;
  
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

    return (
        <div className="beeHive">
        <img src="/assets/img/bee-1.png" className="object" data-value="-5" alt=""/>
        <img src="/assets/img/bee-2.png" className="object " data-value="6" alt=""/>
        <img src="/assets/img/bee-3.png" className="object " data-value="4" alt=""/>
        <img src="/assets/img/bee-4.png" className="object " data-value="-6" alt=""/>
        <img src="/assets/img/bee-5.png" className="object " data-value="8" alt=""/>
        <img src="/assets/img/bee-6.png" className="object " data-value="-4" alt=""/>
        <img src="/assets/img/bee-7.png" className="object " data-value="5" alt=""/>
        <img src="/assets/img/bee-8.png" className="object " data-value="-9" alt=""/>
        <img src="/assets/img/bee-9.png" className="object " data-value="-8" alt=""/>
      </div>
  

    );
};

export default Bees;