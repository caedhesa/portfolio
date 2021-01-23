import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ThemeButton = styled(motion.div)`
    cursor: pointer;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        background-color: ${props => props.theme.colors.toggleBackgroundHover};
    }

`

export const ToggleWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
`
