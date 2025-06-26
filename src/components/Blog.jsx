import './Blog.css'
import Blog1 from '../assets/blog1.png';
import Blog2 from '../assets/blog2.png';
import Blog3 from '../assets/blog3.png';
import Blog4 from '../assets/blog4.png';
export default function Blog(){
    return(
        <div className='blog-out'>
            <div className='blog-top'>Fresh Ideas to Help You Reach New Heights.</div>
            <div className='blog-1'>
                <img src={Blog1} alt="Blog1" className='blog1' />
                <div className='blog'>Blog</div>
                <div className='blog-desc'>Gain feedback at every phase of<br />product and ad development,<br />from concept to execution with<br />agile testing.</div>
                <div class="white-arrow">→</div>
            </div>
            <div className='blog-2'>
                <img src={Blog2} alt="Blog1" className='blog1' />
                <div className='blog'>Blog</div>
                <div className='blog-desc'>Gain feedback at every phase of<br />product and ad development,<br />from concept to execution with<br />agile testing.</div>
                <div class="white-arrow">→</div>
            </div>
            <div className='blog-3'>
                <img src={Blog3} alt="Blog1" className='blog1' />
                <div className='blog'>Blog</div>
                <div className='blog-desc'>Gain feedback at every phase of<br />product and ad development,<br />from concept to execution with<br />agile testing.</div>
                <div class="white-arrow">→</div>
            </div>
            <div className='blog-4'>
                <img src={Blog4} alt="Blog1" className='blog1' />
                <div className='blog'>Blog</div>
                <div className='blog-desc'>Gain feedback at every phase of<br />product and ad development,<br />from concept to execution with<br />agile testing.</div>
                <div class="white-arrow">→</div>
            </div>
        </div>
    );
}