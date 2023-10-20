import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

it('calls the onclick callback', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick} label="Click Me"/> );
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});