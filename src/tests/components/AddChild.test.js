import React from "react";
import { render } from "@testing-library/react";
import AddChild from "../../components/AddChild";

describe("AddChild", () => {
    it("renders correctly", () => {
        const { asFragment } = render (<AddChild />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders input correctly", () => {
        const { getByTestId } = render(<AddChild />);
        const input = getByTestId("form-title-input-child");
        expect(input).toBeTruthy();
    });

    it("Renders button correctly", () => {
        const { getByTestId } = render(<AddChild />);
        const button = getByTestId("form-button-child");
        expect(button).toBeTruthy();
    });
});