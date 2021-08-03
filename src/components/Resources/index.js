import React from 'react';

/* Data */
import resources from './resources.json';

const Resources = () => {
    return (
        <>
            
                    {resources.data.map( ({ name, links }) => (
                        <>
                            <h1>{name}</h1>
                            <ul>
                                {links.map((link) => (
                                    <li> {link.name} <a target="_blank" rel="noreferrer" href={link.url} > ({link.url}) </a></li>

                                ))}
                            </ul>
                            
                        </>
                    ))}

                    <ul>
                    </ul>

            

        </>

    );
}

// 
export default Resources;