import React from 'react';
import './home.css';
import '../pages/button/Button.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Button from '@mui/material/Button';

const Main = () => {
    const navigate = useNavigate(); // Get the navigate function

    const handleSignUp = () => {
        navigate('/login'); // Navigate to the login page
    };
    const handleJoin = () => {
        
        navigate('/course'); 
    };

    return (
        <div className='container'>
            <div className='outer'>
                <div className='details'>
                    <h1>Welcome to Anand Chess Academy!</h1>
                    <p>
                        Looking to improve your chess game?
                        Enroll in our chess classes and learn from experienced instructors who will guide you through the intricacies of the game. From beginners to advanced players,
                        our classes cater to all skill levels.
                        Take the first step towards mastering chess today!
                    </p><br/>
                    {/* <Button className="customButton"  variant="contained" size="small" onClick={handleSignUp}>
                        Sign Up
                    </Button> */}
                    <Button className="customButton"  variant="contained" size="small" onClick={handleJoin}>
                        JOIN TODAY
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Main;
