"use client";

import { ReactNode } from "react";
import { useState } from "react";

export default function Tasks() {
  const [hasShared, setHasShared] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {hasShared ? (
        <TaskCompleted />
      ) : (
        <TasksList onShare={(hasShared) => setHasShared(hasShared)} />
      )}
    </main>
  );
}

const TaskCompleted: React.FC = () => {
  return <div>You completed it!</div>;
};

const TasksList: React.FC<{ onShare: (prevState: boolean) => void }> = ({
  onShare,
}) => {
  return (
    <>
      <span className="-mt-20 pb-5 text-center">
        You can choose from one of the tasks below:
      </span>
      <div>
        <ActionItem
          text="1. Share a lootbox with a friend/s"
          actionButton={<ActionButton onShare={onShare}>Send</ActionButton>}
        />
        <ActionItem
          text="2. Upload a video with you and your friends"
          actionButton={<ActionButton onShare={onShare}>Upload</ActionButton>}
        />
        <ActionItem
          text="3. Join our group"
          actionButton={<ActionButton onShare={onShare}>Join</ActionButton>}
        />
      </div>
    </>
  );
};

const ActionItem: React.FC<{
  text: string;
  actionButton: ReactNode;
}> = ({ text, actionButton }) => {
  return (
    <div className="flex flex-row justify-between items-center mb-5">
      <span className="w-2/3">{text}</span>
      {actionButton}
    </div>
  );
};

const ActionButton: React.FC<{
  children: string;
  onShare: (prevState: boolean) => void;
}> = ({ children, onShare }) => {
  return (
    <a
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        window.open("https://t.me/share/url?url=https://google.com", "_blank");
        onShare(true);

        // Simulate a delay to allow the user to share the link
        // setTimeout(() => {
        //   // Navigate to the new page in your app
        //   window.open("/"); // Replace '/newpage' with your desired route
        // }, 2000); // Adjust the delay as needed
      }}
      //   href="https://t.me/share/url?url=https://google.com"
      className="bg-blue rounded h-10 w-20 text-center  flex items-center justify-center"
    >
      <div>{children}</div>
    </a>
  );
};
