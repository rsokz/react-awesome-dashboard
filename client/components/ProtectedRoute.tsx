import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { Query } from 'react-apollo';
// import * as query from '../graphql/queries';
// import currentUserQuery from '../graphql/queries/currentUser';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => (
  // <Route
  //   {...rest}
  //   render={props => {
  //     // <Query query={currentUserQuery}>
  //     //   {({ loading, data: { currentUser } }) => {
  //     //     if (loading) return null;
  //     //     if (currentUser) {
  //     //       return <Component {...props} />;
  //     //     }
  //     //   }}
  //     // </Query>;
  //     // return (
  //     //   <Redirect
  //     //     to={{
  //     //       pathname: '/login',
  //     //       state: {
  //     //         from: props.location
  //     //       }
  //     //     }}
  //     //   />
  //     // );
  //     return <div />;
  //   }}
  // />
  <div />
);

export default ProtectedRoute;