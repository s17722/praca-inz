import React from 'react';
import EngineerForm from './EngineerForm';

const NewEngineer = (props) => {
  const saveEngHandler = (receivedEngData) => {
    const engData = {
      id: Math.random().toString(),
      ...receivedEngData,
    };
    props.onAddEngineer(engData);
  };

  let addNewEngineer = <button>Dodaj nowego inżyniera</button>;

  if (Math.random() > 0.5) {
    addNewEngineer = <EngineerForm onSaveEngData={saveEngHandler} />;
  }

  return <div className="new-engineer">{addNewEngineer}</div>;
};

export default NewEngineer;
