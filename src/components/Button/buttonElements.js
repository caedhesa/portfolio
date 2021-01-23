import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const ExternalLink = styled.a`
    padding: 16px 32px;
    text-decoration: none;
    background-color: ${props => props.theme.colors.linkBtnColor};
    color: ${props => props.theme.colors.linkTextColor};
    font-weight: 500;
    display: inline-flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    position: ${props => props.buttonType === 'primary' ? 'relative' : 'static'};
    overflow: ${props => props.buttonType === 'primary' ? 'hidden' : 'visible'};
    @media (max-width: 768px) {
        padding: 12px 24px;
        font-size: 16px;
    }
`

export const LinkComponent = styled(Link)`
    padding: 16px 32px;
    text-decoration: none;
    background-color: ${props => props.theme.colors.linkBtnColor};
    color: ${props => props.theme.colors.linkTextColor};
    font-weight: 500;
    display: inline-flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    position: ${props => props.buttonType === 'primary' ? 'relative' : 'static'};
    overflow: ${props => props.buttonType === 'primary' ? 'hidden' : 'visible'};
    @media (max-width: 768px) {
        padding: 12px 24px;
        font-size: 16px;
    }
`

export const ButtonComponent = styled.button`
    padding: 16px 32px;
    text-decoration: none;
    background-color: ${props => props.theme.colors.linkBtnColor};
    color: ${props => props.theme.colors.linkTextColor};
    font-weight: 500;
    display: inline-flex;
    justify-content: center;
    cursor: pointer;
    outline: none;
    border: none;
    align-items: center;
    position: ${props => props.buttonType === 'primary' ? 'relative' : 'static'};
    overflow: ${props => props.buttonType === 'primary' ? 'hidden' : 'visible'};
    @media (max-width: 768px) {
        padding: 12px 24px;
        font-size: 16px;
    }
`

export const HoverBox = styled(motion.div)`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${props => props.theme.colors.hoverBtnColor};
`

export const LinkContent = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.linkTextColor}
`  