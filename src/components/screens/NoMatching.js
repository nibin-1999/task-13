import React from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function NoMatching() {
    return (
        <MainContainer>
            <div>
                <Helmet>
                    <title>NoMatching | My Cambervan</title>
                </Helmet>
                <Heading>Error 404...</Heading>
                <SubHeading>Page Not Found...!!!</SubHeading>
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
const SubHeading = styled.h2`
    font-size: 30px;
    color: #2e355d;
    margin-left: 37%;
`


export default NoMatching

