import { useState } from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import Copy from "../icons/Copy"
import CheckMark from '../icons/Checkmark'
import Logo from "../icons/Logo"
import thumb from "../assets/landing_thumb.png"
import Download from '../icons/Download'

function Home() {
    return (
        <>
            <Header />
            <HomeSection />
            <Pricing />
        </>
    )
}

function Pricing() {
    return (
        <section className="bg-blue-950">
            <h3 className="text-white text-4xl font-bold mb-10 text-center">Pricing</h3>
            <div className='pricing pricing-palden'>
                <div className='pricing-item'>
                    <div className='pricing-deco'>
                        <svg className='pricing-deco-img' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlns='http://www.w3.org/2000/svg' y='0px'>
                            <path className='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
                            <path className='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
                            <path className='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
                            <path className='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
                        </svg>
                        <div className='pricing-price'><span className='pricing-currency'>$</span>0
                            <span className='pricing-period'>/ mo</span>
                        </div>
                        <h3 className='pricing-title'>Free</h3>
                    </div>
                    <ul className='pricing-feature-list'>
                        <li className='pricing-feature'>3 Projects</li>
                        <li className='pricing-feature'>Up to 5 members per project</li>
                    </ul>
                    <button className='pricing-action current'>Current</button>
                </div>
                <div className='pricing-item pricing__item--featured'>
                    <div className='pricing-deco'>
                        <svg className='pricing-deco-img' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlns='http://www.w3.org/2000/svg' y='0px'>
                            <path className='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
                            <path className='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
                            <path className='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
                            <path className='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
                        </svg>
                        <div className='pricing-price'><span className='pricing-currency'>$</span>10
                            <span className='pricing-period'>/ mo</span>
                        </div>
                        <h3 className='pricing-title'>Pro</h3>
                    </div>
                    <ul className='pricing-feature-list'>
                        <li className='pricing-feature'>Unlimited projects</li>
                        <li className='pricing-feature'>Up to 25 members per project</li>
                    </ul>
                    <button className='pricing-action'>Choose plan</button>
                </div>
                <div className='pricing-item'>
                    <div className='pricing-deco'>
                        <svg className='pricing-deco-img' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlns='http://www.w3.org/2000/svg' y='0px'>
                            <path className='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
                            <path className='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
                            <path className='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
                            <path className='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
                        </svg>
                        <h3 className='pricing-title'>Enterprise</h3>
                    </div>
                    <ul className='pricing-feature-list'>
                        <li className='pricing-feature'>Unlimited projects</li>
                        <li className='pricing-feature'>Unlimited members per project</li>
                    </ul>
                    <button className='pricing-action'>Contact us</button>
                </div>
            </div>

        </section>

    )
}

function CopyButton({ textToCopy = "Example" }) {
    const [status, setStatus] = useState('default');

    const copy = () => {
        setStatus('copied');
        setTimeout(() => {
            setStatus('default');
        }, 2000); // 3000 milliseconds = 3 seconds
        navigator.clipboard.writeText(textToCopy)
    };

    const Icon = status === 'default' ? <Copy size={20} /> : <CheckMark size={20} />

    return (
        <pre className="bg-white px-4 py-2 rounded-lg border-2 border-blue-700 text-black flex items-center justify-between w-full">
            <code>{textToCopy}</code>
            <button onClick={copy} title="Copy" className="rounded-full border-blue-700 bg-blue-700 border-2 p-3 hover:bg-blue-900 hover:border-blue-900 transition-colors">
                {Icon}
            </button>
        </pre>
    )
}

CopyButton.propTypes = {
    textToCopy: PropTypes.string
}

function HomeSection() {
    return (
        <section className="flex justify-between items-center ml-24">
            <div className="w-4/12">
                <h3 className="text-blue-700 text-5xl font-bold mb-5 upcoming">Navigate Your Documentation Journey with Ease</h3>
                <p className="text-slate-700 text-2xl mb-10 upcoming">Chart Your Course to Clear and Concise Reports with Traveler.</p>
                <CopyButton textToCopy="brew install traveler" />
                <button className="text-white bg-blue-700 border-blue-700 border-2 rounded-full px-5 py-3 mt-10 flex gap-4 hover:bg-blue-900 transition-colors">Other options <Download /></button>
            </div>
            <div className="w-8/12">
                <img src={thumb} alt="Thumb" />
            </div>
        </section>
    )
}

function Header() {
    return (
        <header className="flex justify-between m-5">
            <Nav />
            <Logo />
            <div className="flex gap-5">
                <button className="bg-white text-blue-700 border-blue-700 border-2 rounded-full px-5 py-2 hover:underline">Sign up</button>
                <button className="text-white bg-blue-700 border-blue-700 border-2 rounded-full px-5 py-2 hover:bg-blue-900 transition-colors">Log in</button>
            </div>
        </header>
    )
}

function Nav() {
    return (
        <nav className="text-blue-700 text-xl font-medium w-1/2">
            <ul className="flex justify-evenly">
                <NavItem text="Home" href="#" />
                <NavItem text="Pricing" href="#" />
                <NavItem text="Docs" href="#" />
                <NavItem text="Download" href="#" />
            </ul>
        </nav>
    )
}

function NavItem({ text, href }) {
    return (
        <li><Link to={href} className="hover:text-blue-900 transition-colors">{text}</Link></li>
    )
}

NavItem.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string
}

export default Home;