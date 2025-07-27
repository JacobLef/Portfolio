import { useEffect, useState } from "react";

/**
 * Constructs the loading screen of the Website, such that it is the first thing any user
 * will see when they load the website.
 * @param {function} onComplete Callback function which is to be called once the LoadingScreen is 
 *                   finished loading. What the callback function done is up to the caller.
 */
export const LoadingScreen = ({ onComplete }) => {
  if (typeof onComplete !== "function") {
    throw new Error("The type of the given callback function for LoadingScreen is invalid!");
  }

  const [text, setText] = useState("");
  const fullText = "Welcome to my Portfolio!";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval)
  }, [onComplete]);


  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className = "animate-blink ml-1"> | </span>
      </div>  

      <div className="w-[200px] h-[2px], bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-orange-300 shadow-[0_0_15px_#3b82f6] animate-loading-bar">

        </div>
      </div>
    </div>
  )
}