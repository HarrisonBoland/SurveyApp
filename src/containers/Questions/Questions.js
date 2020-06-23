import React, { useState, useEffect } from 'react';

import Transport from '../../components/Questions/Transport/Transport';
import FavoriteWine from '../../components/Questions/FavoriteWine/FavorteWine';
import Menu from '../../components/Questions/Menu/Menu';
import AddAnything from '../../components/Questions/AddAnything/AddAnything';
import Newsletter from '../../components/Questions/Newsletter/Newsletter';
import WaitStaff from '../../components/Questions/WaitStaff/WaitStaff';
import Button from '@material-ui/core/Button';
import styles from './Questions.module.css';

const Questions = (props) => {
    const [count, setCount] = useState(0)
    const [question, setQuestion] = useState(<Transport />)

    useEffect(() => {
        if (count === 1) {
            setQuestion(<FavoriteWine />)  
        } else if (count === 2) {
            setQuestion(<WaitStaff />)
        } else if (count === 3) {
            setQuestion(<Menu />)
        } else if (count === 4) {
            setQuestion(<AddAnything />)
        } else if (count === 5) {
            setQuestion(<Newsletter />)
        } else if (count === 6) {
            props.history.push('/thankyou');
        }
    }, [count]);

    return (
        <div className={styles.General}>
            {question}
            <div>
                <Button variant="contained" onClick={() => setCount(count + 1)} >Continue</Button>
            </div>
        </div>
    );
};

export default Questions;