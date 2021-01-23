import React from 'react'
import { AnimatedContainer } from './transitionContainerElements'

function TransitionContainer() {
    return (
        <>
            <AnimatedContainer style={{ width: '100%'}} animate={{ width: 0 }} transition={{ duration: 1 }}>

            </AnimatedContainer>
        </>
    )
}

export default TransitionContainer
