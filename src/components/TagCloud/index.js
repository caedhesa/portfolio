import React, {useEffect, useContext} from 'react'
import { ThemeContext } from 'styled-components'
import { CanvasContainer, Canvas, ListItem } from './tagCloudElements';
import useWindowSize from '../../hooks/useWindowSize'

const TagCanvas = window.TagCanvas

function TagCloud () {
    const themeContext = useContext(ThemeContext);

    const windowSize = useWindowSize();

    const isMobile = windowSize.width <= 696 || windowSize.height <= 696;

    const textSize = isMobile ? 16 : 20

    const renderTagCloud = () => {
        
        try {
            TagCanvas.Start("myCanvas", "tags", {
                textColour: themeContext.colors.linkBtnColor,
                outlineColour: "transparent",
                reverse: true,
                textHeight: textSize,
                depth: 0.8,
                maxSpeed: 0.05
            });
        } catch (e) {
        return
        }
    }
    useEffect(() => {
        renderTagCloud()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeContext, textSize])

    return (
    <div>
        <CanvasContainer id="myCanvasContainer">
        <Canvas width={isMobile ? windowSize.width - 20 : '500px'} height={isMobile ? windowSize.width - 20 : '500px'} id='myCanvas'>
        
        </Canvas>
        
        </CanvasContainer>
        <div id="tags" style={{opacity: 0}}>
        <ul>
            <ListItem><a href="/">HTML5</a></ListItem>
            <li><a href="/">JavaScript</a></li>
            <li><a href="/">CSS3</a></li>
            <li><a href="/">SASS</a></li>
            <li><a href="/">styled components</a></li>
            <li><a href="/">React</a></li>
            <li><a href="/">Webpack</a></li>
            <li><a href="/">Redux</a></li>
            <li><a href="/">Babel</a></li>
            <li><a href="/">Gatsby</a></li>
            <li><a href="/">GraphQL</a></li>
            <li><a href="/">NextJS</a></li>
            <li><a href="/">REST</a></li>
            <li><a href="/">NoSQL</a></li>
            <li><a href="/">NodeJS</a></li>
        </ul>
        </div>
    </div>
    )
}


export default TagCloud;