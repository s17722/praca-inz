import React from 'react';
import { useState } from 'react';

const MaterialCardBaseForm = (props) => {
  const [enteredInvestor, setEnteredInvestor] = useState('');
  const [enteredProject, setEnteredProject] = useState('');
  const [enteredProjectAddress, setEnteredProjectAddress] = useState('');
  // const [enteredContractor, setEnteredContractor] = useState('');
  // const [enteredContractorAddress, setEnteredContractorAddress] = useState('');

  const investorChangeHandler = (event) => {
    setEnteredInvestor(event.target.value);
  };

  //   nazwa
  // i adres inwestycji, nazwa i adres generalnego wykonawcy, nazwa materiału budowlanego, miejsce wbudowania, automatycznie nadawany numer karty.

  const projectChangeHandler = (event) => {
    setEnteredProject(event.target.value);
  };

  const projectAddressChangeHandler = (event) => {
    setEnteredProjectAddress(event.target.value);
  };

  // const contractortChangeHandler = (event) => {
  //   setEnteredContractor(event.target.value);
  // };

  // const contractorAddressChangeHandler = (event) => {
  //   setEnteredContractorAddress(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const materialCardBaseData = {
      investor: enteredInvestor,
      projectName: enteredProject,
      projectAddress: enteredProjectAddress,
      // contractor: enteredContractor,
      // contractorAddress: enteredContractorAddress,
    };
    props.onSaveEngData(materialCardBaseData);
    setEnteredInvestor('');
    setEnteredProject('');
    setEnteredProjectAddress('');
    // setEnteredContractor('');
    // setEnteredContractorAddress('');
    //closing the form
    props.formActive();
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Wzór nowej karty materiałowej</h2>
      <div>
        <label htmlFor="">Nazwa projektu</label>
        <input
          type="text"
          value={enteredProject}
          onChange={projectChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="">Adres projektu</label>
        <input
          type="text"
          value={enteredProjectAddress}
          onChange={projectAddressChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="">Inwestor</label>
        <input
          type="text"
          value={enteredInvestor}
          onChange={investorChangeHandler}
        />
      </div>
      <div className="controls">
        <button type="button" onClick={props.formActive}>
          Zamknij
        </button>
        <button type="submit">Dodaj dane</button>
      </div>
    </form>
  );
};

export default MaterialCardBaseForm;
