import axios from 'axios';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./App.jsx";
import {Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography} from "@mui/material";


export const FoodService = () => {
    const {userId} = useContext(UserContext)
    const [foods, setFoods] = useState([])

    //Using the use-effect to change the state instead of refreshing the page for delete and edit.
    const [refreshState, setRefreshState] = useState(false);
    //The line below provides the date and split it in half we are using the index zero that means only the date first half
    // const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[-1]);

    //The line below provides the date in local time zone.
    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-TX'))
    // const [totals, setTotals] = useState({calories: 0, protein: 0, carbs: 0, fat: 0})

    const fetchFoodEntries= () => {
        axios
            .get(`http://localhost:8080/api/foodentry/${userId}?date=${selectedDate}`)
            .then(response => {
                setFoods(response.data)
                // setTotals(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log("Error", error.message)
            });
    };

    useEffect(() => {
        if(userId){
            fetchFoodEntries();
        }
    }, [selectedDate, userId, refreshState]);

    const deleteFoodEntry = (e) => {
        // console.log("Hello")
        axios.delete(`http://localhost:8080/api/foodentry/${e.target.dataset.id}`)
            .then(response =>{
                (response.data)
                setRefreshState(prevState => !prevState);
            })
            .catch(error => {
                console.log("Error in delete", error.message)
            })
    }

    const editFoodQuantity = (e) => {
        axios.patch(`http://localhost:8080/api/foodentry/${e.target.dataset.id}`)
            .then(response => {
                (response.data)
                setRefreshState(prevState => !prevState);
                })
            .catch(error => {
                console.log("Error in editing", error.message)
            })
    }

    return (
        <div>
            <Box sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>Your Food Log</Typography>

                <TextField
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Table sx={{ mb: 2 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Food Name</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Protein (g)</TableCell>
                            <TableCell align="right">Carbs (g)</TableCell>
                            <TableCell align="right">Fat (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {foods.map((entry, index) => (
                        <TableRow key={index}>
                            <TableCell>{entry.name}</TableCell>
                            <TableCell align="right">
                                <TextField
                                    type='number'
                                    defaultValue={entry.qty}
                                    onChange={(e) => {
                                        const updatedFood = [...foods];
                                        updatedFood[index].qty = e.target.value;
                                        setFoods(updatedFood);
                                    }}
                                    size='small'/>
                            </TableCell>
                            <TableCell align="right">{entry.macrosEntity.calories}</TableCell>
                            <TableCell align="right">{entry.macrosEntity.protein}</TableCell>
                            <TableCell align="right">{entry.macrosEntity.carbs}</TableCell>
                            <TableCell align="right">{entry.macrosEntity.fat}</TableCell>
                            <TableCell>
                            <Button data-id={entry.id}
                                    onClick={deleteFoodEntry}>Delete</Button>
                            <Button data-id={entry.id}
                                    onClick={editFoodQuantity}>
                                Edit</Button>
                            </TableCell>
                        </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </Box>
        </div>
        )
}

