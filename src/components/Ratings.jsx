import fullStar from "../assets/fullStar.png"
import emptyStar from "../assets/emptyStar.png"

export const Ratings = (props) => {

    const stars = () => {
        let tmp = [];
        for(let i=0; i < 5; i++) {
            if(i < props.stars) {
                tmp.push(<img key={i} src={fullStar} width={24} height={24} />) 
            } else {
                tmp.push(<img key={i} src={emptyStar} width={24} height={24} />) 
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