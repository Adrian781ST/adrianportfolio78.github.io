import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  const handleOpenWebsite = () => {
    if (degree.website_link) {
      window.open(degree.website_link, "_blank", "noopener,noreferrer");
    }
  };

  const style_img = style({
    width: "180px",
    height: "180px",
    borderRadius: " 50%",
    padding: "15px",
    border: `1px solid ${theme.accentColor}`,
    boxShadow: `0px 0px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
  });

  const card_body = style({
    borderBottom: `1px solid ${theme.accentColor}`,
    borderLeft: `1px solid ${theme.accentColor}`,
    borderRight: `1px solid ${theme.accentColor}`,
    borderRadius: "7px",
    width: "90%",
    margin: "20px 10px 10px 10px",
    boxShadow: `0px 1px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  return (
    <div className="degree-card">
      <Flip left duration={2000}>
        <div {...style_img}>
          <span
            className="iconify"
            data-icon="mdi:certificate"
            style={{
              fontSize: "70px",
              color: "#FFFFFF",
            }}
          ></span>
        </div>
      </Flip>
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence) => {
              return (
                <p
                  key={sentence}
                  className="content-list"
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}
            <button
              className="website-btn"
              onClick={handleOpenWebsite}
              style={{
                marginRight: "23px",
                textDecoration: "none",
                float: "right",
                backgroundColor: theme.accentColor,
              }}
            >
              WEBSITE
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
