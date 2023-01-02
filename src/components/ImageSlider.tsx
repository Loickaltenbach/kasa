import React from "react"

interface ImageSliderProps {
    slides: [],
    isMobile: boolean
}

export const ImageSlider = (props: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === props.slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div 
            style={{
                height: '100%',
                position: 'relative',
                marginTop: 25
            }}
        >
            <div 
                onClick={() => goToPrevious()}
                style={{
                position: 'absolute',
                top: props.isMobile ? '40%' : '30%',
                left: props.isMobile ? 45 : 75,
                fontSize: props.isMobile ? 60 : 125,
                color: "#fff",
                zIndex: 1,
                cursor: 'pointer',
                }}
            >
                {"<"}
            </div>
            <div 
                onClick={() => goToNext()}
                style={{
                    position: 'absolute',
                    top: props.isMobile ? '40%' : '30%',
                    right: props.isMobile ? 45 : 75,
                    fontSize: props.isMobile ? 60 : 125,
                    color: "#fff",
                    zIndex: 1,
                    cursor: 'pointer'
                    }}
            >
                {">"}
            </div>
            <div
                style={{
                    height: props.isMobile ? 250 : 400,
                    marginLeft: props.isMobile ? 20 : 50,
                    marginRight: props.isMobile ? 20 : 55,
                    borderRadius: 20,
                    backgroundImage: `url(${props.slides[currentIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '10%'
                }} 
            >
                <p style={{position: 'absolute', color: 'white', fontSize: 20, bottom: 0, left: props.isMobile ?'47%' : '50%'}}>{currentIndex + 1}/{props.slides.length}</p>
            </div>
        </div>
    )
}