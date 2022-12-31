import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom"

const users=[
    {
        name: 'harryAdmin',
        email: 'harryadmin@school.com',
        password: '123456789',
        role: 'admin'
    },
    {
        name: 'harryTeacher',
        email: 'harryteacher@school.com',
        password: '123456789',
        role: 'teacher'
    },
    {
        name: 'harryStudent',
        email: 'harrystudent@school.com',
        password: '123456789',
        role: 'student'
    },
    {
        name: 'harryPoter',
        email: 'harrystudent@school.com',
        password: '123456789',
        role: 'student'
    },
]

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            
            let found=0
            let currentUser = {}
            users.filter( user => {
                if (user.email ===values.email){ 
                  found = 1
                  if (user.password===values.password){
                        found=2
                        currentUser = user
                        // if(user.role === 'admin'){
                        // found=3
                        // if(found=3){
                        // navigate("/Admin")
                        
                     }
                     
                     }
                     
                     })

            if (found === 2){
                        switch(currentUser.role) {
                            case 'admin':
                                navigate("/Admin")
                                break;
                            case 'student':
                                navigate("/student")
                                break;
                            case 'teacher':
                                navigate("/teacher")
                                break;
                             default:
                                navigate("")
                        }
                     }
                     
            if (found==0){
                alert("email not found")}
                if(found==1){
                    alert("password incorrect")
                }
                    
                     
                     
                     
            //         
            //         if (found=0) {
            //     alert("email incorrect")
            // } 

            //     } if(user.password===!values.password) {
            //         found = 0
            //         alert("password incorrect")
            //     }
            //     if(user.email.includes('admin'))
            //        navigate("/Admin")
            
            
        
            
        }
    });


    return (
        <div style={{ margin: '30px 60px' }}>
            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    margin='dense'
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    
                />
                
                <TextField
                    margin='dense'
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
            
            {/* <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div> */}
        </div>
    );
};



export default Login