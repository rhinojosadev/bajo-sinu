
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cubo } from '../../components/cubo/index';
import { Header } from '../../components/header/header';
import { Carousel } from './components/carousel';

import WaterMark from '../../assets/images/water-mark.png';
import Words from '../../assets/images/words.png';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import './style.css';


export const Home = () => {

    return (
        <>
            <Header />
            <Carousel />

            <div className='background_one'>
                <div className='mx-24'>
                    <h1 className='text-6xl mt-5 text-center primary-color heading'>El agua contando historias</h1>
                    <img alt="" width={"60px"} src={WaterMark} />
                    <div className='grid place-content-center my-24'>
                        <Cubo images={Words} />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus nulla ac ante cursus, in faucibus elit condimentum. Maecenas condimentum blandit scelerisque. Sed risus magna, condimentum quis cursus eu, imperdiet eget nunc. Donec condimentum elit sit amet ante vestibulum pulvinar. Aliquam dignissim vitae diam ut rutrum. Nulla dignissim metus non risus interdum, sit amet lobortis metus vulputate. Nam rutrum dui ex, at consectetur justo sodales quis. Suspendisse aliquet leo sed leo tincidunt, at porttitor leo elementum. Fusce viverra lacus ut pretium luctus. Donec lorem lectus, bibendum vitae tempus vel, tristique ac sem. </p>
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
                    </div>
                </div>
            </div>


            <h1 className='text-6xl mt-5 text-center primary-color'>Conjunto de datos</h1>

            <FontAwesomeIcon icon={faCalendar} />
            <div>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,75 C 39.48200432427454,80.7059776632272 78.96400864854908,86.41195532645439 121,82 C 163.03599135145092,77.58804467354561 207.62596973007817,63.058156357409615 254,53 C 300.37403026992183,42.941843642590385 348.53211243113833,37.35541924390715 393,51 C 437.46788756886167,64.64458075609285 478.2455805453685,97.5201666669618 524,100 C 569.7544194546315,102.4798333330382 620.4855653873873,74.56391408824567 665,72 C 709.5144346126127,69.43608591175433 747.8121579050819,92.22417698005556 784,96 C 820.1878420949181,99.77582301994444 854.2658029922848,84.53937799153209 899,82 C 943.7341970077152,79.46062200846791 999.1246301257793,89.61831105381614 1047,96 C 1094.8753698742207,102.38168894618386 1135.2356765045977,104.98737779320335 1172,97 C 1208.7643234954023,89.01262220679665 1241.9326638558293,70.43217777337047 1286,65 C 1330.0673361441707,59.56782222662953 1385.0336680720852,67.28391111331476 1440,75 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 L 0,175 C 40.445212574749576,197.3466148650922 80.89042514949915,219.69322973018438 122,210 C 163.10957485050085,200.30677026981562 204.88351197675303,158.57369594435463 251,149 C 297.116488023247,139.42630405564537 347.57552694348874,162.01198649239709 398,168 C 448.42447305651126,173.98801350760291 498.81438024929207,163.37835808605695 536,170 C 573.1856197507079,176.62164191394305 597.1669520593427,200.47458116337503 638,195 C 678.8330479406573,189.52541883662497 736.5178115133367,154.7233172604428 792,147 C 847.4821884866633,139.2766827395572 900.7618018873104,158.63214979485375 935,159 C 969.2381981126896,159.36785020514625 984.4349809374221,140.7480835601423 1024,151 C 1063.565019062578,161.2519164398577 1127.4982743630017,200.37551596457706 1184,199 C 1240.5017256369983,197.62448403542294 1289.571921610571,155.74985258154942 1331,145 C 1372.428078389429,134.25014741845058 1406.2140391947146,154.6250737092253 1440,175 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,400 L 0,275 C 40.434056583893934,298.2902594033493 80.86811316778787,321.58051880669854 120,312 C 159.13188683221213,302.41948119330146 196.96160391274248,259.96818417655504 244,252 C 291.0383960872575,244.03181582344496 347.28547118124226,270.5467444870812 395,277 C 442.71452881875774,283.4532555129188 481.89651136228827,269.84483787512016 522,266 C 562.1034886377117,262.15516212487984 603.1284833696051,268.07390401243805 654,267 C 704.8715166303949,265.92609598756195 765.5895551592915,257.8595460751276 809,268 C 852.4104448407085,278.1404539248724 878.5132959932286,306.48791168705145 911,308 C 943.4867040067714,309.51208831294855 982.3572608677946,284.1888071766666 1025,273 C 1067.6427391322054,261.8111928233334 1114.0576605355936,264.75685960628203 1167,261 C 1219.9423394644064,257.24314039371797 1279.4120969898304,246.78375439820513 1326,248 C 1372.5879030101696,249.21624560179487 1406.2939515050848,262.10812280089743 1440,275 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
            </div>

        </>
    )
}