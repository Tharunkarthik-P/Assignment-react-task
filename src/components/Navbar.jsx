import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className={`navbar ${openDropdown ? 'navbar-open' : ''}`}>
      <div className='nav-div'>
        <ul className='nav-opt'>
          <li>
            <a
              href="#"
              className={openDropdown === 'research' ? 'active-link' : ''}
              onClick={() => toggleDropdown('research')}
            >
              Research Methods {openDropdown === 'research' ? '▲' : '▼'}
            </a>
          </li>

          <li>
            <a
              href="#"
              className={openDropdown === 'capabilities' ? 'active-link' : ''}
              onClick={() => toggleDropdown('capabilities')}
            >
              Capabilities {openDropdown === 'capabilities' ? '▲' : '▼'}
            </a>
          </li>

          <li>
            <a
              href="#"
              className={openDropdown === 'industries' ? 'active-link' : ''}
              onClick={() => toggleDropdown('industries')}
            >
              Industries {openDropdown === 'industries' ? '▲' : '▼'}
            </a>
          </li>

          <li>
            <a
              href="#"
              className={openDropdown === 'resources' ? 'active-link' : ''}
              onClick={() => toggleDropdown('resources')}
            >
              Resources {openDropdown === 'resources' ? '▲' : '▼'}
            </a>
          </li>

          <button className='blueb'>Start Your Research</button>
          <button className='redb'>Join a Paid Focus Group</button>
        </ul>
      </div>

      {openDropdown && (
        <div className="full-dropdown dropdown-absolute">
          <div className="dropdown-left">
            <p className="dropdown-description">
              Understand our approach to B2B <br /> and B2C research.
            </p>
            <p className="dropdown-overview">OVERVIEW</p>
          </div>

          <div className={`dropdown-right ${
              openDropdown === 'research' ? 'grid-research' :
              openDropdown === 'capabilities' ? 'grid-capabilities' :
              openDropdown === 'industries' ? 'grid-industries' :
              openDropdown === 'resources' ? 'grid-resources' : ''
            }`}>
            {openDropdown === 'research' && (
              <>
                <a href="#">Quantitative Research</a>
                <a href="#">Qualitative Research</a>
                <a href="#">Recruitment and Fieldwork</a>
                <a href="#">Online and Offline Surveys</a>
                <a href="#">Focus Group Discussions</a>
                <a href="#">Quality Checks</a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </>
            )}
            {openDropdown === 'capabilities' && (
              <>
                <p className='para-dd'>Branding and Advertising <br />Communication</p>
                <a href="#">Brand Perception Research</a>
                <a href="#">Brand Awarness Research</a>
                <a href="#">Brand Tracking Research</a>
                <a href="#">Messaging Testing</a>
                <a href="#">Advertising Effectiveness Research</a>
                <p className='para-dd'>Market Opportunity <br /> Research</p>
                <a href="#">Go-to-market Research</a>
                <a href="#">Market Feasibility Study</a>
                <a href="#">Market Entry Research</a>
                <a href="#">Competitive Research</a>
                <a href="#"></a>
                <p className='para-dd'>Product Research</p>
                <a href="#">Concept Testing Research</a>
                <a href="#">Conjoint Analysis</a>
                <a href="#">MaxDiff Analysis</a>
                <a href="#">Product Validation Testing</a>
                <a href="#">UI/UX Research</a>
                <p className='para-dd'>Customer Research and <br />Segmentation</p>
                <a href="#">Customer Journey Research</a>
                <a href="#">Customer Loyalty Research</a>
                <a href="#">Customer Satisfaction Research</a>
                <a href="#">Persona Research</a>
                <a href="#">Pricing Research</a>
              </>
            )}
            {openDropdown === 'industries' && (
              <>
                <a href="#">FMCG</a>
                <a href="#">Retail and Merchandising</a>
                <a href="#">Healthcare and Life Sciences</a>
                <a href="#">Advertising and Marketing</a>
                <a href="#">Financial Services and Institutions</a>
                <a href="#">Insurance</a>
                <a href="#">Investors</a>
                <a href="#">Automotive</a>
                <a href="#">Education</a>
                <a href="#">Human Resources</a>
                <a href="#">Media and Internet Publishers</a>
                <a href="#">Technology</a>
              </>
            )}
            {openDropdown === 'resources' && (
              <>
                <a href="#">Articles</a>
                <a href="#">Reports</a>
                <a href="#">Case Studies</a>
                <a href="#">Webinars</a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
