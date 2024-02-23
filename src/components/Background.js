import bgimg from '../Assets/image-2.jpg' 
import './Background.css'
function Backgorund(){

    return(
        <div className='background-img'>
            <img src={bgimg}/>
        </div>
    )
}
export default Backgorund;