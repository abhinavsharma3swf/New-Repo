import {useState} from "react";
import underweight from '../Ui/underweight.png'
import healthyweight from '../Ui/healthyweight.png'
import overweight from '../Ui/overweight.png'
import bmipic from '../Ui/bmipic.png'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

export const Bmicalculation = () => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");


    let calcBmi = (event) => {
        //prevent submitting
        event.preventDefault()

        if(weight ===0 || height ===0){
            alert('Please enter your details')
        }
        else{
            let bmi = (weight / (height * height) * 703)
            setBmi(bmi.toFixed(1))

            //Logic for message

            if(bmi < 18.40) {
                setMessage('You are underweight')
            }
            else if(bmi >=18.50 && bmi < 26) {
                setMessage("You are at healthy weight")
            }
            else{
                setMessage('You are overweight')
            }
        }
    }

    let imgSrc=""

    if(bmi <1){
        imgSrc = bmipic
    }
    else if(bmi <18.40){
        imgSrc = underweight
    }
    else if(bmi >18.50 && bmi <25){
        imgSrc = healthyweight
    }
    else{
        imgSrc = overweight
    }

    //function to reset the information on the screen
    let reload = () => {
        window.location.reload()
    }
    return(
        <div className='bmicalc'>

            <div className='container1'>
                <h1 className='center'> BMI Calculator </h1>
                <form onSubmit={calcBmi}>
                    <div>
                        <label>Weight (lbs)</label>
                        <input value={weight} onChange={(event) =>
                            setWeight(event.target.value)}/>
                    </div>
                    <div>
                        <label>Height (inches)</label>
                        <input value={height} onChange={(event) =>
                        setHeight(event.target.value)}/>
                    </div>
                    <button className='btn' type='submit'>Submit</button>
                    <button className='btn' type='submit' onClick={reload}>Reset</button>
                </form>

                <div className='center'>
                    <h3>Your BMI is : {bmi}</h3>
                    <p>{message}</p>
                    <div className='img-container'>
                        <img style={{}} src={imgSrc} alt=""/>
                    </div>
                </div>
                <Link to={"/"} style={{ textDecoration: 'none', color: 'Green', fontSize: '30px' }}> Home</Link>

        </div>
        </div>
    )
}
