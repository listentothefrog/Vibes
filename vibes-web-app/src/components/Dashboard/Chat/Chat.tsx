import { ChatMessage } from "./ChatMessage/ChatMessage";
import "./Chat.css";
import { firestore } from "../../../firebase/firebaseSetup";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Message } from "./chat-types";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import firebase from "firebase";

export const Chat = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages]: [Message[] | undefined, boolean, Error | undefined] =
    useCollectionData<Message>(query, { idField: "id" });
  const user = useContext(AuthContext);
  const [formValue, setFormValue] = useState("");
  const dummy = React.useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    const uid = user?.uid;
    const photoURL = user?.photoURL;
    e.preventDefault();

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current && dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex items-center justify-center w-9/12 mx-auto flex-col">
      <h1 className="text-lg font-bold">
        The ulitimate programmer and gamer super chat
      </h1>
      <div className="main">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bottom-0 h-10 fixed flex w-full text-base max-w-screen-md"
      >
        <div className="flex items-center justify-center w-3/5">
          <div>
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              className="p-2 w-100% leading-6 bg-gray-600 rounded-lg border-none outline-none pr-10 text-1xl"
              placeholder="Type your message....."
            />
          </div>
          <div className="flex items-center ml-10">
            <button
              type="submit"
              disabled={!formValue}
              className="bg-blue-500 p-2 rounded-lg"
            >
              Swoosh 💨
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
