import styled from 'styled-components'
import { MdNavigateNext } from 'react-icons/md'
import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 94%;
    margin-left: auto;
    height: ${props => props.notfound ? '100vh' : 'auto'};
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Wrapper = styled.div`
    width: 75%;
    margin: 0 auto;
    overflow: hidden;
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const WrapperHead = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60vh;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        align-items: flex-start;
        padding-top: 100px;
    }
`

export const BoxLeft = styled.div`
    text-align: left;
`

export const Title = styled(motion.h2)`
    font-size: 50px;
    font-weight: 600;
    color: ${props => props.theme.colors.textColor};
`

export const TextDescription = styled.p`
    font-size: 20px;
    line-height: 1.8;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.pColor};
`

export const BoxRight = styled.div`
    margin-bottom: 60px;
    min-width: 340px;
`

export const LightLine = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.navLinksColor};
    height: 1px;
    margin-bottom: 25px 0;
`

export const ListDescription = styled.p`
    text-align: left;
    color: ${props => props.theme.colors.pColor}
`

export const ProjectImage = styled.img`
    width: 100%;
`

export const LinksBox = styled.div`
    margin-top: 60px;
    display: flex;
    @media (max-width: 768px) {

        flex-direction: column;
    }
`

export const Icon = styled(MdNavigateNext)`
    color: ${props => props.theme.colors.linkTextColor}
`