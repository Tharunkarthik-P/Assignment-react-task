import './Footer.css'
import LastBox from '../assets/last-up-arrow-box.png';
import TM from '../assets/thoughtmetrics.png';
import LinkedIn from '../assets/linkedin.png';
import X_logo from '../assets/X_logo.png';
import XMLID from '../assets/XMLID.png';
export default function Footer(){
    return(
        <div className='footer'>
            <img src={LastBox} alt="box" className='last-box'/>
            <hr class="white-line" />
            <div class="caret-up"></div>
            <div className='cr'></div>
            <div className='copyrights'>© Copyright 2025. All Rights Reserved.</div>
            <div className='TM'>
                <img src={TM} alt="tm" />
            </div>
            <div class="circle"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div><img src={LinkedIn} alt="" className='c'/></div>
            <div><img src={X_logo} alt="" className='c2'/></div>
            <div><img src={XMLID} alt="" className='c3'/></div>
            <div className="footer-columns">
              <div className="footer-column">
                <h4>Research Methods</h4>
                <p>Qualitative Research</p>
                <p>Quantitative Research</p>
                <p>Fieldwork</p>
                <p>Surveys</p>
                <p>Focus Group Discussions</p>
                <p>Quality checks</p>
              </div>
              <div className="footer-column">
                <h4>Capabilities</h4>
                <p>Branding and Advertising</p>
                <p>Communication</p>
                <p>Market Opportunity Research</p>
                <p>Product Research</p>
                <p>Consumer Research and Segmentation</p>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <p>Privacy</p>
                <p>AI Policy</p>
                <p>Business Conduct and Ethics</p>
                <p>Site Disclaimer</p>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <p>Join Our Panel</p>
                <p>Request a Bid</p>
                <p>Careers</p>
                <p>Contact Us</p>
              </div>
            </div>
        </div>
    );
}