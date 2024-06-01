import { ReactNode } from "react";

export default function Tasks() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center
"
    >
      <span className="-mt-20 pb-5 text-center">
        You can choose from one of the tasks below:
      </span>
      <div>
        <ActionItem
          text="1. Share a lootbox with a friend/s"
          actionButton={<ActionButton>Send</ActionButton>}
        />
        <ActionItem
          text="2. Upload a video with you and your friends"
          actionButton={<ActionButton>Upload</ActionButton>}
        />
        <ActionItem
          text="3. Join our group"
          actionButton={<ActionButton>Join</ActionButton>}
        />
      </div>
    </main>
  );
}

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

const ActionButton: React.FC<{ children: string; href?: string }> = ({
  children,
}) => {
  return (
    <a
      href="https://t.me/share/url?url=https://google.com"
      className="bg-blue rounded h-10 w-20 text-center  flex items-center justify-center"
    >
      <div>{children}</div>
    </a>
  );
};
