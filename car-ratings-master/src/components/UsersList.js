import React from 'react';
import Card from './Card';
import User from './User';
import './css/UsersList.css';
import './css/User.css';


const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <User 
            // Takes the data (characteristics) from the props array and maps them to user component
            key={user.id}
            img={user.img}
            name={user.name}
            comment={user.comment}

          />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;