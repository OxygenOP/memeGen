import { useState, useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import memeTemplate from "../assets/doge-meme-template.jpg.jpg";

const MemeGenerator = () => {
  const memeRef = useRef();
  const [topText, setTopText] = useState("Wow");
  const [bottomText, setBottomText] = useState("Such React");
  const [scale, setScale] = useState(1);

  return (
    <div className="h-full w-full bg-gray-100 flex flex-col items-center justify-center p-2">
      {/* Meme Container */}

      <div ref={memeRef} className=" relative  ">
        {/* Meme Image */}
        <img
          src={memeTemplate}
          alt="Meme template"
          className="w-full h-full  object-cover"
        />

        <div className="absolute top-2 left-0 right-0 text-center">
          <p className="text-3xl font-bold text-white meme-text stroke-black">
            {topText}
          </p>
        </div>

        <div className="absolute bottom-2 left-0 right-0 text-center">
          <p className="text-3xl font-bold text-white meme-text stroke-black">
            {bottomText}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 space-y-4 w-full max-w-[500px]">
        <input
          type="text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          placeholder="Top text"
          className="w-full px-4 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          placeholder="Bottom text"
          className="w-full px-4 py-2 rounded border border-gray-300"
        />
        <input
          type="number"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
          className="w-full px-4 py-2 rounded border border-gray-300"
        />
        <button
          onClick={() =>
            exportComponentAsPNG(memeRef, {
              fileName: "custom-meme.png",
              html2CanvasOptions: { scale: scale },
            })
          }
          className="w-full px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Download Meme
        </button>
      </div>
    </div>
  );
};

export default MemeGenerator;
