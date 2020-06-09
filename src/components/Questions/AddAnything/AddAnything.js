import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from './AddAnything.module.css';

const useStyles = makeStyles(theme => ({
	root: {
		"& .MuiTextField-root": {
		margin: theme.spacing(1),
		width: "25ch"
		}
	}
}));

export default function MultilineTextFields() {
	const classes = useStyles();
	const [value, setValue] = React.useState("");

	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<div>
			<div className={styles.Question}>
				<p>Is there anything you would like to add?</p>
			</div>
			<form className={classes.root} noValidate autoComplete="off">
				<div>
					<TextField
						id="textField"
						label="Text Field"
						multiline
						value={value}
						onChange={handleChange}
						variant="filled"
					/>
				</div>
			</form>
		</div>
	);
}