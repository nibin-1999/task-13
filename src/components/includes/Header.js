import React from 'react'
import styled from 'styled-components';

function Header() {
	return (
		<HeaderContainer>
			<LeftBox>
				<LogoContainer>
					<LogoImage src={require("../../Assets/My Cambervan.png")} alt="logo_image" />
				</LogoContainer>
				<SearchContainer>
					<Input type="text" placeholder="Search Cambervan" />
					<SearchImage src={require("../../Assets/Search.svg").default} alt="Search Icon" />
				</SearchContainer>
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
	width: 100%;
	display: flex;
	justify-content: space-between;
`
const LeftBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-left: 150px;
	align-items: center;
`
const LogoContainer = styled.div`
	width: 150px;
	margin-right: 45px;
`

const LogoImage = styled.img`
	margin-right: 50px; 
	display: block;
	width: 100%;
`
const SearchContainer = styled.div`
	margin-bottom: 40px;

`

const Input = styled.input`
	border: 1px solid #A7ACB7;
	background: #f6f6f6;
	width: 450px;
	border-radius: 10px;
    padding: 15px 40px;
`
const SearchImage = styled.img`
	position: relative;
    right: 60px;
    top: 28px;
    padding: 20px;
`
const RightBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 50px;
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
    cursor: pointer;
`
const ImageDetails = styled.div`
`
const UserName = styled.h3`
	font-size: 18px;
	color: #2E355D;
    cursor: pointer;
`
const UserId = styled.span`
	font-size: 16px;
	color: #A8ADB4;
    cursor: pointer;
`
const ArrowContainer = styled.div`
	width: 25px;
`
const ArrowImage = styled.img`
	width: 100%;
	position: relative;
	top: 15px;
    left: 5px;
    cursor: pointer;

`


export default Header;
