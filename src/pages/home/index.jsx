
import { Carousel } from './components/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import  People from '../../assets/images/people.png';
import  Words from '../../assets/images/words.png';
import  Waves from '../../assets/images/waves.png';


export const Home = () => {

    return (
        <>
            <Carousel/>
            <div className='grid place-content-center my-8'>
                <img src={Words} />
            </div>
            <div className='grid place-content-center my-8'>

            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg shadow-md">
                        <video width="400" height={"500"} controls>
                            <source src="https://dn720406.ca.archive.org/0/items/videos-agua-contando-historrias/video-agua.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="p-4 rounded-lg shadow-md">
                        <video width="400" height={"500"} controls>
                             <source src="https://dn720406.ca.archive.org/0/items/videos-agua-contando-historrias/20180611_174118_video22.ia.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className=" p-4 rounded-lg shadow-md">
                        <video width="400" height={"500"} controls>
                             <source src="https://dn720406.ca.archive.org/0/items/videos-agua-contando-historrias/incendio-en-la-cienaga.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
              
     
            <FontAwesomeIcon icon="fa-brands" />


         
            </div>
            <div>
                <img className=' w-full' src={Waves} />
            </div>
        </>
    )
}