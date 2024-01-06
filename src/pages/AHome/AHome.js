import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import ANavbar from "../../components/ANavbar/ANavbar.js";
import AFooter from "../../components/AFooter/AFooter.js";
import Header from "../../components/header/Header.js";
import imageHeader from "../../Photos/header-1.png";
import "./AHome.css";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext.js";
import { toast } from "react-toastify";
import APagination from "./APagination.js";

const AHome = () => {
  const { user, token } = useContext(AuthContext);
  const AuthToken = token;
  const [feedbacks, setFeedbacks] = useState([]);
  const [content, setContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage] = useState(4);

  const location = useLocation();

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/feedbacks",
        { content, UserId: user ? user.id : null }, // Pass UserId only if the user is logged in
        {
          headers: {
            Authorization: `Bearer ${AuthToken}`,
          },
        }
      );
      const newFeedback = response.data.data;
      setFeedbacks((prevFeedbacks) => [newFeedback, ...prevFeedbacks]);
      setContent(""); // Clear the content after submitting feedback
      toast.success("Feedback posted successfully!");
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.warning("You need to log in to post feedback.");
      } else {
        console.error("Failed to post feedback:", error.message);
      }
    }
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/feedbacks");
        console.log(response.data);
        setFeedbacks(response.data.data);

        // Parse page number from the URL
        const urlParams = new URLSearchParams(location.search);
        const page = parseInt(urlParams.get("page")) || 1;
        setCurrentPage(page);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
        setFeedbacks([]);
      }
    };

    fetchFeedbacks();
  }, [location.search]);

  // Pagination Logic
  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const displayedFeedbacks = feedbacks.slice(
    indexOfFirstFeedback,
    indexOfLastFeedback
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Update the URL with the new page number
    window.history.pushState({}, "", `?page=${pageNumber}`);
  };

  return (
    <div>
      <ANavbar />
      <div className="AHome-Container">
        <div className="pages-height">
          <Header imageSrc={imageHeader} />
        </div>
        <div className="feedback-title">Feedback Section</div>

        <div className="main-container feedback-container-main pages-height">
          <div className="left-section">
            {user ? (
              <form onSubmit={submitFeedback}>
                <div className="comment-flexbox">
                  <h3 className="comment-text">Write your feedback!</h3>
                  <textarea
                    value={content}
                    onChange={handleContent}
                    className="input-box"
                  />
                  <button
                    type="submit"
                    className="btn btn-blue comment-button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div className="comment-flexbox center">
              <p className="comment-text">
                You need to log in to post feedback.
              </p>
            </div>
            )}
          </div>

          <div className="right-section">
            {feedbacks.length > 0 && (
              <div className="comments-grid">
                {displayedFeedbacks.map((item) => (
                  <div className="comments-item" key={item.id}>
                    <div className="comment-container">
                      {item.User && item.User.username
                        ? item.User.username
                        : "uknownuser"}
                    </div>
                    <p className="comment-itself">{item.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="pagination-container">
              <APagination
                feedbacksPerPage={feedbacksPerPage}
                totalFeedbacks={feedbacks.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
      <AFooter />
    </div>
  );
};

export default AHome;
