import React from "react";
import { graphql } from 'react-apollo';
import currentUserQuery from '../../constants/users.graphql';

function TodoApp({ data :{users} }) {
    return (
        <ul>
            {console.log(users)}
        </ul>
    );
}

export default graphql(currentUserQuery)(TodoApp);