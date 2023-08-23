import { useAuth } from "../../auth/authLogin/AuthContext";
import s from "./Profile.module.css";

export const Profile = () => {
  const { meData, error } = useAuth();
  const user = meData?.user;
  return (
    <div className={s.profileView}>
      <h1>Profile</h1>
      {user && (
        <h4>Connecté en tant que {user.firstname + " " + user.lastname}</h4>
      )}
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};
