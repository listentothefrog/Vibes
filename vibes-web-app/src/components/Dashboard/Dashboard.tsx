import { LeftSide } from "./Left-Side/Left-side";
import { Chat } from "./Chat/Chat";

export const Dashboard = () => {
  return (
    <div>
      <div>
        <LeftSide />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
};
