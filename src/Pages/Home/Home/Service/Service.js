import React from 'react';

const Service = ({service}) => {
    const {name, img}=service;
    return (
        <div>
            <img src={img} alt="" />
            <p>name: {name}</p>
        </div>
    );
};

export default Service;