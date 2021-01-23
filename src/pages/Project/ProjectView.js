import React from 'react'
import { BoxLeft, BoxRight, Container, LightLine, LinksBox, ListDescription, ProjectImage, TextDescription, Title, Wrapper, WrapperHead, Icon } from './projectViewElements'
import OutsideLinkHover from '../../components/Links/OutsideLinkHover'

function ProjectView({ title, imagePath, description, items, visitWebsite, viewCode, moreImages }) {
    return (
        <>
            <Container>
                <Wrapper>
                    <WrapperHead>
                        <BoxLeft>
                            <Title initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.8, delay: 0.3 }}>{title}</Title>
                            <TextDescription>{description}</TextDescription>
                            <LinksBox>
                                {visitWebsite ? <OutsideLinkHover path={visitWebsite} target='_blank'>Visit Website<Icon size={30}></Icon></OutsideLinkHover> : null }
                                {viewCode ? <OutsideLinkHover path={viewCode} target='_blank'>View Code<Icon size={30}></Icon></OutsideLinkHover> : null }
                            </LinksBox>
                        </BoxLeft>
                        <BoxRight>
                        <LightLine></LightLine>
                                {items.map(item => (
                                    <div key={item}>
                                    <ListDescription>
                                {item}
                            </ListDescription>
                            <LightLine></LightLine>
                            </div>
                                ))}
                        </BoxRight>
                    </WrapperHead>
                    <ProjectImage src={imagePath}></ProjectImage>
                    {moreImages ? moreImages.map(image => (
                        <div key={image.title}>
                        <TextDescription>{image.title}</TextDescription>
                        <ProjectImage src={image.imagePath}></ProjectImage>
                        </div>
                    )) : null}
                </Wrapper>
            </Container>
        </>
    )
}

export default ProjectView
