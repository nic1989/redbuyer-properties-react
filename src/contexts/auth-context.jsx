import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../utils/authSlices';

const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
    let loggedIn = useSelector((store) => store.auth.isLoggedIn)
    const dispatch = useDispatch();
    const [loggedInVal, setLoggedInVal] = useState(loggedIn);
    
    useEffect(() => {
      setLoggedInVal(loggedIn);
      if (loggedIn === 0 && sessionStorage.getItem('isLoggedIn') == 1) {
        setLoggedInVal(+sessionStorage.getItem('isLoggedIn'));
        dispatch(setLogin(+sessionStorage.getItem('isLoggedIn')));
      }
    }, [loggedIn]);
    return (
        <AuthContext.Provider
          value={loggedInVal}
        >
          {children}
        </AuthContext.Provider>
      );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };