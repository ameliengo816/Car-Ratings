import React, { useState, useEffect } from 'react';
import './css/Hospital.css';
import { Link, useParams } from 'react-router-dom';

const Hospital = (props) => {

    const link = '/show-hospital';

    return (    
        <div key={props._id} className="hospital-item">
        <Link to={`${link}/${props.id}`} className="componenetLink">
            <img
            src={props.imageLink}
            className="hospital-img"
            style={{ width: '375px', height: '300px' }} // Adjust the values as needed
            />
            <div className="hospital-info">
                <h2>{props.name}</h2>
                <h3>{props.location}</h3>
                <h3>Rating: {props.rating}</h3>
                <h3>Year: {props.numberOfDeaths}</h3>
                <h3 class="description">{props.description}</h3>
            </div>
        </Link>
        </div>
    )
}

export default Hospital; 