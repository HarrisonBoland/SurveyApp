import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

const EmailField = () => {
    const classes = useStyles();
    const [value, setValue] = useState("")
    
    const handleChange = (prop) => (event) => {
        setValue(event.target.value);
      };

    return (
      <div>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel>Enter Email</InputLabel>
          <Input
            id="Email-Field"
            value={value}
            onChange={handleChange()}
          />
        </FormControl>
      </div>
    );
};

export default EmailField;