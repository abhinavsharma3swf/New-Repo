import {Button, FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const Register = () => {
    const [userDetail, setUserDetail] = useState({
        username: "",
        age: "",
        gender: ""
    });

    const navigate = useNavigate();

    const handleInput = (event) => {
        setUserDetail((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/api/users', {
            username: userDetail.username,
            age: userDetail.age,
            registrationDate: new Date().toISOString().split('T')[0]
        })
            .then(response => {
                console.log('User saved:', response.data);
                const userId = response.data.id;
                navigate('/search', { state: { userId } });
            })
            .catch(error => {
                console.error('Error saving user:', error.message);
            });
    };

    return (
        <section className="form-parent">
            <form aria-label="inputform" className="form" onSubmit={handleSubmit}>
                <h1>Start your Fitness Journey Today</h1>
                <TextField required
                           name="username"
                           label="Enter Your Name"
                           onChange={handleInput} />
                <TextField required
                           name="age"
                           label="Enter Your Age"
                           type="number" onChange={handleInput} />

                <RadioGroup name="gender" onChange={handleInput}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>

                <Button type="submit" variant="contained" color="success">
                    Click Here To Start
                </Button>
            </form>
        </section>
    );
};

export default Register;
