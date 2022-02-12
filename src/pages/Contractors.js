import React from 'react';
import { useState } from 'react';
import NewContractor from '../components/NewContractor/NewContractor';
import ContractorList from '../components/Contractors/ContractorList';

const DUMMY_CONTRACTORS = [
  {
    id: 'con1',
    name: 'Maciej',
    surname: 'Kowalski',
    company: 'XYZi',
    companySpec: 'Roboty ziemne',
    phone: '111 222 333',
    mail: 'mk@okm.pl',
  },
];

const Contractors = () => {
  const [contractorList, setContractorList] = useState(DUMMY_CONTRACTORS);

  const addContractor = (contractor) => {
    setContractorList((prevState) => {
      return [contractor, ...prevState];
    });
  };

  return (
    <div className="contractors">
      <NewContractor onAddContractor={addContractor} />
      <ContractorList list={contractorList} />
    </div>
  );
};

export default Contractors;
