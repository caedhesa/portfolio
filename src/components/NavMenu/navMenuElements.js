import styled from 'styled-components'
import { motion } from 'framer-motion'
import { RiMoonFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

export const Container = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 22;
    position: fixed;
    background-color: ${props => props.theme.colors.backgroundColor};
`

export const ItemsWrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MenuLink = styled(NavLink)`
    margin: 20px;
    text-decoration: none;
    color: ${props => props.theme.colors.navLinksColor};
    font-size: 22px;
    font-weight: 500;
    cursor: pointer;
    :hover {
        color: #00e0f9;
    }
`

export const SocialLinksBox = styled.div`
    display: flex;
`

export const SocialLink = styled.a`
    margin-right: 10px;
`



export const ToggleThemeBox = styled.div`
    position: relative;
`

export const ToggleTheme = styled(RiMoonFill)`
    color: #C8C9C9;
`

export const ThemeButton = styled.div`
    cursor: pointer;
    padding: 8px;
    :hover {
        background-color: ${props => props.theme.colors.toggleBackgroundHover};
    }
`