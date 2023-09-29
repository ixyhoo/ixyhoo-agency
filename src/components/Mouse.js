import React, { useEffect } from 'react';


const Mouse = () => {

    useEffect(() => {
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
        cursor.style.left = e.X + "px";
        cursor.style.top = e.Y + "px";
    });
    document.querySelectorAll(".hover").forEach((link) => {
        
        link.addEventListener("mouseover", () => {
            cursor.classList.add("hovered");
        });
        });
    }, []);
    return <span className="cursor"></span>;
};

export default Mouse;
