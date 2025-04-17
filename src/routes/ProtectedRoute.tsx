// import {useSelector} from 'react-redux'
// import { User } from '../types/user'
import {Navigate, Outlet}  from 'react-router-dom'

const ProtectedRoute = () => {
    // const isAuthenticated = useSelector((state:User)=>state.user.user !== null )
    const isAuthenticated= true;
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace/>
}

export default ProtectedRoute

