import {Card, CardContent, CardMedia, Checkbox, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "../../App.jsx";

export const Foodcard = ({data}) => {

    const [quantity, setQuantity] = useState(1);
    const {userId, setUserId} = useContext(UserContext)
    const [selectedColor, setSelectedColor] = useState('Green')

    console.log(userId)

    let {nf_calories, nf_protein, nf_total_carbohydrate, nf_total_fat, food_name, photo} = data;

    const [save, setSave] = useState(false);


    const image = photo?.highres || photo?.thumb || "https://via.placeholder.com/300"; // fallback if image missing



        const handleSubmit = (event) => {
            event.preventDefault();

            axios.post(`http://localhost:8080/api/foodentry/${userId}`, {
                name: food_name,
                date: new Date().toISOString().split('T')[0],
                qty: quantity,
                macrosEntity:
                    {
                        calories: nf_calories,
                        protein: nf_protein,
                        carbs: nf_total_carbohydrate,
                        fat: nf_total_fat
                    }

            })
                .then(response => {
                    console.log('Food entry saved:', response.data);
                    setSave(true)
                    // const userId = response.data.id;
                })
                .catch(error => {
                    console.error('Error saving food:', error.message);
                });
        };


    return (

        <div>
            <form onSubmit={handleSubmit}>
        <Card sx={{ maxWidth: 300, marginTop: 2, marginLeft: 60}}>
            <CardMedia
                component="img"
                image={image}
                alt={food_name}
                height="250"
            />
            <CardContent>
                <Typography variant="h6">{food_name}</Typography>
                <Typography variant="body2">Calories {nf_calories.toFixed() * quantity}</Typography>
                <Typography variant="body2">Protein {nf_protein.toFixed() * quantity}</Typography>
                <Typography variant="body2">Fat {nf_total_fat.toFixed() * quantity}</Typography>
                <Typography variant="body2">Carbohydrate {nf_total_carbohydrate.toFixed() *quantity}</Typography>
            </CardContent>

            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => setSelectedColor(e.target.value)}
            >
                <FormControlLabel style={{color: 'green'}} value="Green" control={<Radio />} label="Green" />
                <FormControlLabel style={{color: 'gold'}} value="Yellow" control={<Radio />} label="Yellow" />
                <FormControlLabel style={{color: "red"}} value="Red" control={<Radio />} label="Red" />
            </RadioGroup>

            {/*<Radio defaultChecked color="success" control={<Radio />} label="Green" name='green'/>*/}
            {/*<Radio style={{color: 'gold'}} control={<Radio />} label="Yellow" name='green'/>*/}
            {/*<Radio defaultUnChecked color="error" control={<Radio />} label="Red" name='green' />*/}
        </Card>

            <div className='qty'>
                <label style={{color:
                        selectedColor === 'Green'
                    ? 'green'
                    :selectedColor === 'Yellow'
                    ? 'gold'
                    : 'red'}}>Enter the quantity</label>
            </div>
            <input
                type="number" min="1"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}>
            </input>
                <div>
                <button className='foodbtn'> Click to Log</button>
                    {save && <p style={{fontsize: '20px'}}> Food Saved Successfully</p>}
                </div>

            </form>
        </div>
    );
};

