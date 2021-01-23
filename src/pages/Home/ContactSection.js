import React from 'react'
import { GitHub, LinkedIn, Mail, SideBarLink } from '../../components/SideBar/sideBarElements'
import {Container, IconsWrapper, Title} from './contactSectionElements'

function ContactSection() {
    return (
        <>
            <Container>
            <Title>I’m always interested in new projects, so feel free to drop me a line.</Title>
            <IconsWrapper>
                <SideBarLink href="https://github.com/jiskodev" target="_blank"><GitHub size={50}></GitHub></SideBarLink>
                <SideBarLink href="https://www.linkedin.com/in/sergio-andrade-sirghea-694b82144/" target="_blank"><LinkedIn size={52}></LinkedIn></SideBarLink>
                <SideBarLink href="mailto:ss.andrade@icloud.com"><Mail size={50}></Mail></SideBarLink>
            </IconsWrapper>
            </Container>
        </>
    )
}

export default ContactSection
