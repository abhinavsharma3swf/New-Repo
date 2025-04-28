import {Card, CardContent, CardMedia, Checkbox, Typography} from "@mui/material";
import {use, useState} from "react";
import axios from "axios";

export const Foodcard = ({data}) => {

    const [quantity, setQuantity] = useState(1);

    let {nf_calories, nf_protein, nf_total_carbohydrate, nf_total_fat, food_name, photo} = data;


    const image = photo?.highres || photo?.thumb || "https://via.placeholder.com/300"; // fallback if image missing



        const handleSubmit = (event) => {
            event.preventDefault();

            axios.post('http://localhost:8080/api/foodentry/${userId}', {
                name: food_name,
                date: new Date().toISOString().split('T')[0],
                quantity: quantity,
            })
                .then(response => {
                    console.log('Food entry saved:', response.data);
                    // const userId = response.data.id;
                })
                .catch(error => {
                    console.error('Error saving food:', error.message);
                });
        };


    return (

        <div>
            <form onSubmit={handleSubmit}>
        <Card sx={{ maxWidth: 300, marginTop: 11 }}>
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
            <Checkbox defaultChecked primarycolor="caution" />
            <Checkbox defaultChecked color="error" />
        </Card>

            <div className='qty'>
                <label>Enter the quantity</label>
            </div>
            <input
                type="number" min="0"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}>
            </input>

                <button> Click to Log</button>
            </form>
        </div>
    );
};

