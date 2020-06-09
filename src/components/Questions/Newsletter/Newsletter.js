import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

import styles from './Newsletter.module.css';
import EmailField from './EmailField';

const Newsletter = (props) => {
    const [yesClicked, setYesClicked] = useState(false);
    const [emailFieldShowen, setEmailFieldShowen] = useState(null)

    useEffect(() => {
        if (yesClicked === true) {
            setEmailFieldShowen(<EmailField />)
        } else if (yesClicked === false) {
            setEmailFieldShowen(null)
        }
    }, [yesClicked])

    return (
        <div>
            <div className={styles.Question}>
                <p>Would you like to sign up to our newsLetter?</p>
            </div>
            <div className={styles.Radio}>
                <FormControl component="fieldset" >
                    <RadioGroup aria-label="position" row>
                        <FormControlLabel
                            value="yes"
                            control={<Radio color="primary" />}
                            label="yes"
                            labelPlacement="top"
                            onClick={() => setYesClicked(true)}
                        />
                        <FormControlLabel
                            value="no"
                            control={<Radio color="primary" />}
                            label="no"
                            labelPlacement="top"
                            onClick={() => setYesClicked(false)}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={styles.EmailInput}>{emailFieldShowen}</div>
        </div>
    )
}

export default Newsletter;