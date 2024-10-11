import React from 'react';
import Card from './Card';
import ClickedHospital from './ClickedHospital';
import './css/HospitalList.css';

const ClickedHospitalList = (props) => {
  return (
    <Card className="hospitals">
      <div class="container">
        {props.hospitals.map((hospital) => (
          <ClickedHospital className="eachCard"
            key={hospital.id}
            imageLink={hospital.image}
            name={hospital.name}
            location={hospital.location}
            rating={hospital.rating}
            numberOfDeaths={hospital.noOfDeaths}
            description={hospital.description}
          />
        ))}
      </div>
    </Card>
  );
};

export default ClickedHospitalList; 