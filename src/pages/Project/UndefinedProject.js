import React from 'react'
import { Container, Wrapper, Title } from './projectViewElements'

function UndefinedProject({ handle }) {
    return(
        <Container notfound={true}>
        <Wrapper>
            <Title>Project {handle} not found</Title>
        </Wrapper>
        </Container>
    )
}

export default UndefinedProject
