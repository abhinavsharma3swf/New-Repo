import {useEffect, useState} from "react";
import axios from "axios";
import {Foodcard} from "./Foodcard.jsx";

function Search() {
    const [searchItem, setSearchItem] = useState()
    const [selectedFood, setSelectedFood] = useState('')
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if (!searchItem) return;
        // console.log(searchItem)


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
    }, [searchItem]);

    const search = (event) => {
        // const setItem = {[event.target.name]: event.target.value};
        // console.log(setItem);
        //     setSearchItem(setItem);
        setSearchItem(event.target.value);
        // console.log(searchItem);
    }

    return(
        <div className="food-search">
            <label className="name">Input food</label>
            <input type="text" className="name" onClick={search}/>

            {/*//Checking if the search item exist//*/}

            {/*Another way to write this will be selectedFood?.map then the same line*/}
            {selectedFood && selectedFood.map((food, index) => (
                <Foodcard key={index} data={food}/>))}
        </div>
    )
}

export default Search;