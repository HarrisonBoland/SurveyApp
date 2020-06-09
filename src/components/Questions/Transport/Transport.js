import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

import styles from './Transport.module.css';

const Transport = (props) => {
    return (
        <div>
            <div className={styles.Question}>
                <p>How did you get out to Man O' War?</p>
            </div>
            <div className={styles.Radio}>
                <FormControl component="fieldset" >
                    <RadioGroup aria-label="position" row>
                        <FormControlLabel
                        value="Car"
                        control={<Radio color="primary" />}
                        label="Car"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="Bus"
                        control={<Radio color="primary" />}
                        label="Bus"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="Boat"
                        control={<Radio color="primary" />}
                        label="Boat"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="Bike"
                        control={<Radio color="primary" />}
                        label="Bike"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="Sea Plane"
                        control={<Radio color="primary" />}
                        label="Sea Plane"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="Helicopter"
                        control={<Radio color="primary" />}
                        label="Helicopter"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="Other"
                        control={<Radio color="primary" />}
                        label="Other"
                        labelPlacement="top"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    );
};

export default Transport;