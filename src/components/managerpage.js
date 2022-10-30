import Profile from '../images/template pfp.jpg';
import './managerpage.css';
import Mary from '../images/maryav.png'
import John from '../images/johnav.png'
import Mark from '../images/markav.png'
import Anna from '../images/annav.png'
function ManagerPage(){

return(
<div className='divmare'>
    <h1>Welcome, Michael!</h1>
    <p id="t1">Your employees:</p>
    <div className='emp' >
        <div className="empbar">
            <img src={Mary} alt=""/>
            <p>Mary Smith</p>
            <p className='points'> Points: 30</p>
        </div>
        <div className="empbar">
            <img src={John} alt=""/>
            <p>John Doe</p>
            <p className='points'> Points: 27</p>
        </div>
        <div className="empbar">
            <img src={Anna} alt=""/>
            <p>Anna Forger</p>
            <p className='points'> Points: 21</p>
        </div>
        <div className="empbar">
            <img src={Mark} alt=""/>
            <p>Mark Cooper</p>
            <p className='points'> Points: 16</p>
        </div>
    </div>
</div>
)

}

export default ManagerPage;