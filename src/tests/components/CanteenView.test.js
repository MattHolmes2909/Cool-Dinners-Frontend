import React from "react";
import { render } from "@testing-library/react";
import CanteenView from "../../components/CanteenView";

describe("CanteenView", () => {
    it("renders correctly", () => {
        const { asFragment } = render (<CanteenView />);

        expect(asFragment()).toMatchSnapshot();
    });
});