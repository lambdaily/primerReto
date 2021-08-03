/* Styles */
import './index.css';

/* Native Components */
import React from 'react';

/* My components */
import { FaReact } from 'react-icons/fa';
import Meets from './components/Meets'
import About from './components/About'
import Objetive from './components/Objetive';
import Members from './components/Members';
import Resources from './components/Resources';
import Challenges from './components/Challenges';


const App = () => {
  
    return (
        <div className="home" >
            <h1>HaciaReact <FaReact size={26} /></h1>
            <p>Basado en el routemap de React: <a href="https://roadmap.sh/react">https://roadmap.sh/react</a></p> 

            <Meets />
            <About />
            <Objetive />
            <Members />
            <Resources />
            <Challenges />
        </div>



        
    )
}

export default App;