import { Input } from "./TextingInput/Input";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatMessage } from "./ChatMessage/ChatMessage";
import "./Chat.css";
import { firestore } from "../../../firebase/firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Message } from "./chat-types";

export const Chat = () => {
  const user = useContext(AuthContext);
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages]: [Message[] | undefined, boolean, Error | undefined] =
    useCollectionData<Message>(query, { idField: "id" });
  return (
    <div className="flex items-center justify-center w-9/12 mx-auto flex-col">
      <h1 className="text-lg font-bold">
        The ulitimate programmer and gamer super chat room
      </h1>
      <div className="main">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <Input />
    </div>
  );
};
