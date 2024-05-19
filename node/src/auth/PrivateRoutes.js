import { Redirect, Route} from 'react-router-dom';
import {useToken} from '../auth/useToken';
export const PrivateRoutes = props => {
    const[token,]=useToken();

    if(!token)
    return <Redirect to="/login" />
    return <Route {...props} />
}