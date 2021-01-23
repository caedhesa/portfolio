import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Container = styled.div`
    overflow: hidden;
    width: fit-content;
    height: auto;
    position: relative;
`

export const IntroContainer = styled(motion.div)`
    width: 100%;
    height: 5px;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    background-color: ${props => props.theme.colors.linkBtnColor};
    z-index: 30;
`