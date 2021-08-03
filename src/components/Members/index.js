import React from 'react';

/* Data */
import members from './members.json';

const Members = () => {
    return (
        <>
            
            <h1>Integrantes</h1>
                <ul>
                    {members.data.map( (member) => (
                        <li> {member.name} <a target="_blank" rel="noreferrer" href={member.url} > ({member.githubUser}) </a></li>

                     ))}
                </ul>

            

        </>

    );
}


export default Members;