import React from 'react';
import { useState } from 'react';

const EngineerForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredSurname, setEnteredSurname] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredMail, setEnteredMail] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const surnameChangeHandler = (event) => {
    setEnteredSurname(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const mailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const engData = {
      name: enteredName,
      surname: enteredSurname,
      phone: enteredPhone,
      mail: enteredMail,
    };
    props.onSaveEngData(engData);
    setEnteredName('');
    setEnteredSurname('');
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
        <label htmlFor="">Telefon</label>
        <input type="text" value={enteredPhone} onChange={phoneChangeHandler} />
      </div>
      <div>
        <label htmlFor="">E-mail</label>
        <input type="text" value={enteredMail} onChange={mailChangeHandler} />
      </div>
      <button type="button" onClick={props.formActive}>
        Zamknij
      </button>
      <button type="submit">Dodaj inżyniera</button>
    </form>
  );
};

export default EngineerForm;
