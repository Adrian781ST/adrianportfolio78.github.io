import React, { useState } from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import { Modal } from "react-bootstrap";

export default function ProjectCard({ repo: project, theme }) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "1.5rem",
    cursor: "pointer",
    borderRadius: "5px",
    minHeight: "auto",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={project.name}
          onClick={handleCardClick}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {project.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {project.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={project.languages} />
          </div>
        </div>
      </Fade>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="xl"
        className="fullscreen-modal"
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: theme.projectCard, color: theme.text }}
        >
          <Modal.Title>{project.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: theme.projectCard, padding: 0 }}>
          <iframe
            src={project.url}
            title={project.name}
            style={{
              width: "100%",
              height: "calc(100vh - 80px)",
              border: "none",
            }}
            allow="fullscreen; clipboard-read; clipboard-write"
            allowFullScreen
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
