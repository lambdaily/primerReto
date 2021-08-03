import React from 'react';

/* Data */
import retos from './challenges.json';

const Challenges = () => {
    return (
        <>  
            <h1>Dev Challenges</h1>
                <ul>
                    {retos.data.map( ( challenge ) => (
                        <li> <a target="_blank" rel="noreferrer" href={challenge.url} >{challenge.name}</a>   </li>

                     ))}
                </ul>

            

        </>

    );
}

export default Challenges;