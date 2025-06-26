import './ServicesSection.css';
import TiltR from '../assets/tilt-rectangle.png';
import Door from '../assets/door.png';
import Circ from '../assets/circles.png';
import Cubes from '../assets/cubes.png';
export default function ServicesSection() {
    return(
        <div className='s-outer'>
                <div className='ss1' barlow-semibold>We're a full-service B2B market research thought partner committed to<br />strengthening your strategies with deep, subject matter expertise.</div>
                <div className='ss2'>
                    <div className='ss2-content'>
                        <h3>Branding and Advertising Communication</h3>
                        <p>We help brands resonate. From brand perception and awareness to message testing and ad effectiveness, our research empowers you to communicate with clarity and impact. Backed by qualitative insights and robust tracking, we ensure your brand voice connects with the right audience.</p>
                        <div className="arrow">→</div>
                        <img src={TiltR} alt="" className='tilt-r'/>
                    </div>
                </div>
                <div className='ss3'>
                    <div className='ss3-content'>
                        <h3>Market Opportunity Research</h3>
                        <p>Find your edge before you enter. Our market opportunity research identifies whitespace, tests feasibility, and maps competitive dynamics. Whether you're planning a launch or exploring new segments, we provide the insights to make bold, informed moves.</p>
                        <div className="arrow">→</div>
                        <img src={Door} alt="" className='door'/>
                    </div>
                </div>
                <div className='ss4'>
                    <div className='ss4-content'>
                        <h3>Customer Research <br />and Segmentation</h3>
                        <p>Know who you're talking to — and why it matters. We uncover the motivations, behaviors, and needs of your customers, then segment them meaningfully to guide strategy. Our blend of qualitative and quantitative approaches ensures depth, accuracy, and actionable clarity.</p>
                        <div className="arrow">→</div>
                        <img src={Circ} alt="" className='circles' />
                    </div>
                </div>
                <div className='ss5'>
                    <div className='ss5-content'>
                        <h3>Product Research</h3>
                        <p>Build products that solve real problems. From concept testing and feature prioritization to in-use feedback, we support every phase of product development. Our insights help you align innovation with user expectations — minimizing risk and maximizing relevance.</p>
                        <div className="arrow">→</div>
                        <img src={Cubes} alt="" className='cubes'/>
                        <img src={Cubes} alt="" className='cubes1'/>
                    </div>
                </div>
        </div>
    );
}