"use client"
import React, { useState } from "react";

const AddImage = (props: any) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageInputChange = (e: { target: { value: any } }) => {
    const url = e.target.value;
    console.log(url);
    setImageUrl(url);
  };

  const handleSubmit = () => {
    console.log(imageUrl);
    props.addImage(imageUrl);
    setImageUrl('');
  }

  return (
    <>
     <div className="flex gap-2 pt-5 pb-5">
     
      <input
        type="text"
        onChange={handleImageInputChange}
        placeholder="Paste image URL here"
      />
      <button className="border-2 border-black p-1"
     onClick={handleSubmit}
     >insert</button>
    </div>
    
    </>
   
  );
};

export default AddImage;
