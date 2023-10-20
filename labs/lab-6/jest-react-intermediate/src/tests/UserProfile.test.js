import React from "react";
import renderer from 'react-test-renderer';
import UserProfile from "../components/UserProfile";


it('renders correctly when there is a user', () => {
    const user = { name: 'John Doe', email: 'johndoe@example.com'};
    const tree = renderer.create(<UserProfile user={user} />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly when there is no user', () => {
    const tree = renderer.create(<UserProfile/>).toJSON();
    expect(tree).toMatchSnapshot();
});