import React, { Component } from "react";
import Post from "./post";
import CreatePost from "./createPost";

export default class Home extends Component {
  render() {
    return (
      <div>
        <CreatePost />
        <Post />
      </div>
    );
  }
}
