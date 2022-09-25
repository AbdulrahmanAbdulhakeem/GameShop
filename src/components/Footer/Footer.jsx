import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer'>
    <div className='footer-content'>
        <div><a href='https://github.com/AbdulrahmanAbdulhakeem'><GitHubIcon /><p className='footer-name'>Abdulrahman Abdulhakeem</p></a>
</div>
        <div><p><a href ='https://rawg.io/apidocs'>Powered By RAWG API</a></p></div>
    </div>
    </div>
  )
}

export default Footer