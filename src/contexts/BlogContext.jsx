import { onValue, ref } from "firebase/database";
import React, { createContext, useEffect, useState } from "react";
import { db } from "../helpers/firebase";

export const BlogContext = createContext(null);

const BlogContextProvider = ({ children }) => {
  const [blogAllInfo, setBlogAllInfo] = useState([]);
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogImgUrl, setNewBlogImgUrl] = useState("");
  const [newBlogContent, setNewBlogContent] = useState("");
  const [moveID, setMoveID] = useState('');
  const [authorEmailInfo, setAuthorEmailInfo] = useState('');
  const [heartCounter, setHeartCounter] = useState(0);

  useEffect(() => {
    try {
      onValue(ref(db), (snapshot) => {
        setBlogAllInfo([]);
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((singleBlog) => {
            return setBlogAllInfo((initialEmptyArray) => [
              ...initialEmptyArray,
              singleBlog,
            ]);
          });
        }
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  // console.log(blogAllInfo);

  return (
    <BlogContext.Provider
      value={{ blogAllInfo, newBlogTitle, setNewBlogTitle, newBlogImgUrl, setNewBlogImgUrl, newBlogContent, setNewBlogContent, moveID, setMoveID, authorEmailInfo, setAuthorEmailInfo, heartCounter, setHeartCounter }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
