import React from "react"

interface ImageSliderProps {
    slides: []
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
                top: '30%',
                left: 75,
                fontSize: 125,
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
                    top: '30%',
                    right: 75,
                    fontSize: 125,
                    color: "#fff",
                    zIndex: 1,
                    cursor: 'pointer'
                    }}
            >
                {">"}
            </div>
            <div
                style={{
                    height: 400,
                    marginLeft: 50,
                    marginRight: 55,
                    borderRadius: 20,
                    backgroundImage: `url(${props.slides[currentIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '10%'
                }} 
            >
                <p style={{position: 'absolute', color: 'white', fontSize: 20, bottom: 0, left: '50%'}}>{currentIndex + 1}/{props.slides.length}</p>
            </div>
        </div>
    )
}