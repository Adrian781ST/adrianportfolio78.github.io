import React, { useState } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import { Modal } from "react-bootstrap";

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;
  const [showModal, setShowModal] = useState(false);

  const styles = style({
    boxShadow: `0px 2px 5px ${certificate.color_code}`,
    border: `1px solid ${certificate.color_code}`,
    ":hover": {
      boxShadow: `0 5px 15px ${certificate.color_code}`,
    },
  });

  const handleOpenWebsite = () => {
    if (certificate.website_link) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card" {...styles}>
          <div className="content">
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assests/images/${certificate.logo_path}`)}
                  alt={certificate.alt_name}
                />
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
              dangerouslySetInnerHTML={{ __html: certificate.subtitle }}
            ></h3>
            {certificate.website_link && (
              <button className="website-btn" onClick={handleOpenWebsite}>
                WEBSITE
              </button>
            )}
          </div>
        </div>
      </Fade>

      {certificate.website_link && (
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          centered
          size="xl"
          className="fullscreen-modal"
        >
          <Modal.Header
            closeButton
            style={{ backgroundColor: "#000", color: "#fff" }}
          >
            <Modal.Title>{certificate.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: 0 }}>
            <iframe
              src={certificate.website_link}
              title={certificate.title}
              style={{ width: "100%", height: "70vh", border: "none" }}
              allowFullScreen
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default CertificationCard;
