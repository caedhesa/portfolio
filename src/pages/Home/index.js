import React, {useRef, useEffect} from 'react'
import About from './About'
import Intro from './Intro'
import ProjectSummary from './ProjectSummary'
import { Container } from '../../components/backgroundContainer'
import ContactSection from './ContactSection'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const pageVariants = {
    initial: {
        opacity: 0,
        scale: 0.9
    },
    in: {
        opacity: 1,
        scale: 1
    },
    out: {
        opacity: 0
    }
    }

    const pageTransition = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] };


function Home({ projects }) {
    const introRef = useRef(null)
    const aboutRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)
    
    const location = useLocation()

    useEffect(() => {
        const refs = [introRef, aboutRef, projectRef, contactRef]
        const hash = location.hash;
        const behavior = 'smooth'
        const id = hash.substring(1)
        if (hash) {
            const selectedRef = refs.filter(ref => ref.current.id === id)[0]
            const top = selectedRef.current.offsetTop
            window.scrollTo({top, left: 0, behavior})
        }
        else if (!hash) {
            window.scrollTo(0, 0)
        }
        
        
    }, [location])

    return (
        <motion.div
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
        exit='out'
        >
        
            <Container>
                <div id='intro' ref={introRef}>
                <Intro />
                </div>
                <div id='about' ref={aboutRef}>
                <About />
                </div>
                <div ref={projectRef} id='projects'>
                <ProjectSummary projects={projects} />
                </div>
                <div id='contact' ref={contactRef}>
                <ContactSection />
                </div>
            </Container>
        </motion.div>
    )
}

export default Home
