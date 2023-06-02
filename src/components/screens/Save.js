import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet'

function Save() {
    return (

        <MainContainer>

            <div>

                <Helmet>
                    <title>Save | My Cambervan</title>
                </Helmet>
                
                <Heading>COMING SOON...</Heading>

            </div>

        </MainContainer>

    )
}


const MainContainer = styled.div`
 width: 100%;

`

const Heading = styled.h1`
    font-size: 30px;
    color: #2e355d;
    margin-left: 40%;
    margin-top: 250px;
`
export default Save;
