import { useState } from 'react';
import './SolutionsSection.css';
import fmcgImage from '../assets/fmcg.png';
import retImage from '../assets/retail.png';
import finImage from '../assets/financial.png';
import insImage from '../assets/insurance.png';
import invImage from '../assets/investors.png';
import mediImage from '../assets/media.png';
import techImage from '../assets/tech.png';
import autoImage from '../assets/automotive.png';
import advImage from '../assets/advertising.png';
import hrImage from '../assets/HR.png';
import eduImage from '../assets/education.png';
import healImage from '../assets/healthcare.png';

export default function SolutionsSection() {
    const [activeButton, setActiveButton] = useState('FMCG');

    const solutions = {
        'FMCG': {
            title: 'FMCG',
            subtitle: 'Meet Your Customers\' Needs Every Time',
            description: [
                'In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option-it\'s a necessity. Here\'s how Thought Metrics can guide you to sucess:',
            ],
            content: [
                'Connect with the right people to make the right decisions even when you need to move quickly.',
                'Better understand not just what customers want and need, but why and how they make their decisions.',
                'Gain feedback at every phase of product and ad development, from concept to execution with agile testing.'
            ],
            image: fmcgImage
        },
        'Retail and Merchandising': {
            title: 'Retail and Merchandising',
            subtitle: 'Drive Smarter Decisions on the Shop Floor',
            description: [
                'In retails, every display, promotion, and product placement counts. Thought Metrics helps you:',
            ],
            content: [
                'Stay in tune with changing shoppers behaviours and preferences.',
                'Optimize in-store and online experiences based on real insights.',
                'Test pricing, promotions, and layouts quickly to boost conversions.'
            ],
            image: retImage
        },
        'Financial Services': {
            title: 'Financial Services',
            subtitle: 'Build Trust with Every Transaction',
            description: [
                'In a space where confidence drives choices, our research gives you the edge to:',
            ],
            content: [
                'Understand what drives customer loyalty and defection.',
                'Segment your audience to tailor services that truly resonate.',
                'Refine messaging and product offerings to build long-term trust.'
            ],
            image: finImage
        },
        'Insurance': {
            title: 'Insurance',
            subtitle: 'Simplify the Complex, Earn Customer Confidence',
            description: [
                'Insurance decisions are personal and complex — we help you:',
            ],
            content: [
                'Decode the motivations and anxieties behind insurance choices.',
                'Test policy concepts, channels, and messaging before launch.',
                'Build clarity and trust through research-led communication.'
            ],
            image: insImage
        },
        'Investors': {
            title: 'Investors',
            subtitle: 'See the Market Before It Moves',
            description: [
                'Whether you\'re sizing up a new market or evaluating a venture:',
            ],
            content: [
                'Use rigorous market assessments to make informed investment decisions',
                'Gauge brand traction and customer sentiment with real-time insights.',
                'Back your thesis with evidence, not just instinct.'
            ],
            image: invImage
        },
        'Media': {
            title: 'Media',
            subtitle: 'Create Content That Captures Minds',
            description: [
                'In media, engagement is everything. Our insights help you:',
            ],
            content: [
                'Understand audience preferences across platforms and formats.',
                'Test content, characters, and story arcs before the launch.',
                'Track media consumption shifts and stay ahead of trends.'
            ],
            image: mediImage
        },
        'Technology': {
            title: 'Technology',
            subtitle: 'Design for Humans, Not Just Users',
            description: [
                'Innovation is only as good as its adoption. Thought Metrics enables you to:',
            ],
            content: [
                'Discover what real users want from your tools and platforms.',
                'Uncover usability gaps through qualitative testing.',
                'Optimize UX and messaging for clarity, trust, and adoption.'
            ],
            image: techImage
        },
        'Automotive': {
            title: 'Automotive',
            subtitle: 'From Test Drive to Loyalty — Know the Journey',
            description: [
                'Buyers are evolving — from EV interest to digital-first expectations. We help you:',
            ],
            content: [
                'Understand the full decision-making journey, from research to purchase.',
                'Test features, designs, and positioning for different segments.',
                'Navigate category shifts and competitive dynamics with confidence.'
            ],
            image: autoImage
        },
        'Advertising and Marketing': {
            title: 'Advertising and Marketing',
            subtitle: 'Make Every Message Matter',
            description: [
                'Creative is powerful when it connects. Our approach helps you:',
            ],
            content: [
                'Test campaign ideas, messages, and visuals before going live.',
                'Track brand recall, perception, and effectiveness over time',
                'Measure emotional and cognitive response for deeper creative impact.'
            ],
            image: advImage
        },
        'Human Resources': {
            title: 'Human Resources',
            subtitle: 'Shape Cultures People Want to Belong To',
            description: [
                'Attracting and retaining talent starts with understanding people. We help you:',
            ],
            content: [
                'Explore employee motivations, engagement drivers, and pain points.',
                'Test new HR initiatives before rollout.',
                'Benchmark satisfaction and guide culture-building efforts.'
            ],
            image: hrImage
        },
        'Education': {
            title: 'Education',
            subtitle: 'Design Learning That Sticks',
            description: [
                'From students to institutions, we uncover insights that improve education outcomes:',
            ],
            content: [
                'Understand learner needs, habits, and barriers.',
                'Test curricula, content, and platforms for effectiveness.',
                'Track engagement and feedback to continuously improve learning delivery.'
            ],
            image: eduImage
        },
        'Healthcare and Life Sciences': {
            title: 'Healthcare and Life Sciences',
            subtitle: 'Build Empathy Into Every Innovation',
            description: [
                'Patients and providers each have unique needs — we help you listen better:',
            ],
            content: [
                'Understand patient journeys, behaviors, and gaps in care.',
                'Test health communications and interventions for clarity and trust.',
                'Equip R&D and marketing with real-world insights that save lives.'
            ],
            image: healImage
        },
    };

    const buttons = [
        'FMCG',
        'Retail and Merchandising',
        'Financial Services',
        'Insurance',
        'Investors',
        'Media',
        'Technology',
        'Automotive',
        'Advertising and Marketing',
        'Human Resources',
        'Education',
        'Healthcare and Life Sciences'
    ];

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const currentSolution = solutions[activeButton] || solutions['FMCG'];
    const currentIndex = buttons.indexOf(activeButton);
    const solNumber = currentIndex >= 0 ? (currentIndex + 1).toString().padStart(2, '0') : '01';

    return(
        <div className='sol-outer'>
            <div className='sol-top'>Designed to meet your unique needs.</div>
            <div className='sol-main-container'>
                <div className='sol-changer'>
                    <div className='sol-content'>
                        <div className='sol-content-in'>
                            <div className='sol-text-section'>
                                <h2 className='sol-title'>{currentSolution.title}</h2>
                                <h3 className='sol-subtitle'>{currentSolution.subtitle}</h3>
                                <div className='sol-description'>
                                    {currentSolution.description}
                                </div>
                                <ul className='sol-list'>
                                    {currentSolution.content.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <div className='sol-number'>{solNumber}</div>
                                <button className='sol-see-more'>See More</button>
                            </div>
                            <div className='sol-image-section'>
                                <img src={currentSolution.image} alt={currentSolution.title} className='sol-image' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sol-buttons-container'>
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={`sol-button ${activeButton === button ? 'active' : ''}`}
                            onClick={() => handleButtonClick(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
