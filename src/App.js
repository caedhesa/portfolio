import React, {useState} from 'react'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'
import './App.css';
import { Projects } from './components/ProjectBox/data'
import SideBar from './components/SideBar'
import NavMenu from './components/NavMenu'
import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { Container } from './components/backgroundContainer'
import NoMatchPage from './pages/404';
import Home from './pages/Home'
import Project from './pages/Project'
import ContactForm from './components/ContactForm'



function App() {
  const location = useLocation()
  const stored = localStorage.getItem('isLightMode')
  const [isLightMode, setIsLightMode] = useState(stored === 'true' ? true : false)
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)


  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    localStorage.setItem('isLightMode', !isLightMode)
  }

  return (
    <div className="App">
      <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
        <Container>
        <SideBar toggle={toggle} open={open} toggleTheme={toggleTheme} isLightMode={isLightMode} />
        <NavMenu toggle={toggle} open={open} toggleTheme={toggleTheme} isLightMode={isLightMode}></NavMenu>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path='/'>
                <Home projects={Projects} />
              </Route>
              <Route exact path='/contact'>
                <ContactForm />
              </Route>
              <Route exact path='/projects/:handle'>
                <Project toggle={toggle} open={open} projects={Projects} />
              </Route>
              <Route path='*'>
                <NoMatchPage />
              </Route>
            </Switch>
          </AnimatePresence>
        </Container>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
