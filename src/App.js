import Menu from "./components/screens/Menu";
import Car from "./components/screens/Car";
import Calender from "./components/screens/Calender";
import Save from "./components/screens/Save";
import Message from "./components/screens/Message";
import NoMatching from "./components/screens/NoMatching";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/includes/Header";
import SlideBar from "./components/includes/SlideBar";
import styled from "styled-components";



function App() {
	return (
    	<>
			<Header />
		    <MainContainer  className='bg'>
				<Router>
					<SlideBar />
					<Routes>
						<Route path="/" exact Component={Car}/>
						<Route path="/menu" exact Component={Menu}/>
						<Route path="/car" exact Component={Car}/>
						<Route path="/calender" exact Component={Calender}/>
						<Route path="/save" exact Component={Save}/>
						<Route path="/message" exact Component={Message}/>
						<Route path="/*" exact Component={NoMatching}/>
					</Routes>
				</Router>
			</MainContainer>
    	</>
	);
}

const MainContainer = styled.div`
width: 100%;
margin: 0 auto;
display:flex;
font-family: 'Poppins-Regular';
`

export default App;


                   