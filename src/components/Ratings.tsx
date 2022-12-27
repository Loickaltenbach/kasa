import fullStar from "../assets/fullStar.png"
import emptyStar from "../assets/emptyStar.png"

interface RatingsProps {
    stars: number
}

export const Ratings = (props: RatingsProps) => {

    const stars = () => {
        let tmp = [];
        for(let i=0; i < 5; i++) {
            if(i < props.stars) {
                tmp.push(<img src={fullStar} width={24} height={24} />) 
            } else {
                tmp.push(<img src={emptyStar} width={24} height={24} />) 
            }
        }
        return tmp
    }

    return (
        <div 
            style={{
                display: 'flex',
            }}
        >
            {stars()}
        </div>
    )
}