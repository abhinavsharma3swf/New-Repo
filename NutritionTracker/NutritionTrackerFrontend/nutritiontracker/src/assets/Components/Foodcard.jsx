import {Card, CardContent, CardMedia, Checkbox, Typography} from "@mui/material";
import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "../../App.jsx";

export const Foodcard = ({data}) => {

    const [quantity, setQuantity] = useState(1);
    const {userId, setUserId} = useContext(UserContext)

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

            <Checkbox defaultChecked color="success" />
            <Checkbox defaultChecked
                      primary="#ffeb3b" />
            <Checkbox defaultChecked color="error" />
        </Card>

            <div className='qty'>
                <label>Enter the quantity</label>
            </div>
            <input
                type="number" min="1"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}>
            </input>
                <div>
                <button> Click to Log</button>
                    {save && <p> Food Saved Successfully</p>}
                </div>

            </form>
        </div>
    );
};

