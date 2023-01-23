import React from "react"
import { ArrowLeft, ArrowRight } from "../utils/icons";

export const ImageSlider = ({slides, isMobile}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div 
            style={{
                position: 'relative',
                marginTop: 10,
            }}
        >
            <div 
                onClick={() => goToPrevious()}
                style={{
                position: 'absolute',
                top: isMobile ? 100 : 200,
                left: isMobile ? 45 : 75,
                zIndex: 1,
                cursor: 'pointer',
                }}
            >
                <ArrowLeft height={48} width={48} fill={'white'} />
            </div>
            <div 
                onClick={() => goToNext()}
                style={{
                    position: 'absolute',
                    top: isMobile ? 100 : 200,
                    right: isMobile ? 25 : 55,
                    zIndex: 1,
                    cursor: 'pointer'
                    }}
            >
                <ArrowRight height={48} width={48} fill={'white'} />
            </div>
            <article
                style={{
                    height: isMobile ? 250 : 400,
                    marginLeft: isMobile ? 20 : 50,
                    marginRight: isMobile ? 20 : 55,
                    borderRadius: 20,
                    backgroundImage: `url(${slides[currentIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '10%'
                }} 
            >
                <p style={{color: 'white', fontSize: 20, textAlign: 'center', paddingTop: isMobile ? 200 : 350}}>{currentIndex + 1}/{slides.length}</p>
            </article>
        </div>
    )
}