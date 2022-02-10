import React from 'react';
import { useState } from 'react';
import EngineerForm from './EngineerForm';

const NewEngineer = (props) => {
  const [formActive, setFormActive] = useState(false);

  const isEngFormActiveHandler = () => {
    setFormActive((prevState) => {
      return !prevState;
    });
  };

  const saveEngHandler = (receivedEngData) => {
    const engData = {
      id: Math.random().toString(),
      ...receivedEngData,
    };
    props.onAddEngineer(engData);
  };

  let addNewEngineer = (
    <button onClick={isEngFormActiveHandler}>Dodaj nowego inżyniera</button>
  );

  if (formActive === true) {
    addNewEngineer = (
      <EngineerForm
        formActive={isEngFormActiveHandler}
        onSaveEngData={saveEngHandler}
      />
    );
  }

  return <div className="new-engineer">{addNewEngineer}</div>;
};

export default NewEngineer;
