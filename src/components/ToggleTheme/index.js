import React from 'react'
import { RiMoonFill } from 'react-icons/ri'
import { FiSun } from 'react-icons/fi'
import { ThemeButton, ToggleWrapper } from './toggleThemeElements'
import { AnimatePresence } from 'framer-motion'

function ToggleThemeButton({ isLightMode, toggleTheme }) {
    return (
        <>
                <ThemeButton onClick={toggleTheme} isLightMode>
                    {isLightMode ? (
                        <AnimatePresence>
                        <ToggleWrapper initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
                            <FiSun style={{color: 'black'}} size={30} />
                        </ToggleWrapper>
                        </AnimatePresence>
                        ) 
                        : (
                        
                        <ToggleWrapper initial={{ rotate: -180 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
                            <RiMoonFill style={{color: '#E1E4E4'}} size={30}  />
                        </ToggleWrapper>
                        
                            
                            
                        )}
                </ThemeButton>
            
        </>
    )
}

export default ToggleThemeButton
