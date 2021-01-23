import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 94%;
    height: 100vh;
    margin-left: auto;
    overflow: hidden;
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
        padding-top: 100px;
    }
`

export const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

export const Box = styled.div`
    
`

export const ImageWrapper = styled(motion.div)`
    min-width: 250px;
    display: flex;
    justify-content: center;
`

export const Hello = styled(motion.h2)`
    text-align: left;
    color: ${props => props.theme.colors.textColor};
    font-size: 70px;
    max-width: 440px;
    @media (max-width: 768px) {
        font-size: 40px;
        align-self: flex-start;
    }
`

export const Text = styled(motion.div)`
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    color: ${props => props.theme.colors.pColor};
`

export const Image = styled.img`
    transform: rotate(12deg);
`