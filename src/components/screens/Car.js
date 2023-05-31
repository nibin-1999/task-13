import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Car = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const galleryImages = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
    ];

    return (
        <MainContainer>
            <div>
                <Helmet>
                    <title>Car | My Cambervan</title>
                </Helmet>
            </div>

            <LeftContainer>
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
                        <RightGalleryItem
                            onClick={() => handleImageClick("image1.jpg")}>
                            <SubItem
                                src={require("../../Assets/camping-with-caravan-illustration_52683-46615 1.jpg")}
                                alt="image"
                            />
                        </RightGalleryItem>
                    </RightGallery>
                    {isOpen && (
                        <PopupGallery>
                            {galleryImages.map((image, index) => (
                                <Img
                                    key={index}
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                />
                            ))}
                            <CloseButton onClick={handleClose}>
                                Close
                            </CloseButton>
                        </PopupGallery>
                    )}
                </GalleryContainer>

                <ContentContainer>
                    <LeftContentBox>
                        <LeftTopContent>
                            <Heading1>Snail the Bigger Campervan</Heading1>
                            <ParagraphContainer>
                                <StarContainer>
                                    <StarImage
                                        src={
                                            require("../../Assets/Star.svg")
                                                .default
                                        }
                                        alt="image"
                                    />
                                    <Span>4.8</Span>
                                    available in
                                    <Spot>all location</Spot>
                                    except genuk
                                </StarContainer>
                                <Paragraph>
                                    All of our campervans for rent are
                                    fully-equiped custom-built, and hand-painted
                                    they, re perfect for long weekend
                                    getaways,cross country bucke-list road
                                    trips, and parks tours.
                                </Paragraph>
                            </ParagraphContainer>
                        </LeftTopContent>

                        <LeftBottomContent>
                            <Heading2>Whats's Include</Heading2>
                            <BottomContainer>
                                <BottomLeftContainer>
                                    <BottomContent>
                                        <ContentImage
                                            src={
                                                require("../../Assets/Queen-Bed.svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                        <ContentHeading>
                                            Queen bed fit out
                                        </ContentHeading>
                                    </BottomContent>
                                    <BottomContent>
                                        <ContentImage
                                            src={
                                                require("../../Assets/Kitchen.svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                        <ContentHeading>
                                            Guest house
                                        </ContentHeading>
                                    </BottomContent>
                                    <BottomContent>
                                        <ContentImage
                                            src={
                                                require("../../Assets/Battery.svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                        <ContentHeading>
                                            Charging facility
                                        </ContentHeading>
                                    </BottomContent>
                                </BottomLeftContainer>
                                <BottomRightContainer>
                                    <BottomContent>
                                        <ContentImage
                                            src={
                                                require("../../Assets/Room.svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                        <ContentHeading>
                                            Room single bed
                                        </ContentHeading>
                                    </BottomContent>
                                    <BottomContent>
                                        <ContentImage
                                            src={
                                                require("../../Assets/Plus.svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                        <ContentHeading>
                                            Additional requirements
                                        </ContentHeading>
                                    </BottomContent>
                                    <BottomContent>
                                        <ContentImage
                                            src={
                                                require("../../Assets/Info.svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                        <ContentHeading>
                                            Information
                                        </ContentHeading>
                                    </BottomContent>
                                </BottomRightContainer>
                            </BottomContainer>
                        </LeftBottomContent>
                    </LeftContentBox>

                    <RightContentBox>
                        <RightTopContent>
                            <OwnerHeading>Owner</OwnerHeading>
                            <OwnerInfo>
                                <OwnerLeftInfo>
                                    <OwnerImageContainer>
                                        <OwnerImage
                                            src={require("../../Assets/unsplash_IF9TK5Uy-KI.jpg")}
                                            alt="image"
                                        />
                                    </OwnerImageContainer>
                                    <OwnerDetails>
                                        <OwnerName>Charlie Septimus</OwnerName>
                                        <OwnerId>@charlieseptimusvan</OwnerId>
                                    </OwnerDetails>
                                </OwnerLeftInfo>
                                <OwnerRightInfo>
                                    <ContactImageContainer>
                                        <MessageIcone
                                            src={
                                                require("../../Assets/Message-fill.svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                        <CallIcone
                                            src={
                                                require("../../Assets/Call.svg")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                    </ContactImageContainer>
                                </OwnerRightInfo>
                            </OwnerInfo>
                        </RightTopContent>
                        <RightBottomContent>
                            <InsurenceHeading>
                                Insurence Options
                            </InsurenceHeading>
                            <Insurencedetails>
                                <NoInsurence>
                                    <CheckList></CheckList>
                                    <Claim>
                                        <InsurenceHeading1>
                                            No Insurence
                                        </InsurenceHeading1>
                                        <InsurenceHeading2>
                                            No insurence selected
                                        </InsurenceHeading2>
                                    </Claim>
                                    <Amount>
                                        <Price>$0.00</Price>
                                        <PriceDay>$14/day</PriceDay>
                                    </Amount>
                                </NoInsurence>
                                <CollisonProtection>
                                    <CheckList></CheckList>
                                    <Claim>
                                        <InsurenceHeading1>
                                            Collition Protection
                                        </InsurenceHeading1>
                                        <InsurenceHeading2>
                                            Collition protection on vehicle only
                                        </InsurenceHeading2>
                                    </Claim>
                                    <Amount>
                                        <Price>$0.00</Price>
                                        <PriceDay>$14/day</PriceDay>
                                    </Amount>
                                </CollisonProtection>
                                <ThirdParty>
                                    <CheckList></CheckList>
                                    <Claim>
                                        <InsurenceHeading1>
                                            Third Party
                                        </InsurenceHeading1>
                                        <InsurenceHeading2>
                                            3rd party liability insurence only
                                        </InsurenceHeading2>
                                    </Claim>
                                    <Amount>
                                        <Price>$0.00</Price>
                                        <PriceDay>$14/day</PriceDay>
                                    </Amount>
                                </ThirdParty>
                            </Insurencedetails>
                        </RightBottomContent>
                    </RightContentBox>
                </ContentContainer>
            </LeftContainer>

            <RightContiner>
                <RightTopContainer>
                    <RentHeading>Rent Detail</RentHeading>

                    <PickUpContainer>
                        <PickUpHead>Pick Up</PickUpHead>
                        <PickUpContent>
                            <SampaContent>Sampangan</SampaContent>
                            <SanpaDate>29/11/2021-07:00AM</SanpaDate>
                        </PickUpContent>
                    </PickUpContainer>

                    <DropContainer>
                        <DropHead>Drop Off</DropHead>
                        <DropContent>
                            <SumatraContent>Sumatra</SumatraContent>
                            <SumatraDate>1/12/2021 09:00AM</SumatraDate>
                        </DropContent>
                    </DropContainer>

                    <DailyContainer>
                        <DailyHead>Daily Rate</DailyHead>
                        <DailyContentContainer>
                            <DailyContent>3 days @ $33.00</DailyContent>
                            <DailyTotal>$99.00</DailyTotal>
                        </DailyContentContainer>
                    </DailyContainer>
                    <RentContainer>
                        <RentContent>Estimated Millage Charge</RentContent>
                        <RentRate>$120.00</RentRate>
                    </RentContainer>
                    <RentContainer>
                        <RentContent>No Worries on the vehicle</RentContent>
                        <RentRate>$52.00</RentRate>
                    </RentContainer>
                    <RentContainer>
                        <RentContent>Sales Tax</RentContent>
                        <RentRate>$10.00</RentRate>
                    </RentContainer>
                    <TotalContainer>
                        <TotalRent>Total</TotalRent>
                        <TotalRate>$151.00</TotalRate>
                    </TotalContainer>
                    <RentButton>Rent Now</RentButton>
                </RightTopContainer>

                <RightBottomContainer>
                    <MoreContainer>
                        <MoreHead>More Campervan</MoreHead>
                        <MoreView>View more</MoreView>
                    </MoreContainer>
                    <MoreImageContainer>
                        <MoreImage
                            src={require("../../Assets/camping-with-caravan-illustration_52683-46615 2.jpg")}
                            alt="image"
                        />
                    </MoreImageContainer>
                </RightBottomContainer>
            </RightContiner>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    width: 100%;
    background: #f6f6f6;
    height: calc(100vh - 100px);
    padding: 20px 0 0 0;
    display: flex;
    justify-content: flex-start;
`;

const LeftContainer = styled.div`
    width: 60%;
    background: #fff;
    padding: 20px;
    border-radius: 40px;
    margin: 0 30px;
`;

const GalleryContainer = styled.div`
    cursor: pointer;
    display: flex;
    width: 100%;
`;
const LeftGAllery = styled.div`
    margin-right: 20px;
    width: 60%;
`;

const LeftGalleryItem = styled.div`
    width: 80%;
`;

const MainItem = styled.img`
    display: block;
    width: 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

const RightGallery = styled.div`
    width: 20%;
`;

const RightGalleryItem = styled.div`
    width: 20%;
    margin-top: 13px;
    width: 230px;
`;

const SubItem = styled.img`
    display: block;
    width: 100%;
    border-radius: 40px;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftContentBox = styled.div`
    width: 50%;
`;

const LeftTopContent = styled.div`
    width: 100%;
`;

const Heading1 = styled.h1`
    font-size: 25px;
    margin: 5px;
`;

const ParagraphContainer = styled.div`
    width: 100%;
`;

const StarContainer = styled.div`
    width: 100%;
    color: #a8adb4;
    display: flex;
    align-items: center;
`;

const StarImage = styled.img`
    display: block;
    width: 30px;
    margin-right: 10px;
`;

const Span = styled.span`
    margin-right: 10px;
    font-size: 21px;
    font-weight: 700;
    color: #2e355d;
`;

const Spot = styled.span`
    font-size: 15px;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 700;
    color: #2e355d;
`;

const Paragraph = styled.p`
    margin-top: 5px;
    color: #a8adb4;
    width: 550px;
`;

const LeftBottomContent = styled.div`
    width: 100%;
`;

const Heading2 = styled.h2`
    font-size: 20px;
    font-weight: 700;
`;

const BottomContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

const BottomLeftContainer = styled.div`
    width: 50%;
`;

const BottomRightContainer = styled.div`
    width: 50%;
`;
const BottomContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;

const ContentImage = styled.img`
    margin-right: 20px;
`;

const ContentHeading = styled.h4`
    width: 700px;
    margin: 15px 0;
`;

const RightContentBox = styled.div`
    width: 50%;
`;

const RightTopContent = styled.div`
    width: 100%;
`;

const OwnerHeading = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #2e355d;
    margin: 10px 0;
`;

const OwnerInfo = styled.div`
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const OwnerLeftInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
`;

const OwnerImageContainer = styled.div`
    width: 70px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 20px;
    margin-top: 20px;
`;

const OwnerImage = styled.img`
    width: 100%;
    display: block;
`;

const OwnerDetails = styled.div`
    width: 100%;
`;

const OwnerName = styled.h2`
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0 0 0;
`;
const OwnerId = styled.span`
    font-size: 16px;
    color: #a8adb4;
`;

const OwnerRightInfo = styled.div`
    width: 30%;
`;

const ContactImageContainer = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    && :hover {
        background: #fce9e1;
        border-radius: 20px;
        cursor: pointer;
    }
`;
const MessageIcone = styled.img`
    width: 100%;
    display: block;
    padding: 10px 20px;
`;

const CallIcone = styled.img`
    width: 100%;
    display: block;
    padding: 10px 20px;
`;

const RightBottomContent = styled.div``;

const InsurenceHeading = styled.h2``;

const Insurencedetails = styled.div``;

const NoInsurence = styled.div``;

const CheckList = styled.button``;

const Claim = styled.div``;

const InsurenceHeading1 = styled.h2``;

const InsurenceHeading2 = styled.span``;

const Amount = styled.h4``;

const Price = styled.span``;

const PriceDay = styled.span``;

const CollisonProtection = styled.div``;

const ThirdParty = styled.div``;

const RightContiner = styled.div`
    width: 25%;
`;

const RightTopContainer = styled.div`
    background: #fff;
    padding: 20px 30px;
    border-radius: 40px;
`;

const RentHeading = styled.h1`
    font-size: 20px;
    width: 100px;
    background: rgb(168, 173, 180);
    padding: 12px;
    margin: 0px 38%;
    border-radius: 40px;
    margin-bottom: 20px;
`;

const PickUpContainer = styled.div`
    width: 100%;
    margin: 0;
`;

const PickUpHead = styled.h2`
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 5px 0;
`;

const PickUpContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 10px 0;
`;

const SampaContent = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #a8adb4;
    margin: 0;
`;

const SanpaDate = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #a8adb4;
    margin: 0;
`;

const DropContainer = styled.div`
    width: 100%;
    margin: 0;
`;

const DropHead = styled.h2`
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 5px 0;
`;

const DropContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 10px 0;
`;

const SumatraContent = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #a8adb4;
    margin: 0;
`;

const SumatraDate = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #a8adb4;
    margin: 0;
`;

const DailyContainer = styled.div`
    width: 100%;
    border-bottom: 2px solid #a7acb7;
`;

const DailyHead = styled.h2`
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 5px 0;
`;

const DailyContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DailyContent = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-top: 5px;
`;

const DailyTotal = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin: 0;
`;

const RentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RentContent = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #a8adb4;
    margin: 8px 0;
`;

const RentRate = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #a8adb4;
    margin: 0;
`;

const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

const TotalRent = styled.h1`
    font-size: 25px;
    font-weight: 600;
`;

const TotalRate = styled.h1`
    font-size: 23px;
    font-weight: 600;
    color: #a7acb7;
`;

const RentButton = styled.button`
    font-size: 20px;
    font-weight: 500;
    width: 410px;
    color: #fff;
    background: rgb(253, 145, 114);
    padding: 12px;
    border-radius: 21px;
`;

const RightBottomContainer = styled.div`
    width: 100%;
`;

const MoreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
`;

const MoreHead = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #2e355d;
`;

const MoreView = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #a8adb4;
`;

const MoreImageContainer = styled.div`
    width: 100%;
`;

const MoreImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 20px;
`;

const PopupGallery = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 900px;
`;

const Img = styled.img`
    display: block;
`;

const CloseButton = styled.button`
    /* Add your desired styles for the close button here */
`;

export default Car;
