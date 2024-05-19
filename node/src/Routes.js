import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import { Login } from './pages/login';
import { Mycomp } from './pages/Mycomp';
import { PrivateRoutes } from './auth/PrivateRoutes';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoutes path="/" exact>
                    <UserInfoPage />
                </PrivateRoutes>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/test" exact>
                    <Mycomp />
                </Route>
            </Switch>
        </Router>
    );
}