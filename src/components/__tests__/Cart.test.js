import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import Header from "../Header";
import {act} from "react-dom/test-utils"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utilis/appStore";
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA),
    })
);



it("Should Load Restaurant Menu Component", async()=>{

    await act(
        async()=> render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu />
                    <Cart />
                </Provider>
        </BrowserRouter>
        ));
    

        const accordianHeader = screen.getByText("Veg Pizza (17)");
        fireEvent.click(accordianHeader);
        expect(screen.getAllByTestId("foodItems").length).toBe(17);
    
        expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

        const addBtn = screen.getAllByRole("button", {name: "ADD +"})
        fireEvent.click(addBtn[0]);
        
        expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
        
        fireEvent.click(addBtn[1]);

        expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

        expect(screen.getByText("Your cart is empty, Please add some items!")).toBeInTheDocument();
        
        

});