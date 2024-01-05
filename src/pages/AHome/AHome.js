import React, { useState, useEffect, useContext } from "react";
import ANavbar from "../../components/ANavbar/ANavbar.js";
import AFooter from "../../components/AFooter/AFooter.js";
import Header from "../../components/header/Header.js";
import imageHeader from "../../Photos/header-1.png";
import "./AHome.css";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext.js";
import { toast } from "react-toastify";
// Category images
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const AHome = () => {
  // const itemData = useState(null)
  //fetch categories
  const [categories, setCategories] = useState("");
  const [design, setDesign] = useState([]);
  //fetch feedbacks
  const [feedbacks, setFeedbacks] = useState("");
  const [content, setContent] = useState("");

  //check if the user is logged in
  const { user, token } = useContext(AuthContext);

  const AuthToken = token;
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/feedbacks",
        { content, UserId: user.id },
        {
          headers: {
            Authorization: `Bearer ${AuthToken}`,
          },
        }
      );
      // const data = response.data;
      const newFeedback = response.data.data;
      console.log(newFeedback);
      setFeedbacks((prevFeedbacks) => [newFeedback, ...prevFeedbacks]);

      // console.log(data);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.warning("You need to login first !!!!!");
      }
      console.log("Failed to post the feedback!", error.message);
    }
  };

  useEffect(() => {
    const fetchfeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/feedbacks");
        // console.log(response);
        const data = await response.json();
        console.log(data.data);
        setFeedbacks(data.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };
    fetchfeedbacks();
  }, []);

  return (
    <div>
      <ANavbar />
      <div className="AHome-Container">
        <Header imageSrc={imageHeader} />
        <div className="Home-Categories-Section">
          <h4>Categories</h4>
          {/* <ImageList sx={{ width: 500, height: 450 }}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList> */}
        </div>
        {/* <div className="Home-Feedback-Section">
          <h4>Feedback</h4>
          {feedbacks &&
            feedbacks.map((each, index) => (
              <div className="comments-item" key={index}>
                <h1 className="name-comments">{each.User.username}</h1>
                <p className="comment-itself">{each.content}</p>
              </div>
            ))}
  
  

        </div> */}

        <div className="main-container">
          {feedbacks &&
            feedbacks.map((each, index) => (
              <div className="comments-item" key={index}>
                <div className="comment-container">{each.username}</div>
                <p className="comment-itself">{each.content}</p>
              </div>
            ))}

          <form onSubmit={submitFeedback}>
            <div className="comment-flexbox">
              <h3 className="comment-text">Write your feedback!</h3>
              <textarea
                value={content}
                onChange={handleContent}
                className="input-box"
              />

              <button type="submit" className="comment-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <AFooter />
    </div>
  );
};

export default AHome;
