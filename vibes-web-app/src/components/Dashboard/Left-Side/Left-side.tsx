import { auth } from "../../../firebase/firebaseSetup";
import { Profile } from "./Profile/Profile";

export const LeftSide = () => {
  const signOut = async () => {
    await auth.signOut();
  };
  return (
    <div className="flex items-center justify-between">
      <div className="ml-10">
        <img
          loading="lazy"
          style={{ height: "100px", width: "200px" }}
          className="w-5/12 object-contain"
          src="https://github.com/listentothefrog/Vibes/blob/staging/logo.png?raw=true"
          alt="Logo"
        />
      </div>
      <div className="">
        <Profile />
      </div>
      <div className="flex items-center justify-center w-1/12">
        <button className="bg-blue-600 p-2.5 rounded-lg" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};
