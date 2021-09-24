import React, { useState } from "react";
import "./styles/Courses.css";
import VideoPlayer from "../components/VideoPlayer";
import CssCard from "./Cards";

function Courses({ cssData, htmlData, jsData, mongoData, ejsData }) {
  const cards = [
    {
      title: "CSS",
      data: cssData,
    },
    {
      title: "HTML",
      data: htmlData,
    },
    {
      title: "JAVASCRIPT",
      data: jsData,
    },
    {
      title: "MONGO DB",
      data: mongoData,
    },
    {
      title: "EXPRESS JS",
      data: ejsData,
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cardData, setCardData] = useState(null);

  const handleClick = (card) => {
    cards.map((id) => {
      if (id.title === card.title) {
        setCardData(id.data);
        console.log(id);
      }
    });
  };

  return (
    <div>
      <div className="courses">
        <div className="courses-container">
          <div className="courses-wrapper">
            <div className="courses-image">
              <img src="./assets/images/e-learning-abstract-1.png" />
            </div>
            <div className="courses-header">
              <h1>COURSES</h1>
            </div>
            <div className="courses-description">
              <p>
                Select from a wide range of courses in different domains and put
                yourself on the map
              </p>
            </div>
            <div className="courses-new">
              <p>
                Courses available in languages like CSS, HTML, JavaScript,
                MongoDb. Learn Full Stack Web Development Now.
              </p>
            </div>
            <div className="courses-abstract">
              <img src="./assets/images/courses_abstract.png" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="video-lectures-heading">VIDEO LECTURES</h1>
      <div className="language-courses">
        {cards.map((card) => {
          return (
            <div>
              <Card
                card={card}
                handleOpen={handleOpen}
                open={open}
                handleClose={handleClose}
                handleClick={handleClick}
              />
            </div>
          );
        })}
      </div>
      {cardData ? <CssCard data={cardData} setCardData={setCardData} /> : null}
    </div>
  );
}

function Card({ card, handleOpen, open, handleClose, handleClick }) {
  return (
    <>
      <div className="courses-card">
        <button
          onClick={() => handleClick(card)}
          className="courses-card-container"
        >
          <div className="courses-card-wrapper">
            <div className={`courses-card-design ${card.title}`}></div>
            <div className="courses-card-title">
              <h1>{card.title}</h1>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default Courses;
