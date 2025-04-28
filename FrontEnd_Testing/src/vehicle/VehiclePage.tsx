import {useEffect, useState} from "react";
import {fetchCars} from "./VehicleService.tsx";
import VehicleCard, {Vehicle} from "./VehicleCard.tsx";

export const VehiclePage =() => {

    const[cars, setCars] = useState<Vehicle[]>([])

    useEffect(()=>{
        fetchCars().then(cars => setCars(cars));
    }, []);


    return(
        <>
        <div role={'heading'} aria-label={'Vehicle Page Header'}>
            List of Cars
        </div>
            <ul>
                {cars.map((car)=> <VehicleCard vehicle={car}/>)}
            </ul>
        </>
    )
};