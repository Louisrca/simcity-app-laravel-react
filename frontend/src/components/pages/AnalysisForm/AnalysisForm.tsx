import { useAuth } from "../../context/auth/AuthContext";
import s from "./AnalysisForm.module.css";

export const Profile = () => {
  const { meData, error } = useAuth();
  const user = meData?.user;
  return (
    <div className={s.profileView}>
      <h1>Form</h1>
      {user && (
        <h4>Connecté en tant que {user.firstname + " " + user.lastname}</h4>
      )}
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};
