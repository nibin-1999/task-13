import React from 'react'
import "../../App.css"
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

function SlideBar() {
    return (
        <>
            <SlideContainerItems>

                <Item  to="/menu">
                    <SlideContent>
                        <ContentImage src={require("../../Assets/Menu.svg").default} alt="Content-image" />
                    </SlideContent>
                </Item> 

                <Item to="/car">
                    <SlideContent>
                        <ContentImage src={require("../../Assets/Car.svg").default} alt="Content-image" />
                    </SlideContent>
                </Item> 

               
                <Item  to="/calender">
                    <SlideContent>
                        <ContentImage src={require("../../Assets/Calender.svg").default} alt="Content-image" />
                    </SlideContent>
                </Item> 

                <Item to="/save">
                    <SlideContent>
                        <ContentImage src={require("../../Assets/Save.svg").default} alt="Content-image" />
                    </SlideContent>
                </Item> 

                <Item to="/message">
                    <SlideContent>
                        <ContentImage src={require("../../Assets/Message.svg").default} alt="Content-image" />
                    </SlideContent>
                </Item> 

            </SlideContainerItems>
        </>
    );
}


const SlideContainerItems = styled.ul`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    background: #fff;
    height: 100%;
    padding: 0 15px;
`
const SlideContent = styled.li`
   width: 30px;
   margin-bottom: 50px;
    && :hover {
            background: #fce9e1;
            border-radius: 20px;
            cursor: pointer;
        }
`
const ContentImage = styled.img`
    display: block;
    width: 100%;
    padding: 20px;
`
const Item = styled(NavLink)`
    width: 70px;
`

export default SlideBar;
