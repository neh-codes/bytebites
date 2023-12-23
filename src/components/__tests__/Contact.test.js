import Contact from "../Contact";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";


describe("Contact us test cases", () => {
it ("Should load contact component", 
()=>{
    render (<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

});
it ("Should load contact button", 
()=>{
    render (<Contact/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

});
});