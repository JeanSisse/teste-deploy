import { createContext } from 'react';
import useAuthProvider from '../../Hooks/Hook-Authentication/useAuthProvider';

const AuthContext = createContext();

export function AuthProvider(props) {
    const AuthProvider = useAuthProvider();

    return (
        <AuthContext.Provider value={AuthProvider}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;