"use client";
import React from "react";
import { Modal, Carousel } from "react-bootstrap";
import MapComponent from "./MapComponent";

const ProductModal = ({ show, handleClose, data }) => {
  const images = data?.image || [];
  const [selectedImage, setSelectedImage] = React.useState(images[0] || "");
  const [carouselIndex, setCarouselIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      fullscreen={true}
      centered
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="custom-modal-content">
          <div className="row">
            {/* -- images --  */}
            <div className="col-md-6">
              <div className="desktop-view d-none d-md-block">
                <div className="main-image">
                  <img src={selectedImage} alt="Selected" className="img" />
                </div>
                <div className="image-tabs">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`img-thumbnail ${
                        selectedImage === image ? "selected" : ""
                      }`}
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              </div>
              <div className="mobile-view d-block d-md-none">
                <Carousel activeIndex={carouselIndex} onSelect={handleSelect}>
                  {images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
            {/* -- content --  */}
            <div className="col-md-6">
              <div className="content">
                <h4>{data?.title}</h4>
                <h4 className="mt-3">{data?.title}</h4>
                <p>{data?.description}</p>
                <div className="divider des-view"></div>
                <div className="row m-0 p-0 mt-3">
                  <div className="col-md-7 m-0 p-0">
                    <div className="row m-0 p-0">
                      <div className="col-md-3 col-6 m-0 p-0 des-view">
                        <h5>{data?.rate}</h5>
                        <span>{data?.rate_desc}</span>
                      </div>
                      <div className="col-md-5 col-6 m-0 mdl des-view">
                        <h5>
                          <img src="/images/plotSize.png" /> {data?.size}
                        </h5>
                        <span>{data?.size_desc}</span>
                      </div>
                      <div className="col-md-4 col-6 m-0 des-view">
                        <h5>
                          <img src="/images/area.png" /> {data?.area}
                        </h5>
                        <span>{data?.area_desc}</span>
                      </div>
                      <div className="divider mb-3"></div>
                      <div className="col-md-3 col-6 m-0 p-0 des-view">
                        <h6>{data?.unit}</h6>
                        <span>{data?.unit_desc}</span>
                      </div>
                      <div className="col-md-5 col-6 m-0 mdl des-view">
                        <h6>{data?.type}</h6>
                        <span>{data?.type_desc}</span>
                      </div>
                      <div className="col-md-4 col-6 m-0 des-view">
                        <h6>{data?.status}</h6>
                        <span>{data?.status_desc}</span>
                      </div>
                      <div className="divider-2 mr-2 des-view"></div>
                      <div className="col-6 m-0 p-0 mt-2 pb-2 pe-2 mob-res">
                        <img src="/images/rupee.png" />
                        <span>
                          {data?.rate} <br /> onwards {data?.rate_desc}
                        </span>
                      </div>
                      <div className="col-6 m-0 p-0 mt-2 pb-2 pe-2 mob-res">
                        <img src="/images/plotSize.png" />
                        <span>{data?.size_res}</span>
                      </div>
                      <div className="col-6 m-0 p-0 mt-2 pb-2 pe-2 mob-res">
                        <img src="/images/area.png" />
                        <span>{data?.area_res}</span>
                      </div>
                      <div className="col-6 m-0 p-0 mt-2 pb-2 pe-2 mob-res">
                        <img src="/images/Vector.png" />
                        <span>
                          {data?.unit} <br /> {data?.unit_desc}
                        </span>
                      </div>
                      <h4 className="m-0 p-0 mt-3 mb-2 amenities">
                        30+ Amenities
                      </h4>
                      <div className="res-btn">
                        <button>Know More</button>
                        <button className="active-btn">
                          Schedule Site Visit
                        </button>
                      </div>
                      <div className="col-6 m-0 p-0 my-1">
                        <p>
                          <img src="/images/Group1.png" /> {data?.liberary}
                        </p>
                      </div>
                      <div className="col-6 m-0 p-0 my-1">
                        <p>
                          <img src="/images/Group2.png" /> {data?.pet}
                        </p>
                      </div>
                      <div className="col-6 m-0 p-0 my-1">
                        <p>
                          <img src="/images/Group3.png" /> {data?.pool}
                        </p>
                      </div>
                      <div className="col-6 m-0 p-0 my-1">
                        <p>
                          <img src="/images/Group4.png" /> {data?.ampitheare}
                        </p>
                      </div>
                      <div className="col-6 m-0 p-0 my-1">
                        <p>
                          <img src="/images/Group5.png" /> {data?.tree}
                        </p>
                      </div>
                      <div className="col-6 m-0 p-0 my-1">
                        <p>
                          <img src="/images/Group6.png" /> {data?.jogging}
                        </p>
                      </div>
                      <div className="col-6 m-0 p-0 my-1">
                        <p>
                          <img src="/images/Group7.png" /> {data?.cycling}
                        </p>
                      </div>
                      <div className="col-6 m-0 p-0 my-1">
                        <p>
                          <img src="/images/Group8.png" /> {data?.basket}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 m-0 p-0 ps-1">
                    <div style={{ height: "340px", width: "100%" }}>
                      <MapComponent locations={data?.locations || []} />
                    </div>
                  </div>
                  <div className="col-12 m-0 p-0 mt-3 last-btn">
                    <button>Chat now</button>
                    <button>Call now</button>
                    <button className="active-btn">Schedule Site Visit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
