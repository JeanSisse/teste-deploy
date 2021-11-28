import { useContext } from "react";
import AuthContext from '../../Contexts/AuthContext/AuthContext';

function useAuth() {
    return useContext(AuthContext);
}

export default useAuth;