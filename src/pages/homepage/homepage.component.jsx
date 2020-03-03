import React from 'react';
import './homepage.style.scss';
import Directory from '../../components/Directory/Directory.component'

//The homepage renders the items directory
const HomePage = () => {
    return (
        <div className='homepage'>
            <Directory/>
        </div>
    );
}

export default HomePage;