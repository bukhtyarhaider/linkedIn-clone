import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import UserSuggestion from './UserSuggestion';


function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h3 className='widgets_header_title'>Add to your feed</h3>
                <InfoIcon />
            </div>
            <div className='widgets_body'>
                <UserSuggestion userProfileUrl='https://media-exp1.licdn.com/dms/image/D4E35AQHEcOBlRrku2w/profile-framedphoto-shrink_100_100/0/1632172308131?e=1634313600&v=beta&t=TCzrlQc9Wow0NdsmlDr2omPOzsESNvZDXzpS8fzKB4k' userName='Asra Rehman' userInfo='Technical Recruiter | HR Operations | Employee Engagement | Head Hunter |' />
                <UserSuggestion userProfileUrl='https://media-exp1.licdn.com/dms/image/C4D0BAQHqD4UNJUUTDA/company-logo_100_100/0/1629445925458?e=1642032000&v=beta&t=HfN17SeMtytQ_G76anXj_9nmo1fGm24kPFNv87C0Ca8' userName='Contour Software' userInfo='Company • Information Technology and Services' />
                <UserSuggestion userProfileUrl='https://media-exp1.licdn.com/dms/image/C4E03AQEemXNgUlq2cQ/profile-displayphoto-shrink_100_100/0/1627327973163?e=1639612800&v=beta&t=rK45Wvmf5ZUCDtKrFZTiaCKjMXwdhLhmiybYA6EEKS0' userName='Sawleha S.' userInfo='Hiring talent across Pakistan | Technical Recruiter | HR Professional | Talent Acquisition' />
            </div>
            <div className='widgets_footer'>
                <h4 className='widgets_footer_title'>View all recommendations </h4>
                <ArrowForwardIcon className='arrowIcon' />
            </div>
        </div>
    )
}

export default Widgets
