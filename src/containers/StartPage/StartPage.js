import React from 'react';

import Button from '@material-ui/core/Button';
import styles from './StartPage.module.css';
import logo from '../../assets/logoBlack.png';
import Aux from '../../hoc/Auxiliary';


const StartPage = (props) => {
    const startSurveyHandler = () => {
        props.history.push('/questions');
    }
    
    return(
        <Aux>
            <div className={styles.Logo} >
                <img src={logo} alt="Logo"></img>
            </div>
            <div className={styles.StartButton} >
                <Button variant="contained" onClick={startSurveyHandler} >Start Survey</Button>
            </div>
        </Aux>
    );
};

export default StartPage;

