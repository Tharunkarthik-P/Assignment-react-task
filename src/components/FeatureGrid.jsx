import './FeatureGrid.css';
import Woman from '../assets/gorgeous-woman-using-mobile-phone-smiling.png';
import Rect from '../assets/Rectangle 9040.png';
import Aud from '../assets/Audience.png';
import Gro from '../assets/Group.png';
import Stat from '../assets/statistics.png';
export default function FeatureGrid() {
    return(
        <div className='outer'>
            <div className='left'>
                <img src={Rect} alt="Rectangle" className='imgRectangle' />
                <img src={Woman} alt="woman-phone" className='imgPhone' />
                <div className='greenbox'><p className='every'>Unlock in-depth market <br />insights</p></div>
                <div className='greenbox1'><p className='every'>Everything <br />You Need, All <br />in One Place</p></div>
                <div className='greenbox2'><p className='every'>Harness our comprehensive<br />solutions to unearth valuable<br />insights that drive innovation,<br />improve customer connections,<br />and boost efficiency</p></div>
            </div>
            <div className='right'>
                <div className='top-left'>
                    <img src={Aud} alt="audience" className='audience'/>
                    <div className='tlt'>Audience<br /><br /><p className='paratxt'>Tap into a wide panel of<br />respondents for any of your<br />market research needs.</p></div>
                    <div class="arrow-button-0">→</div>
                </div>
                <div className='top-right'>
                    <img src={Gro} alt="group" className='qr'/>
                    <div className='trt'>Qualitative Research<br /><br /><p className='paratxt'>Tap into a wide panel of<br />respondents for any of your<br />market research needs.</p></div>
                    <div class="arrow-button">→</div>
                </div>
                <div className='btm-left'>
                    <img src={Stat} alt="statistics" className='stats'/>
                    <div className='blt'>Quantitative Research<br /><br /><p className='paratxt'>Tap into a wide panel of<br />respondents for any of your<br />market research needs.</p></div>
                    <div class="arrow-button-1">→</div>
                </div>
                <div className='btm-right'>
                    <img src={Gro} alt="group" className='audience'/>
                    <div className='brt'>Quality Checks<br /><br /><p className='paratxt'>Tap into a wide panel of<br />respondents for any of your<br />market research needs.</p></div>
                    <div class="arrow-button-1">→</div>
                </div>
            </div>
        </div>
    );
}