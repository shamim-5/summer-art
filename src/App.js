import { useEffect, useState } from "react";
import ArtPic from "./Components/ArtPic";
import "./App.css";

function App() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setArt(data));
  }, []);
  return (
    <div className="m-6 pt-4 pb-12">
      <div className="font-bold text-4xl ">
        <h2>Summer Art Camp! 5 Days of Artists and Painting Monet,</h2>
        <h2>Van Gogh, Matisse, {"&"} More</h2>
      </div>
      <div className="flex text-md items-center text-slate-600">
        <div>
          <p>Multi-Day Course </p>
        </div>
        <div>
          <img
            className="w-4 h-4 ml-2 text-center"
            src={`https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-question-ui-dreamstale-lineal-dreamstale.png`}
            alt=""
          />
        </div>
      </div>
      <div className="pt-9 grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="">
          <p className="text-xl">
            In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate
            paintings using crayon and watercolor. Students will have fun learning about the artists {"&"} creating
            their own art inspired by their work.
          </p>
          <div className="flex justify-start items-center pt-3">
            <div>
              <img
                className="w-3/4"
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1656963599/summer-art/sapic_g5lrue.png`}
                alt="profile-pic"
              />
            </div>
            <div>
              <h3 className="text-xl text-[#5422ea] font-bold">Kimberly R Moseler</h3>
            </div>
          </div>
          <div className="flex justify-start items-center mt-4">
            <div className="flex flex-row mr-4">
              {" "}
              <img className="w-7" src={`https://img.icons8.com/emoji/48/000000/star-emoji.png`} alt="ratings" />
              <img className="w-7" src={`https://img.icons8.com/emoji/48/000000/star-emoji.png`} alt="ratings" />
              <img className="w-7" src={`https://img.icons8.com/emoji/48/000000/star-emoji.png`} alt="ratings" />
              <img className="w-7" src={`https://img.icons8.com/emoji/48/000000/star-emoji.png`} alt="ratings" />
              <img className="w-7" src={`https://img.icons8.com/emoji/48/000000/star-emoji.png`} alt="ratings" />
            </div>
            <div>
              <p className="text-slate-600">467 total reviews for this teacher</p>
            </div>
          </div>
          <div className="flex justify-start items-center mt-2">
            <div className="flex flex-row mr-4">
              {" "}
              <img className="w-7" src={`https://img.icons8.com/emoji/48/000000/star-emoji.png`} alt="ratings" />
              <img className="w-7" src={`https://img.icons8.com/emoji/48/000000/star-emoji.png`} alt="ratings" />
              <img className="w-7" src={`https://img.icons8.com/emoji/48/000000/star-emoji.png`} alt="ratings" />
              <img className="w-7" src={`https://img.icons8.com/emoji/48/000000/star-emoji.png`} alt="ratings" />
              <img className="w-7" src={`https://img.icons8.com/emoji/48/000000/star-emoji.png`} alt="ratings" />
            </div>
            <div>
              <p className="text-slate-600">5 reviews for this class</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-2">Completed by 21 learners</h3>
          </div>
          <div className="flex items-baseline">
            <div>
              <button className="flex items-center text-xl font-semibold py-2 px-6 bg-[#5422ea] text-white rounded-3xl mt-6">
                <span>See Class Schedule </span>
                <img
                  className="text-[#eee6e6]"
                  src={`https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png`}
                  alt="right-arrow"
                />
              </button>
            </div>
            <div className="flex items-center text-[#5422ea] font-bold text-xl md:mx-12 mx-2">
              <img
                className="mr-1 w-6 h-6"
                src={`https://img.icons8.com/material-outlined/24/000000/like--v1.png`}
                alt="like"
              />
              <p>Save</p>
            </div>
            <div className="flex items-center text-[#5422ea] font-bold text-xl">
              <img
                className="mr-1 w-6 h-6"
                src={`https://img.icons8.com/external-bartama-glyph-64-bartama-graphic/64/000000/external-arrow-user-interface-glyph-bartama-glyph-64-bartama-graphic.png`}
                alt="share"
              />
              <p>Share</p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center">
          {art.map((item) => (
            <ArtPic key={item._id} item={item}></ArtPic>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
