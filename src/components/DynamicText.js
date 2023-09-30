import React, { useEffect } from 'react';

const DynamicText = () => {

    useEffect(() => {
     let array = ["site", "Web", "&", "Appli"];  
     let wordIndex = 0;       
    }, []);
    return (
        <span className="dynamic-text">
            <span>Créateur de</span>
            <span id='text-target' ></span>
        </span>
        );
};

export default DynamicText;