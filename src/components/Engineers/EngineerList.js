import React from 'react';
import EngineerItem from './EngineerItem';

const EngineerList = (props) => {
  return (
    <ul>
      {props.list.map((eng) => (
        <EngineerItem
          key={eng.id}
          name={eng.name}
          surname={eng.surname}
          phone={eng.phone}
          mail={eng.mail}
        />
      ))}
    </ul>
  );
};

export default EngineerList;
