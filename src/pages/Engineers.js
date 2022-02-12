import React from 'react';
import { useState } from 'react';
import EngineerList from '../components/Engineers/EngineerList';
import NewEngineer from '../components/NewEngineer/NewEngineer';

const DUMMY_ENGINEERS = [
  {
    id: 'eng1',
    name: 'Anna',
    surname: 'Kowalska',
    phone: '111 222 333',
    mail: 'ak@okm.pl',
  },
];

const Engineers = () => {
  const [engineerList, setEngineerList] = useState(DUMMY_ENGINEERS);

  const addEngineer = (eng) => {
    setEngineerList((prevState) => {
      return [eng, ...prevState];
    });
  };

  return (
    <div className="engineers">
      <NewEngineer onAddEngineer={addEngineer} />
      <EngineerList list={engineerList} />
    </div>
  );
};

export default Engineers;
