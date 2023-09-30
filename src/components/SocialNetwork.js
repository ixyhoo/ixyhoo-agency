import React from 'react';

const SocialNetwork = () => {
    return (
        <div className="social-network">
            <ul className="content">
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' >
                   <li>
                    <i className="fab fa-facebook"></i>
                   </li>
                 </a>  
                 <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' > 
                   <li>
                    <i className="fab fa-twitter"></i>
                   </li>
                    </a>
                   <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' >
                   <li>
                    <i className="fab fa-instagram"></i>
                   </li>
                     </a>
                    
               
            </ul>
        </div>
    );
};

export default SocialNetwork;