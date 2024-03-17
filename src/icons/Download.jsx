import PropTypes from 'prop-types'

function Download({ size = 24 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M19.2087 13.0547L12 20.2634L4.79132 13.0547L6.11719 11.7288L11.0625 16.6741V0H12.9375V16.6741L17.8828 11.7288L19.2087 13.0547ZM24 22.125H0V24H24V22.125Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_109_5424">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>


    )
}

Download.propTypes = {
    size: PropTypes.number,
}

export default Download