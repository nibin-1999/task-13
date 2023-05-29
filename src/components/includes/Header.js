import React from 'react'
import styled from 'styled-components';

function Header() {
	return (
		<HeaderContainer>
			<LeftBox>
				<Heading>My Cambervan</Heading>
				<Input type="text" placeholder="Search Cambervan" />
      			<LogoImage src={require("../../Assets/Search.svg").default} alt="Search Icon" />
			</LeftBox>
			<RightBox>
				<ImageContainer>
					<UserImage src={require("../../Assets/unsplash_ILip77SbmOE.jpg")} alt="image" />
				</ImageContainer>
				<ImageDetails>
					<UserName>Aria zidaniro</UserName>
					<UserId>@danikuillustrator</UserId>
				</ImageDetails>
				<ArrowContainer>
					<ArrowImage src={require("../../Assets/Arrow.svg").default} />
				</ArrowContainer>
			</RightBox>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	background: #fff;
	height: 100px;
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const LeftBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-left: 150px;
	align-items: center;
`
const Heading = styled.h1`
	font-size: 25px;
	color: #2e355d;
	margin-right: 50px;
`
const Input = styled.input`
	border: 1px solid #A7ACB7;
	background: #f6f6f6;
	height: 40px;
	width: 300px;
	border-radius: 10px;
	padding: 0 10px;
`
const LogoImage = styled.img`
	position: relative;
	right: 40px;
`
const RightBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const ImageContainer = styled.div`
	width: 45px;
	height: 45px;
	overflow: hidden;
	border-radius: 50%;
	border: 2px solid #000;
	margin-right: 20px;
`
const UserImage = styled.img`
	width: 100%;
	display: block;
`
const ImageDetails = styled.div`
`
const UserName = styled.h3`
	font-size: 18px;
	color: #2E355D;
	line-height: 0.1em;
`
const UserId = styled.span`
	font-size: 16px;
	color: #A8ADB4;
	width: 50px;
`
const ArrowContainer = styled.div`
	width: 25px;
`
const ArrowImage = styled.img`
	width: 100%;
	position: relative;
	top: 23px;
    left: 7px;

`


export default Header;
