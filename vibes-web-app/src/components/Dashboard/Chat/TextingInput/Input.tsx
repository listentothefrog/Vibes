import { useState } from "react";

export const Input = () => {
  const [formValue, setFormValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bottom-0 h-10 fixed flex w-full text-base max-w-screen-md"
    >
      <div className="flex items-center">
        <div>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            className="p-2 leading-6 bg-gray-600 rounded-lg border-none outline-none pr-10 text-1xl"
            placeholder="Type your message....."
          />
        </div>
        <div className="flex items-center ml-10">
          <button className="bg-blue-500 p-2 rounded-lg">Swoosh 💨</button>
        </div>
      </div>
    </form>
  );
};
