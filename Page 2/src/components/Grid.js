
import './Grid.css';
import img2 from './assets/happy-doctor-holding-clipboard-with-patients 1.jpg';
import img3 from './assets/medical-banner-with-doctor-patient 1.jpg';
import img4 from './assets/young-female-doctor-isolated-white-background 2.jpg'

function Grid(){
    return(
        <div className="cards">
                <div className='card'>
                    <img className='image' src={img2}></img>
                    <h3 className='experts'>The Medical Experts Carefully</h3>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.</p>
                    <button className='btn-read-more'>Read More</button>
                </div>

                <div className='card'>
                    <img className='image' src={img3}></img>
                    <h3 className='experts'>The Medical Experts Carefully</h3>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.</p>
                    <button className='btn-read-more'>Read More</button>
                </div>

                <div className='card'>
                    <img className='image' src={img4}></img>
                    <h3 className='experts'>The Medical Experts Carefully</h3>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.</p>
                    <button className='btn-read-more'>Read More</button>
                </div>

                <div className='card'>
                    <img className='image' src={img2}></img>
                    <h3 className='experts'>The Medical Experts Carefully</h3>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.</p>
                    <button className='btn-read-more'>Read More</button>
                </div>

                <div className='card'>
                    <img className='image' src={img3}></img>
                    <h3 className='experts'>The Medical Experts Carefully</h3>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.</p>
                    <button className='btn-read-more'>Read More</button>
                </div>

                <div className='card'>
                    <img className='image' src={img4}></img>
                    <h3 className='experts'>The Medical Experts Carefully</h3>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.</p>
                    <button className='btn-read-more'>Read More</button>
                </div>

            </div>
    );
}

export default Grid;