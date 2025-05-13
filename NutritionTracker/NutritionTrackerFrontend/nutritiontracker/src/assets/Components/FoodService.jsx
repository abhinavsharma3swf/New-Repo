import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App.jsx";
import {Box, Button,Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {MdDelete, MdSaveAlt} from "react-icons/md";
import {GrEdit} from "react-icons/gr";
import {HiSaveAs} from "react-icons/hi";
import {DailyOverviewChart} from "./DailyOverviewChart.jsx";
import {navigate} from "jsdom/lib/jsdom/living/window/navigation.js";


export const FoodService = () => {
    const { userId, userGoal } = useContext(UserContext);
    const [foods, setFoods] = useState([]);
    const [editQty, setEditQty] = useState([]);
    const [isInputFocused, setIsInputFocused] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const isToday = new Date().toISOString().split('T')[0] === selectedDate;
    const navigate = useNavigate();

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
    }, [userId, selectedDate]);

    const deleteFoodEntry = (e) => {
        const id = e.currentTarget.dataset.id;
        axios.delete(`http://localhost:8080/api/foodentry/${id}`)
            .then(() => fetchFoodEntries())
            .catch(error => console.error("Delete error:", error.message));
    };

    const editFoodQuantity = (e) => {
        console.log(e.target)
        console.log(e.currentTarget)
        const id = +e.currentTarget.dataset.id;
        const updated = editQty.find(el => el.id === id);
        if (!updated) return;
        axios.patch(`http://localhost:8080/api/foodentry/${id}`, {
            qty: updated.qty })
            .then(() => fetchFoodEntries())
            .catch(error => console.error("Update error:", error.message));
        setIsInputFocused(null);
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

    // const toggleOverview = () => {
    //     setShowOverView(prev => !prev)
    // }

    const routeToOverview = () =>{
        console.log(totals)
        navigate('/overview', {state: {totals}})
    }

    return (
        <Box sx={{ p: 3 }} style={{backgroundColor: "lightcyan", borderRadius: "30px"}}>
            <Typography variant="h4" gutterBottom>Your Food Log</Typography>

            <TextField
                label="Goal Calories"
                type="number"
                value={userGoal}
                // onChange={(e) => setGoalCalories(+e.target.value)}
                sx={{ mb: 1, ml: 1 }}
            />

            <TextField
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                sx={{ mb: 2 }}
            />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Food Name</strong></TableCell>
                        <TableCell><strong>Color</strong></TableCell>
                        <TableCell sx={{width:100}} align="center"><strong>Quantity</strong></TableCell>
                        <TableCell align="center"><strong>Calories</strong></TableCell>
                        <TableCell align="center"><strong>Protein (g)</strong></TableCell>
                        <TableCell align="center"><strong>Carbs (g)</strong></TableCell>
                        <TableCell align="center"><strong>Fat (g)</strong></TableCell>
                        <TableCell align="center"><strong>Actions</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {foods.map((entry) => {
                        const updatedQty = editQty.find(e => e.id === entry.id)?.qty ?? entry.qty;
                        return (
                            <TableRow key={entry.id}>
                                <TableCell>{entry.name}</TableCell>
                                <TableCell style={{
                                    background:
                                        entry.color === "Green"
                                ? 'green'
                                : entry.color === "Yellow"
                                ? 'yellow'
                                : 'red',
                                color: 'black',
                                }}>
                                    {entry.color}</TableCell>
                                    <TableCell align="right">
                                        {isInputFocused === entry.id ? (
                                            <TextField
                                                type="number"
                                                value={updatedQty}
                                                onChange={(e) => handleQtyChange(entry.id, e.target.value)}
                                                size="small"
                                            />
                                        ) : (
                                            <Typography align='center'>{entry.qty}</Typography>
                                        )}
                                    </TableCell>

                                    {/*<TextField*/}
                                    {/*    type="number"*/}
                                    {/*    value={updatedQty}*/}
                                    {/*    onChange={(e) => handleQtyChange(entry.id, e.target.value)}*/}
                                    {/*    size="small"*/}
                                    {/*    // onFocus={()=> setIsInputFocused(entry.id)}*/}
                                    {/*    // onBlur={()=> setIsInputFocused(null)}*/}
                                    {/*    disabled={isInputFocused !== entry.id}*/}
                                    {/*/>*/}
                                <TableCell align="center">{(entry.macrosEntity.calories * updatedQty).toFixed()}</TableCell>
                                <TableCell align="center">{(entry.macrosEntity.protein * updatedQty).toFixed()}</TableCell>
                                <TableCell align="center">{(entry.macrosEntity.carbs * updatedQty).toFixed()}</TableCell>
                                <TableCell align="center">{(entry.macrosEntity.fat * updatedQty).toFixed()}</TableCell>

                                <TableCell align="center" sx={{padding:0}}>
                                    {/*Edit button*/}
                                    <Button
                                        onClick={() => setIsInputFocused(entry.id)}
                                        disabled={!isToday || isInputFocused === entry.id}
                                        sx={{fontSize:30}}
                                        >
                                        <GrEdit />
                                    </Button>
                                    {/*Update Button*/}
                                    <Button data-id={entry.id}
                                            onClick={editFoodQuantity}
                                            disabled={
                                                isInputFocused !== entry.id ||
                                                updatedQty <= 0 ||
                                                isNaN(Number(updatedQty))
                                            }
                                    sx={{fontSize:30}}>
                                        <HiSaveAs />
                                    </Button>
                                    {/*delete Button*/}
                                    {/*<FontAwesomeIcon icon="fa-solid fa-trash" />*/}
                                    <Button sx={{fontSize:30}} data-id={entry.id} onClick={deleteFoodEntry}><MdDelete/></Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                    <TableRow>
                        <TableCell><strong>Totals</strong></TableCell>
                        <TableCell><strong><Button onClick={routeToOverview}>
                            OverView
                        </Button>

                                    </strong>
                        </TableCell>
                        <TableCell/>
                        <TableCell align="center"><strong>{totals.calories.toFixed()}</strong></TableCell>
                        <TableCell align="center"><strong>{totals.protein.toFixed()}</strong></TableCell>
                        <TableCell align="center"><strong>{totals.carbs.toFixed()}</strong></TableCell>
                        <TableCell align="center"><strong>{totals.fat.toFixed()}</strong></TableCell>
                        <TableCell align="center"><strong>Calories Remaining = {userGoal - totals.calories}</strong></TableCell>
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
