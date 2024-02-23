import './Home.css'
import homeimg from '../Assets/ezgif.com-gif-maker-3.webp'
import homeimg2 from '../Assets/ezgif.com-gif-maker.webp'
import infoimg1 from '../Assets/ux.svg'

import bgimg from '../Assets/service-pattern.png.webp'
import bgimg1 from '../Assets/app-development.svg'
import customerser from '../Assets/customer-service.svg'
import appdevelop from '../Assets/app-development.svg'
import responsive from '../Assets/responsive.svg'
import contentw from '../Assets/content-writing.svg'
import logo from '../Assets/logo-design.svg'
function Home(){
    
    const servicedata = [
        {
            img: bgimg1 ,
            title: 'Web Design',
            desc: '& Development',
            backdata: "Persuasive web designs contribute to the quality conversion of leads into a potential pond of traffic, elevating the success of your business operations."
        },
        {
            img: customerser ,
            title: 'E-Commerce',
            desc: 'Websites',
            backdata: 'Create custom e-commerce websites with excellent APIs and design structures to boost your overall growth.'
        },
        {
            img:appdevelop ,
            title: 'Cost Effective',
            desc: 'Web Solution',
            backdata: 'We provide custom web development services to suit your cost utilization needs to meet the goals you have set for your business.'
        }
        
        
    ]
    return(
        <div>
            <div className='home'>
                <div className='home-content'>
                    <h1>No 1 Website Development Company in India</h1>
                    <p>You Imagine. <span>We Create.</span></p>
                </div>
                
               <div className='home-right'>
                <img src={homeimg2} className='home-img1'/>
                 <img src={homeimg} className='home-rightimg'/> 
                </div>
                   
                
            </div>
            {/* <div className='home-img'>
            <img src={homeimg}/>
                   
                </div> */}
                <div className='info'>
                <div className='info-card-container'>
            
            {servicedata.map((data)=>{
                    return(
                        <div className='info-card'>
                        <div className='service-card-frontdata'>
               
                        <div className='bgimg'>
                                <img src={bgimg} />
                            </div>
                            <div className='info-card-data'>
                                <img src={data.img} />
                                <h6>{data.title}<br /><span>{data.desc}</span></h6>
                                
                            </div>
                        </div>
                            <div className='info-card-backdata'>
                            <p>{data.backdata}</p>
                        </div>
                        </div>
                    )
                })}
         
            
            
            </div>
                </div>
               
        </div>
    )
}
export default Home;