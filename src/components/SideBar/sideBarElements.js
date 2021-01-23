import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IoLogoGithub, IoMdMail, IoLogoLinkedin } from 'react-icons/io'
import { HiMenuAlt1 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

export const Container = styled(motion.div)`
    width: 6%;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding-top: 20px;
    padding-bottom: 20px;
    position: fixed;
    text-align: center;
    z-index: 23;
    @media (max-width: 768px), (max-height: 740px) {
        width: 100%;
        height: 80px;
        flex-direction: row;
        align-items: center;
        padding: 0 20px;
    }
`

export const MenuBtn = styled(HiMenuAlt1)`
    color: ${props => props.theme.colors.textColor};
    cursor: pointer;
`

export const CloseBtn = styled(MdClose)`
    color: ${props => props.theme.colors.textColor};
    cursor: pointer;
`

export const SideBarMenu = styled.div`
    display: flex;
    @media (max-width: 768px), (max-height: 740px) {
        align-items: center;
        height: 60px;
    }
    @media (min-width: 768px) and (min-height: 740px) {
        display: none;
    } 
`

export const SideBarBox = styled.div`
    min-width: 100px;
    flex-direction: column;
    min-height: 100px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px), (max-height: 740px) {
        display: none;
    }
`

export const SideBarBoxLogo = styled.div`
    min-width: 100px;
    flex-direction: column;
    min-height: 100px;
    display: flex;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 768px), (max-height: 740px) {
        align-self: center;
        padding: 0;
        width: 30px;
    }
`

export const SideBarList = styled.div`
    transform: rotate(270deg);
`


export const SideBarListItemR = styled(NavLink)`
    margin-right: ${props => props.nomargin ? '0px' : '50px'};
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    color: ${props => props.theme.colors.menuLinks};
    :hover {
        color: ${props => props.theme.colors.linkBtnColor};
    }

    &.active {
        color: ${props => props.theme.colors.linkBtnColor};
    }
`


export const SideBarLinkBox = styled.div`
    margin-bottom: 20px;

`

export const SideBarLink = styled.a`

`

export const LinkedIn = styled(IoLogoLinkedin)`
    color: ${props => props.theme.colors.menuLinks};
    :hover {
        color: ${props => props.theme.colors.linkBtnColor};
    }
`

export const GitHub = styled(IoLogoGithub)`
    color: ${props => props.theme.colors.menuLinks};
    :hover {
        color: ${props => props.theme.colors.linkBtnColor};
    }
`
export const Mail = styled(IoMdMail)`
    color: ${props => props.theme.colors.menuLinks};
    :hover {
        color: ${props => props.theme.colors.linkBtnColor};
    }
`

export const ThemeBox = styled.div`
    position: fixed;
    top: 40px;
    right: 40px;

    @media (max-width: 768px), (max-height: 740px) {
        display: none;
    }
`