import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AnimatedContainer = styled(motion.div)`
    width: 0;
    height: 100vh;
    background-color: ${props => props.theme.colors.linkBtnColor};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 80;
`