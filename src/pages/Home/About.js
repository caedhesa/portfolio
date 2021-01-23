import React from 'react'
import TagCloud from '../../components/TagCloud'
import { Container, Wrapper, Title, Text, Highlight, ALink, TextWrapper } from './aboutElements'

function About() {
    return (
        <>
            <Container  id='about'>
                <Wrapper>
                    <TextWrapper>
                        <Title>
                            <Highlight>Hi</Highlight>
                        </Title>
                        <Text>I'm Sergio, a 23 years old, Front-End Developer, based in Spain.</Text>
                        <Text>Coming from a sales and marketing background, in October 2017 I decided it was time for a change and I left my job. I've been studying Front-End Development full time ever since and working as freelacer.</Text>
                        <Text>I've took a lot of online courses like: <ALink href="https://www.codecademy.com/">CodeCademy Web Development Career Path</ALink>, <ALink href="https://ui.dev/">React, Router, Hooks and Redux at UI.dev</ALink>, and several <ALink href="https://www.freecodecamp.org/">freeCodeCademy certifications</ALink>.</Text>
                        <Text>I'm hard working, super curious, passionate, commited, and also a fast learner.</Text>
                    </TextWrapper>
                    
                </Wrapper>
                <Wrapper>
                    <TagCloud />
                </Wrapper>
            </Container>
        </>
    )
}

export default About
