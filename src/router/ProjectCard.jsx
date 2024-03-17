import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white shadow rounded p-4">

            <h2 className="font-semibold">{project.name}</h2>  
        </div>
    );
};

export default ProjectCard;