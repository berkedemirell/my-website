import React from "react";

export const Message = () => {
  return (
    <div className="absolute left-3 top-9 text-neutral-100 bg-green-950 rounded-lg">
      <div className="w-fit h-fit border-2 border-green-950 p-4 text-lg rounded-lg">
        <h1 className="flex items-center justify-center gap-3">
          Message has been sent.{" "}
          <span className="flex items-center justify-center text-2xl">
            <ion-icon name="checkmark-outline"></ion-icon>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Message;
