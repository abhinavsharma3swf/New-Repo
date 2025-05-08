import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App.jsx";
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import {Link} from "react-router-dom";

export const FoodService = () => {
    const { userId } = useContext(UserContext);
    const [foods, setFoods] = useState([]);
    const [editQty, setEditQty] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    const fetchFoodEntries = () => {
        axios
            .get(`http://localhost:8080/api/foodentry/${userId}?date=${selectedDate}`)
            .then(response => {
                setFoods(response.data);
                const qtyData = response.data.map(e => ({ id: e.id, qty: e.qty }));
                setEditQty(qtyData);
            })
            .catch(error => console.error("Fetch error:", error.message));
    };

    useEffect(() => {
        if (userId) fetchFoodEntries();
    }, [userId]);

    const deleteFoodEntry = (e) => {
        const id = e.target.dataset.id;
        axios.delete(`http://localhost:8080/api/foodentry/${id}`)
            .then(() => fetchFoodEntries())
            .catch(error => console.error("Delete error:", error.message));
    };

    const editFoodQuantity = (e) => {
        const id = +e.target.dataset.id;
        const updated = editQty.find(el => el.id === id);
        if (!updated) return;
        axios.patch(`http://localhost:8080/api/foodentry/${id}`, {
            qty: updated.qty })
            .then(() => fetchFoodEntries())
            .catch(error => console.error("Update error:", error.message));
    };

    const handleQtyChange = (id, value) => {
        if(!value || +value <=0)
            return;
        setEditQty(prev =>
            prev.map(el => el.id === id ? { id, qty: +value } : el)
        );
    };

    const totals = foods.reduce((el, entry) => {
        const qty = editQty.find(e => e.id === entry.id)?.qty ?? entry.qty;
        el.calories += entry.macrosEntity.calories * qty;
        el.protein += entry.macrosEntity.protein * qty;
        el.carbs += entry.macrosEntity.carbs * qty;
        el.fat += entry.macrosEntity.fat * qty;
        return el;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });


    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Your Food Log</Typography>

            <TextField
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                sx={{ mb: 2 }}
            />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Food Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Protein (g)</TableCell>
                        <TableCell align="right">Carbs (g)</TableCell>
                        <TableCell align="right">Fat (g)</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {foods.map((entry) => {
                        const updatedQty = editQty.find(e => e.id === entry.id)?.qty ?? entry.qty;

                        return (
                            <TableRow key={entry.id}>
                                <TableCell>{entry.name}</TableCell>
                                <TableCell align="right">
                                    <TextField
                                        type="number"
                                        value={updatedQty}
                                        onChange={(e) => handleQtyChange(entry.id, e.target.value)}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell align="right">{(entry.macrosEntity.calories * updatedQty).toFixed()}</TableCell>
                                <TableCell align="right">{(entry.macrosEntity.protein * updatedQty).toFixed()}</TableCell>
                                <TableCell align="right">{(entry.macrosEntity.carbs * updatedQty).toFixed()}</TableCell>
                                <TableCell align="right">{(entry.macrosEntity.fat * updatedQty).toFixed()}</TableCell>
                                <TableCell>
                                    <Button data-id={entry.id} onClick={deleteFoodEntry}>Delete</Button>
                                    <Button data-id={entry.id}
                                            onClick={editFoodQuantity}
                                            disabled={updatedQty <=0 || isNaN(updatedQty)}>Update</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                    <TableRow>
                        <TableCell><strong>Totals</strong></TableCell>
                        <TableCell />
                        <TableCell align="right"><strong>{totals.calories.toFixed()}</strong></TableCell>
                        <TableCell align="right"><strong>{totals.protein.toFixed()}</strong></TableCell>
                        <TableCell align="right"><strong>{totals.carbs.toFixed()}</strong></TableCell>
                        <TableCell align="right"><strong>{totals.fat.toFixed()}</strong></TableCell>
                        <TableCell />
                    </TableRow>
                </TableBody>
            </Table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                        color: 'green',
                        fontSize: '20px'
                    }}
                >Home
                </Link>
            </div>
        </Box>
    );
};
