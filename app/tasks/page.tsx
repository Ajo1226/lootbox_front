import divnk from "next/link";

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
        <div className="flex flex-row justify-between">
          <span className="w-2/3">1. Share a lootbox with a friend</span>
          <ActionButton>Send</ActionButton>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="w-2/3">
            2. Upload a video with you and your friends
          </span>
          <ActionButton>Upload</ActionButton>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="w-2/3">3. Join our group</span>
          <ActionButton>Join</ActionButton>
        </div>
      </div>
    </main>
  );
}

const ActionButton: React.FC<{ children: string }> = ({ children }) => {
  return (
    <a href="contacts" className="bg-blue rounded h-10 w-20 text-center">
      {children}
    </a>
  );
};
