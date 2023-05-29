import React from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function NoMatching() {
    return (
        <div>
            <Helmet>
                <title>NoMatching | My Cambervan</title>
            </Helmet>
            <Heading>Error 404...</Heading>
            <SubHeading>Page Not Found...!!!</SubHeading>
        </div>
    );
}

const Heading = styled.h1``
const SubHeading = styled.h2``


export default NoMatching
