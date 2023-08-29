// AuthContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getAuthInfo } from "../../../services/auth/autLogInfo/getAuthInfo";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  pseudo: string;
  tag: string;
  role: string;
  // ... autres propriétés d'utilisateur
}

interface AuthContextType {
  meData: { user: User } | null;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [meData, setMeData] = useState<{ user: User } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAuthInfo()
      .then((MeData) => {
        setMeData(MeData);
        setError(null);
      })
      .catch((error) => {
        setError("Une erreur s'est produite : " + error.message);
      });
  }, []);

  // console.log(meData);

  const authContextValue: AuthContextType = { meData, error };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth doit être utilisé à l'intérieur d'un AuthProvider"
    );
  }
  return context;
}
