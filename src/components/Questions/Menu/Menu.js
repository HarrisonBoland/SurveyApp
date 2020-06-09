import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

import styles from './Menu.module.css';

const Menu = (props) => {
    return (
        <div>
            <div className={styles.Question}>
                <p>How would you rate our menu?</p>
            </div>
            <div className={styles.Radio}>
                <FormControl component="fieldset" >
                    <RadioGroup aria-label="position" row>
                        <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label="1"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label="2"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="3"
                        control={<Radio color="primary" />}
                        label="3"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="4"
                        control={<Radio color="primary" />}
                        label="4"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="5"
                        control={<Radio color="primary" />}
                        label="5"
                        labelPlacement="top"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
}

export default Menu;