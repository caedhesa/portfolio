import React from 'react'
import TransitionContainer from '../../components/TransitionContainer'
import { Container, Wrapper, Title } from '../Project/projectViewElements'

function NoMatchPage() {
    return (
        <>
            <TransitionContainer />
            <Container notfound={true}>
                <Wrapper>
                <Title>Nothing here</Title>

                </Wrapper>
            </Container>
        </>
    )
}

export default NoMatchPage
