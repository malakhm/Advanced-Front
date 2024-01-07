import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProfileImage from "../../Photos/profileiamge.jpg";
import axios from "axios";
import APagination from "../../pages/AHome/APagination";
import ANavbar from "../../components/ANavbar/ANavbar.js";
import AFooter from "../../components/AFooter/AFooter.js";
import Header from "../../components/header/Header.js";
import imageHeader from "../../Photos/header-1.png";
import { AuthContext } from "../../Context/AuthContext.js";
import { toast } from "react-toastify";
import "./AHome.css";

const AHome = () => {
  const { user, token } = useContext(AuthContext);
  const AuthToken = token;
  const [feedbacks, setFeedbacks] = useState([]);
  const [content, setContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage] = useState(9);
  const location = useLocation();

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/feedbacks");
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

  const submitFeedback = async (e) => {
    e.preventDefault();
    console.log("Content length:", content.length); // Add this line

    if (!content.trim()) {
      toast.warning("Feedback cannot be empty.");
      return;
    }

    // Check if content exceeds 250 characters
    if (content.length >= 250) {
      toast.warning("Feedback cannot exceed 250 characters.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/feedbacks",
        { content, UserId: user ? user.id : null },
        {
          headers: {
            Authorization: `Bearer ${AuthToken}`,
          },
        }
      );
      const newFeedback = response.data.data;
      setContent("");
      toast.success("Feedback posted successfully!");

      await fetchFeedbacks();
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.warning("You need to log in to post feedback.");
      } else {
        console.error("Failed to post feedback:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [location.search]);

  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;

  // Reverse the order of feedbacks to show the latest first
  const reversedFeedbacks = [...feedbacks].reverse();

  // Slice the reversed array
  const displayedFeedbacks = reversedFeedbacks.slice(
    indexOfFirstFeedback,
    indexOfLastFeedback
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.history.pushState({}, "", `?page=${pageNumber}`);
  };

  return (
    <div>
      <ANavbar />
      <div className="AHome-Container">
        <div className="pages-heighta page-header-home">
          <Header imageSrc={imageHeader} />
        </div>
        <div className="feedback-title">Feedback Section</div>

        <div className="main-container feedback-container-main pages-heighta">
          <div className="left-section">
            <div className="comment-flexbox center-a">
              <p className="comment-paragraph">
                Over 100 designs completed for happy clients.
              </p>
            </div>
            {user ? (
              <form onSubmit={submitFeedback}>
                <div className="comment-flexbox">
                  <h3 className="comment-text">Write your feedback!</h3>
                  <textarea
                    value={content}
                    onChange={handleContent}
                    className="input-box"
                  />
                  <button type="submit" className="btn btn-blue comment-button">
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
            <Row xs={1} md={3} className="g-4 flex-wrap">
              {feedbacks.length > 0 &&
                displayedFeedbacks.map((item) => (
                  <Col className="div-width-card-feedback" key={item.id}>
                    {item.User && (
                      <>
                        {/* {console.log("User Image URL:", item.User.image)} */}
                        <Card
                          style={{
                            // width: "400px",
                            minWidth: "300px",
                            // minHeight: "600px",
                            maxHeight: "200px",
                            marginLeft: "-10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "10px",
                            paddingTop: "10px",
                            overflowY:
                              item.content && item.content.length > 160
                                ? "auto"
                                : "hidden",
                          }}
                        >
                          <div
                            style={{
                              borderBottom: "1px solid blue",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                              padding: "10px",
                            }}
                          >
                            <div>
                              <img
                                alt=""
                                src={
                                  item.User.image ||
                                  "https://res.cloudinary.com/dxg6ijfbf/image/upload/v1704389759/designs/j4ohhmghrsx0wmx5pdqh.jpg"
                                }
                                className="fully-rounded"
                                style={{
                                  height: "60px",
                                  width: "60px",
                                  borderRadius: "50%",
                                  alignSelf: "center",
                                  margin: "10px",
                                }}
                              />
                            </div>
                            <div>
                              <h5>
                                {item.User && item.User.username
                                  ? item.User.username
                                  : "uknownuser"}
                              </h5>
                            </div>
                          </div>
                          <Card.Body>
                            <Card.Text
                              style={{
                                paddingBottom: "60px",
                              }}
                            >
                              {item.content.length > 300
                                ? `${item.content.substring(0, 300)}`
                                : item.content}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </>
                    )}
                  </Col>
                ))}
            </Row>

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
