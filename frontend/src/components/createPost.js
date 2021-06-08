import React, { Component } from "react";
import ChoosePost from "./choosePost";
import { useState } from "react";

export default function CreatePost() {
  const [create, setCreate] = useState("");

  function handlePost() {
    setCreate(true);
    console.log("directing to choose post page");
  }
  if (create) {
    return <ChoosePost />;
  }

  return (
    <div>
      <button onClick={handlePost}> + Create Post</button>
    </div>
  );
}
