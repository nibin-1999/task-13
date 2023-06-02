import React, { useState } from "react";
import styled from "styled-components";

function PopGallery() {
    const [showGallery, setShowGallery] = useState(false);

    const handleGalleryClick = () => {
        setShowGallery(true);
    };

    const closeGallery = () => {
        setShowGallery(false);
    };

    return (
        <>
            <GalleryContainer>

                <LeftGAllery>
                    <LeftGalleryItem>
                        <MainItem
                            src={require("../../Assets/2102.i126.021 1.jpg")}
                            alt="image"
                        />
                    </LeftGalleryItem>
                </LeftGAllery>

                <RightGallery>

                    <RightGalleryItem>
                        <SubItem
                            src={require("../../Assets/camping-with-caravan-illustration-with-couple-campfire_23-2148657069 1.jpg")}
                            alt="image"
                        />
                    </RightGalleryItem>

                    <RightGalleryItem2 onClick={handleGalleryClick}>
                        <SubItem2
                            src={require("../../Assets/camping-with-caravan-illustration_52683-46615 2.png")}
                            alt="image"
                        />
                        <Paragraph>10+ Photos</Paragraph>
                    </RightGalleryItem2>

                </RightGallery>

            </GalleryContainer>

            {showGallery && (

                <GalleryPopUp>
                    {/* Gallery popup content goes here */}

                    <GalleryPopUpContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room12.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room9.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room1.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room2.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room3.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room4.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room11.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room8.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room6.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room5.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room7.png")}
                                alt="image"
                            />
                        </ImageContainer>

                        <ImageContainer>
                            <GalleryPopUpImage
                                src={require("../../Assets/Hotel/room10.png")}
                                alt="image"
                            />
                        </ImageContainer>

                    </GalleryPopUpContainer>

                    <CloseButton onClick={closeGallery}>Close</CloseButton>

                </GalleryPopUp>
            )}
        </>
    );
}


const GalleryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    
`;

const LeftGAllery = styled.div`
    width: 63%;
    margin-right: 75px;
`;

const LeftGalleryItem = styled.div`
    width: 106%;
`;

const MainItem = styled.img`
    width: 100%;
    display: block;
    border-radius: 50px;
`;

const RightGallery = styled.div`
    width: 25%;
`;

const RightGalleryItem = styled.div`
    width: 100%;
    margin: 0 15px 20px 0;
`;
const RightGalleryItem2 = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    
`;

const SubItem = styled.img`
    width: 100%;
    height: 250px;
    display: block;
    border-radius: 30px;
    @media all and (max-width: 1280px){
        width: 100%;
        height: 170px;
        display: block;
        border-radius: 30px;
    }
`;
const SubItem2 = styled.img`
    width: 270px;
    height: 235px;
    display: block;
    border-radius: 30px;
    @media all and (max-width: 1280px){
        width: 191px;
        height: 168px;
        display: block;
        border-radius: 30px;
    }
`;

const Paragraph = styled.p`
    top: 0;
    font-size: 20px;
    position: absolute;
    opacity: 0.4;
    border-radius: 30px;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    cursor: pointer;
`;

// Styled components for the gallery items...

const GalleryPopUp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #a7acb7;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GalleryPopUpContainer = styled.div`
    width: 60%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`;

const ImageContainer = styled.div`
    width: 20%;
    padding: 10px;
`;

const GalleryPopUpImage = styled.img`
    width: 100%;
    height: auto;
`;

const CloseButton = styled.button`
    position: absolute;
    bottom: 30px;
    right: 50%;
    padding: 15px 35px;
    background-color: rgb(253, 145, 114);
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    border: none;
    border-radius: 15px;
    font-size: 14px;
    cursor: pointer;
`;

export default PopGallery;
