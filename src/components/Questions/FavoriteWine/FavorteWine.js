import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

import styles from './FavoriteWine.module.css';

const FavoriteWine = (props) => {
    return (
        <div>
            <div className={styles.Question}>
                <p>What was your favorite wine?</p>
            </div>
            <div className={styles.Transport}>
                <FormControl component="fieldset" >
                    <RadioGroup aria-label="position" row>
                        <FormControlLabel
                        value="Pinque"
                        control={<Radio color="primary" />}
                        label="Pinque"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="Exiled"
                        control={<Radio color="primary" />}
                        label="Exiled"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="Valhalla"
                        control={<Radio color="primary" />}
                        label="Valhalla"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="GraveStone"
                        control={<Radio color="primary" />}
                        label="GraveStone"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="IronClad"
                        control={<Radio color="primary" />}
                        label="IronClad"
                        labelPlacement="top"
                        />
                        <FormControlLabel
                        value="Dreadnaught"
                        control={<Radio color="primary" />}
                        label="Dreadnaught"
                        labelPlacement="top"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    );
};

export default FavoriteWine;