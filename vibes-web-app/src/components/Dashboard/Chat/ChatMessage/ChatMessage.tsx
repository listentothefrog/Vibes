import { ChatMessageProps } from "../chat-types";

export const ChatMessage = (props: ChatMessageProps) => {
  const { text, uid, photoURL } = props.message;
  return (
    <div>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  );
};
