import React, {useEffect} from 'react'
import useHover from '../../hooks/useHover'
import {useAnimation, AnimatePresence} from 'framer-motion'
import { Container, IntroContainer } from './hoverElementElements'


function HoverElement({children}) {
    const [attrs, hovering] = useHover()

    const hoverControls = useAnimation()

    useEffect(() => {
        if (hovering) {
            hoverControls.start('visible')
        }   else if (!hovering)  {
            hoverControls.start('hidden')
        }
    }, [hoverControls, hovering])


    return (
        <>
        <Container ref={attrs}>
        {children}
        <AnimatePresence>
            {hovering && (<IntroContainer
        key="modal"
        transition={{ ease: "easeOut", duration: 0.5 }}
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}></IntroContainer>)}
        </AnimatePresence>
        </Container>
        </>
    )
}

export default HoverElement
