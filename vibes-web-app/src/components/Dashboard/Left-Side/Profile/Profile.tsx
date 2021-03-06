import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

export const Profile = () => {
  const user = useContext(AuthContext);
  return (
    <div className="flex items-center">
      <img
        style={{ width: "50px", height: "50px" }}
        className="rounded-full mr-3"
        src={user?.photoURL! as string}
        alt="profile"
      />
      <h1 className="flex font-semibold sm:text-sm">{user?.displayName}</h1>
    </div>
  );
};
