import React from 'react';
import ContractorItem from './ContractorItem';

const ContractorList = (props) => {
  return (
    <ul>
      {props.list.map((con) => (
        <ContractorItem
          key={con.id}
          name={con.name}
          surname={con.surname}
          company={con.company}
          companySpec={con.companySpec}
          phone={con.phone}
          mail={con.mail}
        />
      ))}
    </ul>
  );
};

export default ContractorList;
