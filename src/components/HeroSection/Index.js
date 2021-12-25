import React, { useState } from 'react'
import {Button} from '../ButtonElement'
import {Emoji} from '../EmojiElement'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements'

const HeroSection = () => {

const [ hover, setHover ] = useState(false);

const onHover = () => {
    setHover(!hover)
}

    return (
        <HeroContainer id='home'>
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Hey <Emoji symbol="👋"/>, I'm Rohan <Emoji symbol='🧑🏽‍💻'/>, a creative <Emoji symbol='💡'/> developer.
                </HeroH1>
            <HeroP>
                I love to think about, design, and execute new ideas.
            </HeroP>
                <HeroBtnWrapper>
                <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duation={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    About Me { hover ? <ArrowForward /> : <ArrowRight/> }
                </Button>
             </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
        // <HeroContainer id='home'>
        //     <HeroBg>
        //         {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
        //     </HeroBg>
        //     <HeroContent>
        //         <HeroH1>
        //             Hey, I'm Rohan.
        //             {/* Hey <Emoji symbol="👋"/>, I'm Rohan <Emoji symbol='🧑🏽‍💻'/>. */}
        //         </HeroH1>
        //     </HeroContent>
        //     <HeroP>
        //         I love to think about, design, and execute new ideas.
        //     </HeroP> 
        //     <HeroBtnWrapper>
        //         <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover}>
        //             About Me { hover ? <ArrowForward /> : <ArrowRight/> }
        //         </Button>
        //     </HeroBtnWrapper>
        // </HeroContainer>
    )
}

export default HeroSection
