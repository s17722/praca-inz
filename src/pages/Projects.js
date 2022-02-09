import { useState } from 'react';
import React from 'react';
import NewProject from '../components/NewProject/NewProject';

const DUMMY_PROJECTS = [
  {
    id: 'p1',
    name: 'Biurowiec',
    dateOfStart: new Date(2021, 1, 1),
  },
  {
    id: 'p2',
    name: 'Hotel',
    dateOfStart: new Date(2022, 1, 1),
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(DUMMY_PROJECTS);

  return (
    <div className="Projects">
      <NewProject />
    </div>
  );
};

export default Projects;
