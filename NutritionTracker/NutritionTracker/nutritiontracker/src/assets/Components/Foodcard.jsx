import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export const Foodcard = ({data}) => {

    let {nf_calories, nf_protein, nf_total_carbohydrate, nf_total_fat, food_name, photo} = data;


    const image = photo?.highres || photo?.thumb || "https://via.placeholder.com/300"; // fallback if image missing


    return (
        <Card sx={{ maxWidth: 300, marginTop: 11 }}>
            <CardMedia
                component="img"
                image={image}
                alt={food_name}
                height="250"
            />
            <CardContent>
                <Typography variant="h6">{food_name}</Typography>
                <Typography variant="body2">Calories {nf_calories}</Typography>
                <Typography variant="body2">Protein {nf_protein}</Typography>
                <Typography variant="body2">Fat {nf_total_fat}</Typography>
                <Typography variant="body2">Carbohydrate {nf_total_carbohydrate}</Typography>
            </CardContent>
        </Card>
    );
};

