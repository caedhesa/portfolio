import styled from 'styled-components'
import {motion} from 'framer-motion'


export const HoverBox = styled(motion.div)`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${props => props.theme.colors.hoverBtnColor};
`

export const LinkBox = styled.a`
    display: inline-block;
    margin: 20px 0;
    background-color: ${props => props.theme.colors.linkBtnColor};
    padding: 16px 32px;
    max-width: 220px;
    min-width: 210px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    margin-right: 20px;
    position: relative;
    text-decoration: none;
    overflow: hidden;
`

export const LinkContent = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.linkTextColor}
`  