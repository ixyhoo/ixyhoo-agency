import React from "react";

const SocialNetwork = () => {

    const anim = () => {
    const icons = document.querySelectorAll(".social-network a");

    icons.forEach((link) => {
        link.addEventListener("mouseover", (e) => {
            const attrX = e.offsetX - 20;
            const attrY = e.offsetY - 13;
    
            link.style.transform = `translate(${attrX}px, ${attrY}px)`;
        });
    
        link.addEventListener("mouseleave", () => {
            link.style.transform = "";
        });
    });
};

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-facebook"></i>
          </li>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
