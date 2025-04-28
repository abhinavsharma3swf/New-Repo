import {useEffect, useState} from "react";
import axios from "axios";
import {Foodcard} from "./Foodcard.jsx";
import {navigate} from "jsdom/lib/jsdom/living/window/navigation.js";

function Search() {
    const [searchItem, setSearchItem] = useState("")
    const [selectedFood, setSelectedFood] = useState([])

const handleSearch = () => {
        if( !searchItem)
            return;

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
            })
            .catch(error => {
                console.log('Error: It is not working', error.message)
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
                <label className="name">Input food</label>

                <input
                    type="text"
                    className="name"
                    value={searchItem}
                    onChange={search}>
                </input>

                <button className="name" onClick={handleSearch}>Search</button>

                {/*//Checking if the search item exist//*/}

                {/*Another way to write this will be selectedFood?.map then the same line*/}
                {selectedFood && selectedFood.map((food, index) => (
                    <Foodcard key={index} data={food}/>))}
            </div>
        </div>
    )
}

export default Search;