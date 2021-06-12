import { Input } from "./TextingInput/Input";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatMessage } from "./ChatMessage/ChatMessage";
import "./Chat.css";

export const Chat = () => {
  const user = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center w-9/12 mx-auto flex-col">
      <h1>{user?.displayName}'s Room</h1>
      <div className="main">
        <ChatMessage />
      </div>
      <Input />
    </div>
  );
};
