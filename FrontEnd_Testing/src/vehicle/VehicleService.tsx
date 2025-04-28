import axios from 'axios';
import {Vehicle} from "./VehicleCard.tsx";

export function fetchCars(): Promise<Vehicle[]> {

    return(
        axios.get('api/cars')
            .then(r => r.data));

}