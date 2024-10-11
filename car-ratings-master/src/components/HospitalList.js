import React from 'react';
import Card from './Card';
import Hospital from './Hospital';
import './css/HospitalList.css';

const HospitalList = (props) => {
  
  return (
    
    <Card className="hospitals">
    <div class="Hcontainer" style={{ overflowX: 'auto' }}>
        {props.hospitals.map((hospital) => (
          <Hospital className="eachCard"

            id={hospital._id}

            imageLink={hospital.imageLink}
            name={hospital.name}
            location={hospital.location}
            rating={hospital.rating}
            numberOfDeaths={hospital.numberOfDeaths}
            description={hospital.description}
          />
        ))}
      </div>
    </Card>
  
  );
};

export default HospitalList; 