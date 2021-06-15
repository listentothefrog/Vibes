import { ChatMessageProps } from "../chat-types";
import { auth, firestore } from "../../../../firebase/firebaseSetup";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { strict } from "assert";

export const ChatMessage = (props: ChatMessageProps) => {
  const user = useContext(AuthContext);
  const { text, uid, photoURL } = props.message;

  const messageClass =
    auth.currentUser != null && uid === auth.currentUser.uid
      ? "sent"
      : "received";

  const deleteClass =
    auth.currentUser != null && uid === auth.currentUser.uid ? "show" : "hide";

  const deleteMessage = () => {
    alert("Are you sure you wanna delte your message?");
    firestore.collection("messages").doc(props.message.id).delete();
  };
  return (
    <div className={`message ${messageClass}`}>
      <img className="profile" src={photoURL} alt="profile_picture" />
      <div className="message_contents">
        <small className="text-gray-500 font-normal">{user?.displayName}</small>
        <p className="font-normal">{text}</p>
      </div>
      <div className="ml-2 flex">
        <div className="mr-2">
          <button onClick={deleteMessage} className={`delete ${deleteClass}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FF3131"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
