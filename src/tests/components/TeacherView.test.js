import React from "react";
import { render } from "@testing-library/react";
import TeacherView from "../../components/TeacherView";

describe("TeacherView", () => {
    it("renders correctly", () => {
        const { asFragment } = render (<TeacherView />);

        expect(asFragment()).toMatchSnapshot();
    });
});