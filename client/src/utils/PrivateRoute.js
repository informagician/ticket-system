import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props => {
                return localStorage.getItem('token') ? (
                    <Component {...props} {...rest} />
                ) : (
                    <Redirect to='/signin' />
                )
            }}
        />
    )
}

export default PrivateRoute;