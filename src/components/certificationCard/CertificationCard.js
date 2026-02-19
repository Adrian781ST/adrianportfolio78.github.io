import React, { useState } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;
  const [showModal, setShowModal] = useState(false);

  const handleOpenCert = () => {
    if (certificate.pdf_link) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const styles = style({
    boxShadow: `0px 2px 5px ${certificate.color_code}`,
    border: `1px solid ${certificate.color_code}`,
    ":hover": {
      boxShadow: `0 5px 15px ${certificate.color_code}`,
    },
  });

  return (
    <>
      <Fade bottom duration={2000} distance="20px">
        <div
          className="cert-card"
          {...styles}
          onClick={handleOpenCert}
          style={{ cursor: certificate.pdf_link ? "pointer" : "default" }}
        >
          <div className="content">
            <div className="content-overlay"></div>
            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={
                  certificate.logo_path.startsWith("http")
                    ? certificate.logo_path
                    : require(`../../assests/images/${certificate.logo_path}`)
                }
                alt={certificate.alt_name}
              />
            </div>
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
          </div>
        </div>
      </Fade>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{certificate.title}</h2>
              <button className="modal-close" onClick={handleCloseModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src={certificate.pdf_link + "#toolbar=0&navpanes=0&scrollbar=0"}
                title={certificate.title}
                style={{ width: "100%", height: "100%", border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CertificationCard;
