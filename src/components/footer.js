import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
  return (
    <div className='text-white bg-black py-4'>
      <footer className='flex flex-col md:flex-row md:justify-around space-y-4 w-fit mx-2 md:mx-auto'>
         <div className='my-auto md:w-1/3'>
            <h1 className='text-xl font-semibold'>About Us</h1>
            <p className=''>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
         </div>
         <div className='contact flex flex-col'>
            <div className='space-y-2'>
              <div className='location flex space-x-2'>
                <PlaceIcon />
                <p>Bhubaeswar,Odisha</p>
              </div>
              <div className='phone flex space-x-2'>
                <PhoneIcon />
                <p>82609XXXXX</p>
              </div>
              <div className='mail flex space-x-2'>
                <MailIcon />
                <p>foodfly@gmail.com</p>
              </div>
            </div>
            <div className='social flex space-x-2 mt-4'>
              <PinterestIcon fontSize='large' className='border rounded-full p-1 bg-red-600 border-red-600 hover:bg-red-700 '/>
              <FacebookIcon fontSize='large' className='border rounded-full p-1 bg-blue-600 border-blue-600 hover:bg-blue-700'/>
              <InstagramIcon fontSize='large' className='border rounded-full p-1 bg-orange-500 border-orange-500 hover:bg-orange-600'/>
              <TwitterIcon fontSize='large' className='border rounded-full p-1 bg-sky-500 border-sky-500 hover:bg-sky-600'/>
              <YouTubeIcon fontSize='large' className='border rounded-full p-1 bg-red-600 border-red-600 hover:bg-red-700'/>
            </div>
         </div>
      </footer>
    </div>
  )
}

export default Footer
