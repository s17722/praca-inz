import React from 'react';

const ContractorItem = (props) => {
  return (
    <li>
      <h2>
        {props.name} {props.surname}
      </h2>
      <div>Firma: {props.company}</div>
      <div>Specjalizacja firmy: {props.companySpec}</div>
      <div>Telefon: {props.phone}</div>
      <div>Adres e-mail: {props.mail}</div>
    </li>
  );
};

export default ContractorItem;
