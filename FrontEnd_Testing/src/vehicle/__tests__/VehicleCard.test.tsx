import {render, screen} from "@testing-library/react";
import VehicleCard, {Vehicle} from "../VehicleCard.tsx";
import {expect} from "vitest";

describe('Vehicle Card', () => {
    // it('should find a header with the word "make"',() =>{
    // //arrange
    //
    //
    // //act
    // render(<VehicleCard vehicle={{
    //     id: 0,
    //     make: ""
    // }}/>);
    //
    //
    //
    // //assert
    //     expect(screen.getByRole('heading', {name: 'Vehicle Card Header'})).toBeVisible();
    //     expect(screen.getByRole('heading', {name: 'Vehicle Card Header'}).textContent).toBe('Make');
    //
    // });

    it('should find a header with the a car make', () =>{
        const toyota: Vehicle = {
            id: 1,
            make: 'Toyota',
        }

            render(<VehicleCard vehicle={toyota}/>);
        expect(screen.getByRole('heading', {name: 'Vehicle Card Header'})).toBeVisible();
        expect(screen.getByRole('heading', {name: 'Vehicle Card Header'}).textContent).toBe('Make: Toyota');
    })

    it('should find a contentinfo with a car model', () =>{

        const toyota: Vehicle = {
            id: 1,
            make: 'Toyota',
            model: 'Tundra'
        }

        render(<VehicleCard vehicle={toyota}/>);
        const model = screen.getByRole('contentinfo', {name: 'Vehicle Model'});
        expect(model).toBeVisible();
        expect(model.textContent).toBe('Model: Tundra');

    })
});
