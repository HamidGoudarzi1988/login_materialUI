import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const Login = () => {

    const paperStyle = { padding: '30px 20px',
    height: "70vh",
    width: 300,
    margin: "20px auto",}
    const avatarStyle ={ backgroundColor:'#96346f'}
    const buttonStyle ={margin:'10px 0px 15px 0px'}
    const passStyle ={margin:'12px 0px 10px 0px'}
    return ( 
       <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                    </Grid>
                    <TextField 
                    label='Username' 
                    placeholder='Enter Username'
                    fullWidth
                    required
    
                    />
                    <TextField 
                    style={passStyle}
                    label='Password' 
                    placeholder='Enter Password'
                    fullWidth
                    required
                    type='password'
                    />
                    <FormControlLabel
                    control={
                      <Checkbox
                       
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                  <Button type='submit'
                  style={buttonStyle} 
                  variant="contained"
                  color='primary'  fullWidth>

                  Sign In
                  </Button>
                  <Typography >
                  <Link href="#">
                    Forget password?
                  </Link>
                  </Typography>
                  <Typography >
                  Do you have an account?
                  <Link href="#">
                  Sign Up
                  </Link>
                  </Typography>
                </Paper>
            </Grid>
       </div>
     );
}
 
export default Login;