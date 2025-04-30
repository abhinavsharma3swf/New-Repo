import {useState} from "react";
import axios from "axios";
import {Foodcard} from "./Foodcard.jsx";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

function Search() {
    const [searchItem, setSearchItem] = useState("")
    const [selectedFood, setSelectedFood] = useState([])
    const [loading, setLoading] = useState(false)

const handleSearch = () => {
        if( !searchItem)
            return;

        setLoading(true)

        const options = {
            'method': 'POST',
            'url': 'https://trackapi.nutritionix.com/v2/natural/nutrients',
            'headers': {
                'Content-Type': 'application/json',
                'x-app-id': '3ed3d07f',
                'x-app-key': '43a405525bd03722860f5da9953a419a'
            },
            data: JSON.stringify({
                "query": searchItem
            })
        };

        axios
            .request(options)
            .then(response => {
                const results = (response.data.foods)
                console.log(results)
                setSelectedFood(results)
                setLoading(false)
            })
            .catch(error => {
                console.log('Error: It is not working', error.message)
                setLoading(false)
            })
    }

    const search = (event) => {
        // const setItem = {[event.target.name]: event.target.value};
        // console.log(setItem);
        //     setSearchItem(setItem);
        setSearchItem(event.target.value);
        // console.log(searchItem);
    }

    return(
        <div>
            <div className="food-search">
                <Link to={"/"} style={{ textDecoration: 'none', color: 'Green', textAlign: 'left' }}> Home</Link>

                {/*<label className="name" style={{color: 'Green'}}>Input food</label>*/}

                <input
                    type="text"
                    placeholder='Input food to search'
                    className="name"
                    value={searchItem}
                    onChange={search}>
                </input>

                <Link style={{ textDecoration: 'none', color: 'Green' }} className="name" onClick={handleSearch}>
                    Search
                </Link>

                {loading ? ( <p> Loading food data</p>) : (selectedFood && selectedFood.map((food, index) => (
                    <Foodcard key={index} data={food}/>)))}

                {/*//Checking if the search item exist//*/}

                {/*Another way to write this will be selectedFood?.map then the same line*/}

                <br/>
                <Link
                    to={'/foodservice'} style={{ textDecoration: 'none', color: 'Green' }}>Daily Log</Link>
                <br/>
                <Link to={"/bmicalculator"} style={{ textDecoration: 'none', color: 'Green' }}>Calculate your BMI</Link>
            </div>
        </div>
    )
}

export default Search;