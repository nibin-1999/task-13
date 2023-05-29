import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function Car() {
    return (
        <MainContainer>
        <div>
            <Helmet>
                <title>Car | My Cambervan</title>
            </Helmet>

          

           
        </div>
        </MainContainer>
        
    )
}

export default Car;
const MainContainer=styled.div`
    width: 80%;

`

