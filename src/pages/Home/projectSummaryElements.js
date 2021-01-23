import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 94%;
    margin-left: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const ProjectContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    @media (max-width: 768px) {
        height: auto;
    }
`


export const ProjectWrapper = styled(motion.div)`
    width: 60%;
    height: 700px;
    margin: 100px auto;
    position: relative;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 90%;
        height: 500px;
    }
`
export const HoveringWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
`

export const ImageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`
export const ImageOpacity = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.backgroundColor};
    opacity: 0.4;
    z-index: 2;
    @media (max-width: 768px) {
        opacity: 0.7;
    }
`

export const HoveringBackground = styled(motion.div)`
    position: absolute;
    width: 0;
    height: 100%;
    opacity: 0.9;
    background-color: ${props => props.theme.colors.projectBackground};
    z-index: 3;
`

export const Image = styled.img`
    object-fit: cover;
    object-position: 0 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const InfoWrapper = styled(motion.div)`
    z-index: 10;
    position: absolute;
    left: 80px;
    bottom: 60px;
    padding-right: 80px;
    @media (max-width: 768px) {
        left: 30px;
        bottom: 40px;
        padding-right: 30px;
    }
`

export const ProjectTitle = styled.h3`
    font-size: 40px;
    margin-bottom: 20px;
    z-index: 10;
    color: ${props => props.theme.colors.textColor};
    @media (max-width: 768px) {
        font-size: 22px;
    }
`
export const ProjectDescription = styled.p`
    margin-bottom: 20px;
    z-index: 10;
    color: ${props => props.theme.colors.textColor};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`
export const ProjectLink = styled(Link)`
    z-index: 10;
    background-color: ${props => props.hovering === 1 ? props.theme.colors.textColor : props.theme.colors.linkBtnColor};
    padding: 16px 32px;
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    color: ${props => props.theme.colors.linkTextColor};
    @media (max-width: 768px) {
        padding: 12px 24px;
        font-size: 16px;
    }
`

export const ProjectNumber = styled(motion.p)`
    font-size: 70px;
    font-weight: 500;
    color: ${props => props.theme.colors.textColor};
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 0;
    z-index: 10;
`