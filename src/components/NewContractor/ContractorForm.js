import React from 'react';
import { useState } from 'react';

const ContractorForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredSurname, setEnteredSurname] = useState('');
  const [enteredCompany, setEnteredCompany] = useState('');
  const [enteredCompanySpec, setEnteredCompanySpec] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredMail, setEnteredMail] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const surnameChangeHandler = (event) => {
    setEnteredSurname(event.target.value);
  };

  const companyChangeHandler = (event) => {
    setEnteredCompany(event.target.value);
  };

  const companySpecChangeHandler = (event) => {
    setEnteredCompanySpec(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const mailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const contractorData = {
      name: enteredName,
      surname: enteredSurname,
      company: enteredCompany,
      companySpec: enteredCompanySpec,
      phone: enteredPhone,
      mail: enteredMail,
    };
    console.log(contractorData);
    props.onSaveContractorData(contractorData);
    setEnteredName('');
    setEnteredSurname('');
    setEnteredCompany('');
    setEnteredCompanySpec('');
    setEnteredPhone('');
    setEnteredMail('');
    //closing the form
    props.formActive();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="">Imię</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
      </div>
      <div>
        <label htmlFor="">Nazwisko</label>
        <input
          type="text"
          value={enteredSurname}
          onChange={surnameChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="">Firma</label>
        <input
          type="text"
          value={enteredCompany}
          onChange={companyChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="">Specjalizacja firmy</label>
        <input
          type="text"
          value={enteredCompanySpec}
          onChange={companySpecChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="">Telefon</label>
        <input type="text" value={enteredPhone} onChange={phoneChangeHandler} />
      </div>
      <div>
        <label htmlFor="">E-mail</label>
        <input type="text" value={enteredMail} onChange={mailChangeHandler} />
      </div>
      <div className="controls">
        <button type="button" onClick={props.formActive}>
          Zamknij
        </button>
        <button type="submit">Dodaj podwykonawcę</button>
      </div>
    </form>
  );
};

export default ContractorForm;
