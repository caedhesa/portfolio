import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectView from '../ProjectView'
import TransitionContainer from '../TransitionContainer'

function ProjectPage({ projects, toggle, open }) {
    const { handle } = useParams()
    const currentProject = projects.find(item => item.to === handle)

    return (
        <>
            <TransitionContainer />
            <ProjectView {...currentProject}></ProjectView>
        </>
    )
}

export default ProjectPage
