import React from 'react'
import Logo from '../Logo'
import ToggleThemeButton from '../ToggleTheme'
import { Container, GitHub, LinkedIn, ThemeBox, Mail, MenuBtn, SideBarListItemR, CloseBtn, SideBarBox, SideBarBoxLogo, SideBarLink, SideBarLinkBox, SideBarList, SideBarMenu } from './sideBarElements'
import { useLocation } from 'react-router-dom'


function SideBar({ toggle, open, toggleTheme, isLightMode }) {
    const location = useLocation()

    const isMatch = ({ match, hash = '' }) => {
        if (!match) return false;
        return `${match.url}${hash}` === `${location.pathname}${location.hash}`;
    };

    return (
        <>
            <Container initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                <SideBarBoxLogo>
                    <Logo />
                </SideBarBoxLogo>
                <SideBarMenu>
                    {open ? <CloseBtn onClick={toggle} size={30}></CloseBtn> : <MenuBtn onClick={toggle} size={30}></MenuBtn>}
                </SideBarMenu>
                    

                <SideBarBox>
                    <SideBarList>
                        <SideBarListItemR to='/contact'>Contact</SideBarListItemR>
                        <SideBarListItemR exact
                            isActive={match => isMatch({ match, hash: '#projects' })}
                            to={{
                                pathname: '/',
                                hash: '#projects'
                            }}>Projects</SideBarListItemR>
                        <SideBarListItemR exact
                            isActive={match => isMatch({ match, hash: '#about' })}
                            to={{
                                pathname: '/',
                                hash: '#about'
                            }}>About</SideBarListItemR>
                        <SideBarListItemR
                            isActive={match => isMatch({ match, hash: '#intro' })}
                            exact nomargin={1}
                            to={{
                                pathname: '/',
                                hash: '#intro'
                            }}>Home</SideBarListItemR>
                        
                    </SideBarList>
                </SideBarBox>
                <SideBarBox>
                    <SideBarLinkBox>
                        <SideBarLink href="https://www.linkedin.com/in/sergio-andrade-sirghea-694b82144/" target="_blank"><LinkedIn size={26}></LinkedIn></SideBarLink>
                    </SideBarLinkBox>
                    <SideBarLinkBox>
                        <SideBarLink href="https://github.com/jiskodev" target="_blank"><GitHub size={25}></GitHub></SideBarLink>
                    </SideBarLinkBox>
                    <SideBarLinkBox>
                        <SideBarLink href="mailto:ss.andrade@icloud.com"><Mail size={25}></Mail></SideBarLink>
                    </SideBarLinkBox>
                </SideBarBox>
            </Container>
            <ThemeBox>
                <ToggleThemeButton toggleTheme={toggleTheme} isLightMode={isLightMode} />
            </ThemeBox>
            
        </>
    )
}

export default SideBar
