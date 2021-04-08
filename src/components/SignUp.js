import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { RadioButtonChecked } from "@material-ui/icons";

const SignUp = () => {
  const paperStyle = {
    padding: '30px 20px',
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#96346f" };
  const buttonStyle = { margin: "10px 0px 15px 0px" };
  const passStyle = { margin: "12px 0px 10px 0px" };
  const headingStyle = { marginBottom: "0" };
  const marginTop ={ marginTop: "10px" };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headingStyle}>Sign Up</h2>
            <Typography variant="caption">
              Pleasde fill this form to create an account
            </Typography>
          </Grid>
          <TextField label="Name" placeholder="Enter Name" fullWidth required />
          <TextField
            style={passStyle}
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
            type="email"
          />
          <FormControl style={marginTop} component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
              required
            >
              <FormControlLabel
                value="Female"
                control={<Radio color="primary" />}
                label="Female"
              />
              <FormControlLabel
                value="Male"
                control={<Radio color="primary" />}
                label="Male"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Phone Number"
            placeholder="Enter Phone Number"
            fullWidth
            required
          />
          <TextField
            style={passStyle}
            label="Password"
            placeholder="Enter your password"
            fullWidth
            required
            type="password"
          />{" "}
          <TextField
            label="Confirm Password"
            placeholder="Confirm your password"
            fullWidth
            required
            type="password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" color="primary" />}
            label="I accept the terms and conditions."
            style={marginTop} 
          />
          <Button
            type="submit"
            style={buttonStyle}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default SignUp;
