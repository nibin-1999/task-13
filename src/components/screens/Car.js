import { Helmet } from "react-helmet";
import styled from "styled-components";
import PopGallery from "./PopGallery";

function Car() {

    return (
        <MainContainer>
            <div>
                <Helmet>
                    <title>Car | My Cambervan</title>
                </Helmet>
            </div>

            <LeftContainer>
                <PopGallery />
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
                                        <ContentImageContainer>
                                            <ContentImage
                                                src={
                                                    require("../../Assets/Queen-Bed.svg")
                                                        .default
                                                }
                                                alt="image"
                                            />
                                        </ContentImageContainer>
                                        <ContentHeading>
                                            Queen bed fit out
                                        </ContentHeading>
                                    </BottomContent>
                                    <BottomContent>
                                        <ContentImageContainer>
                                            <ContentImage
                                                src={
                                                    require("../../Assets/Kitchen.svg")
                                                        .default
                                                }
                                                alt="image"
                                            />
                                        </ContentImageContainer>
                                        <ContentHeading>
                                            Guest house
                                        </ContentHeading>
                                    </BottomContent>
                                    <BottomContent>
                                        <ContentImageContainer>
                                            <ContentImage
                                                src={
                                                    require("../../Assets/Battery.svg")
                                                        .default
                                                }
                                                alt="image"
                                            />
                                        </ContentImageContainer>
                                        <ContentHeading>
                                            Charging facility
                                        </ContentHeading>
                                    </BottomContent>
                                </BottomLeftContainer>
                                <BottomRightContainer>
                                    <BottomContent>
                                        <ContentImageContainer>
                                            <ContentImage
                                                src={
                                                    require("../../Assets/Room.svg")
                                                        .default
                                                }
                                                alt="image"
                                            />
                                        </ContentImageContainer>
                                        <ContentHeading>
                                            Room single bed
                                        </ContentHeading>
                                    </BottomContent>
                                    <BottomContent>
                                        <ContentImageContainer>
                                            <ContentImage
                                                src={
                                                    require("../../Assets/Plus.svg")
                                                        .default
                                                }
                                                alt="image"
                                            />
                                        </ContentImageContainer>
                                        <ContentHeading>
                                            Additional requirements
                                        </ContentHeading>
                                    </BottomContent>
                                    <BottomContent>
                                        <ContentImageContainer>
                                            <ContentImage
                                                src={
                                                    require("../../Assets/Info.svg")
                                                        .default
                                                }
                                                alt="image"
                                            />
                                        </ContentImageContainer>
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
                                        <MessageImageContainer>
                                            <MessageIcone
                                                src={
                                                    require("../../Assets/Message-fill.svg")
                                                        .default
                                                }
                                                alt="image"
                                            />
                                        </MessageImageContainer>

                                        <CallImageContainer>
                                            <CallIcone
                                                src={
                                                    require("../../Assets/Call.svg")
                                                        .default
                                                }
                                                alt="image"
                                            />
                                        </CallImageContainer>
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
                                    <Amount1>
                                        <AmountRate1>
                                            <Price>$0.00</Price>
                                        </AmountRate1>
                                        <AmountRate2>
                                            <PriceDay>$14/day</PriceDay>
                                        </AmountRate2>
                                    </Amount1>
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
                                    <Amount2>
                                        <AmountRate1>
                                            <Price>$0.00</Price>
                                        </AmountRate1>
                                        <AmountRate2>
                                            <PriceDay>$14/day</PriceDay>
                                        </AmountRate2>
                                    </Amount2>
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
                                    <Amount3>
                                        <AmountRate1>
                                            <Price>$0.00</Price>
                                        </AmountRate1>
                                        <AmountRate2>
                                            <PriceDay>$14/day</PriceDay>
                                        </AmountRate2>
                                    </Amount3>
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
}

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
    padding: 25px;
    border-radius: 40px;
    margin: 0 30px;
`;


const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftContentBox = styled.div`
    width: 60%;
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
    cursor: pointer;
`;

const Spot = styled.span`
    font-size: 15px;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 700;
    color: #2e355d;
    cursor: pointer;
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
    width: 64%;
`;
const BottomContent = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-start;
`;

const ContentImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    && :hover {
        background: #fce9e1;
        border-radius: 15px;
        cursor: pointer;
    }
`;

const ContentImage = styled.img`
    margin-right: 20px;
    padding: 10px;
`;

const ContentHeading = styled.h4`
    width: 700px;
    margin: 15px 0;
`;

const RightContentBox = styled.div`
    width: 340%;
`;

const RightTopContent = styled.div`
    width: 100%;
    margin-bottom: 30px;
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
    cursor: pointer;
`;

const OwnerDetails = styled.div`
    width: 100%;
`;

const OwnerName = styled.h2`
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0 0 0;
    cursor: pointer;
`;
const OwnerId = styled.span`
    font-size: 16px;
    color: #a8adb4;
    cursor: pointer;
`;

const OwnerRightInfo = styled.div`
    width: 30%;
`;

const ContactImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const MessageImageContainer = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    margin-right: 15px;
    && :hover {
        background: #fce9e1;
        border-radius: 20px;
        cursor: pointer;
    }
`;

const MessageIcone = styled.img`
    width: 100%;
    display: block;
    padding: 20px;
`;

const CallImageContainer = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    && :hover {
        background: #d7ebdf;
        border-radius: 20px;
        cursor: pointer;
    }
`;

const CallIcone = styled.img`
    width: 100%;
    display: block;
    padding: 20px;
`;

const RightBottomContent = styled.div`
    width: 100%;
    margin-top: 30px;
`;

const InsurenceHeading = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
`;

const Insurencedetails = styled.div`
    width: 100%;
`;

const NoInsurence = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const CollisonProtection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ThirdParty = styled.div`
    display: flex;
    align-items: center;
`;

const CheckList = styled.button`
    height: 20px;
    width: 20px;
    border-radius: 20px;
    border: 1px solid #2e355d;
    cursor: pointer;
    top: 0px;
`;

const Claim = styled.div`
    margin-left: 15px;
`;

const InsurenceHeading1 = styled.h3`
    margin: 0 70px 5px 0;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    color: #2e355d;
`;

const InsurenceHeading2 = styled.h4`
    font-size: 15px;
    font-weight: 600;
    color: #a8adb4;
`;

const Amount1 = styled.h4`
    margin-left: 30px;
    margin-left: 110px;
`;

const Amount2 = styled.h4`
    margin-left: 59px;
`;
const Amount3 = styled.h4`
    margin-left: 72px;
`;

const AmountRate1 = styled.div``;

const Price = styled.span`
    margin-left: 7px;
`;

const AmountRate2 = styled.div``;

const PriceDay = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #a8adb4;
`;

const RightContiner = styled.div`
    width: 25%;
`;

const RightTopContainer = styled.div`
    background: #fff;
    padding: 20px 30px;
    border-radius: 40px;
    height: 55%;
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
    margin-bottom: 20px;
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
    margin-top: 10px;
`;

const RentContent = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #a8adb4;
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
    margin: 10px 0;
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
    cursor: pointer;
`;

const RightBottomContainer = styled.div`
    width: 100%;
`;

const MoreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin: 15px 0;
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

export default Car;
