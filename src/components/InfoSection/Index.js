import React, {useState} from 'react'
import { Button } from '../ButtonElement'
import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
 } from './InfoElements'


const InfoSection = ({id, topLine, lightText, headline, darkText, description, img, alt, primary, dark}) => {

    const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
         <InfoContainer id={id}>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>student programmer</TopLine>
                            <Heading lightText={lightText}>a little bit about me...</Heading>
                            <Subtitle darkText={darkText}>i am a sophomore at the university of southern california, studyng computer science and business administration.</Subtitle>
                            <BtnWrap>
                                <Button 
                                    to='home'
                                    onMouseEnter={onHover} 
                                    onMouseLeave={onHover}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                >
                                back to top { hover ? <ArrowForward/> : <ArrowRight/>}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
         </InfoContainer>
        </>
    )
}

export default InfoSection
