import React from 'react';
import { useState } from 'react';
import ContractorForm from './ContractorForm';

const NewContractor = (props) => {
  const [formActive, setFormActive] = useState(false);

  const isContractorFormActiveHandler = () => {
    setFormActive((prevState) => {
      return !prevState;
    });
  };

  const saveContractorHandler = (receivedContractorData) => {
    const contractorData = {
      id: Math.random().toString(),
      ...receivedContractorData,
    };
    props.onAddContractor(contractorData);
  };

  let addNewContractor = (
    <button className="add-new-item" onClick={isContractorFormActiveHandler}>
      Dodaj nowego podwykonawcę
    </button>
  );

  if (formActive === true) {
    addNewContractor = (
      <ContractorForm
        formActive={isContractorFormActiveHandler}
        onSaveContractorData={saveContractorHandler}
      />
    );
  }

  return <div className="new-contractor">{addNewContractor}</div>;
};

export default NewContractor;
