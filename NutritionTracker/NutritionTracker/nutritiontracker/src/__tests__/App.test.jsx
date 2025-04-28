import {render, screen} from "@testing-library/react"

import App from "../App.jsx";

    describe('Homepage', () => {


        it('should render the app and display the input fields and the heading', () => {
            render(<App/>)
            expect(screen.getByRole('heading')).toBeVisible();
            expect(screen.getByRole('form', {name: 'inputform'})).toBeVisible();
            expect(screen.getByLabelText('radio', {name: "radio"})).toBeVisible();
        })

        it('should find the button for the BMI calculator', () => {
            render(<App/>)
            expect(screen.getByRole('button', {name: 'bmi' })).toBeVisible();

        })

        it('should add the new user', async value =>{
            const newUser = {
                name:"",
                email: ""
            }
            await vi.spyOn(newUser).mockResolvedValue(value);

            render(<App/>)

            const makeInput = screen.getByLabelText("Please Enter Your Name")
            const modelInput = screen.getByLabelText("Please Enter Your Age")
            const yearInput = screen.getByAltText("radio")

            // await userEvent.type(name, 'XYZ')
            // expect(name).toHaveValue('Xyz');

            // await userEvent.click(addButton);
            // const user = { id: 1, name: 'Xyz', Age: '21'};
            // expect(await screen.findByRole('heading', {name: car.make})).toBeVisible()
        })
})
