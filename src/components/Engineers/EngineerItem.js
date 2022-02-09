import React from 'react';

const EngineerItem = (props) => {
  return (
    <li>
      <h2>
        {props.name} {props.surname}
      </h2>
      <div>Telefon: {props.phone}</div>
      <div>Adres e-mail: {props.mail}</div>
    </li>
  );
};

export default EngineerItem;
