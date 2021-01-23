import React from 'react'
import { AnimatePresence } from 'framer-motion'

import { ExternalLink, LinkComponent, ButtonComponent, HoverBox, LinkContent } from './buttonElements'

import useHover from '../../hooks/useHover'

function Button({ href, target, type, children}) {
    const isExternalLink = href?.includes('://')
    const linkComponent = isExternalLink ? ExternalLink : LinkComponent
    const Component = href ? linkComponent : ButtonComponent
    const buttonType = type ? type : 'primary'
    const [attrs, hovering] = useHover()
    // primary - hover
    // secondary - white bg
    // tertiary - no bg

    return (
        <>
            <Component 
                href={href && isExternalLink ? href : undefined}
                to={href && !isExternalLink ? href : undefined}
                target={target || isExternalLink ? '_blank' : undefined}
                buttonType={buttonType}
                ref={attrs}
            >
            {buttonType === 'primary' ? (
                <>
                <AnimatePresence>
                    {hovering && 
                    <HoverBox
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        exit={{ x: '100%' }}>
                    </HoverBox>}
                </AnimatePresence>
                <LinkContent>
                {children}
                </LinkContent>
                </>) : {children}}
            </Component>
        </>
    )
}

export default Button
