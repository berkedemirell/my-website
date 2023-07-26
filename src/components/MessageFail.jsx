import React from 'react'

const MessageFail = (props) => {
  return (
    <div className='absolute left-3 top-9 text-neutral-100 bg-red-950 rounded-lg'>
        <div className="w-fit h-fit border-2 border-neutral-100 p-4 text-lg rounded-lg">
        <h1 className="flex items-center justify-center gap-3">
            You have to fill all empty spaces.{" "}
          <span className="flex items-center justify-center text-2xl">
            <ion-icon name="close-outline"></ion-icon>
          </span>
        </h1>
      </div>
    </div>
  )
}

export default MessageFail