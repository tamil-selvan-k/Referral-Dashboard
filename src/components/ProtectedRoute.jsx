import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = Cookies.get('jwt_token');
    console.log('null', token == null, 'undefined', token == undefined);

    if(token == null || token == undefined) {
        return <Navigate to='/login' />;
    }

    return <Outlet />;
}

export default ProtectedRoute;