import {render, screen} from "@testing-library/react";
import {VehiclePage} from "../VehiclePage.tsx";
import {expect} from "vitest";
import * as VehicleService from '../VehicleService.tsx'
import {Vehicle} from "../VehicleCard.tsx";

describe('Vehicle Page', () => {

    it('Should find a page header', () =>{
        render(<VehiclePage/>);

        expect(screen.getByRole('heading', {name: 'Vehicle Page Header'})).toBeVisible();
    });


    //Mocking the vehicle page and pretending the api is being called//
    it('should call the fetchCars api',() =>{

        //vi spy on is like a mock test for the backend (Mockito test for backend)
        const mockVehicelService = vi.spyOn(VehicleService, 'fetchCars').mockResolvedValue([]);
        render(<VehiclePage/>);

        expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
        expect(screen.getByRole('heading', {name: 'Vehicle Page Header'})).toBeVisible();
        expect(mockVehicelService).toHaveBeenCalledTimes(1);//Use the times in frontend and backend to test to have a measure how many times it is being called//

    })


    it('should display a list of cars', async () =>{  //We are using the find so it will wait and we have to add the sync and await syntax

        const honda: Vehicle ={
            id: 1,
            make: 'Honda',
            model: 'Civic'
        }
        const mockVehicelService = vi.spyOn(VehicleService, 'fetchCars').mockResolvedValue([honda]);
        render(<VehiclePage/>);
        expect(await screen.findAllByRole('listitem')).toHaveLength(1);
    })

});