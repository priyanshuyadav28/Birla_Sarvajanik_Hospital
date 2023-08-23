import './Appointment.css';
import phoneIcon from './assets/phone-icon.png';
import searchIcon from './assets/search-icon.png';


function Appointment() {

    return (
        <div className="appointment">

            <div className='btn-hosp-name'>
                <button className='button'></button>
                <span className='hospital-name'>BIRLA SARVAJANIK HOSPITAL</span>
            </div>


            <div className='call-book-appointment'>

                <div className='search-all'>

                <div className='search-icon-box'>
                    <img className='search-icon' src={searchIcon}></img>
                </div>
                
                <div className='phone-icon-box'>
                    <img className='phone-icon' src={phoneIcon}></img>
                    <div className='phone-no'>022-6757-0111</div>
                </div>

                </div>
                
                {/* <div className='icon'>icon</div> */}
                <div className='date-box'>
                    <div className='date-choose '>
                    <input
                        className='datepicker'
                        type="date"
                        name="appointmentDate"
                    />


                    <label htmlFor="appointmentDate">Book an appointment</label>

                    </div>
                </div>

            </div>

        </div>);
}

export default Appointment;