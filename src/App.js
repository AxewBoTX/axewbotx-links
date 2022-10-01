//Library Imports
import { useColorModeValue } from '@chakra-ui/react';
import {
    Container,
    Center,
    Image,
} from '@chakra-ui/react'
import {
    FaYoutube,FaTwitter,FaTwitch,FaGithub,FaDiscord
} from 'react-icons/fa'

//Local Imports
import Navbar from './components/navbar.js'; 
import SocialButton from './components/socialbutton.js';

function App() {
  return (
      <Container maxW={'container.sm'}>
      <Navbar/>
      <Center
      marginTop={'50px'}
      ><Image
      boxSize={'200px'}
      boxShadow={useColorModeValue('0px 0px 15px 5px rgb(0,0,0,0.3)','0px 0px 15px 5px rgb(255,255,255,0.2)')}
      src={'assets/profile.png'}
      borderRadius={'full'}
      /></Center>
      <ul className='social-list'>
      <li><SocialButton buttonText="YouTube" colorscheme="red" icon={<FaYoutube/>} redirecter={() =>{window.open("https://www.youtube.com/channel/UCrs-_MTVpZB3hAcMu3PCW2w","_blank")}}/></li>
      <li><SocialButton buttonText="Twitter" colorscheme="twitter" icon={<FaTwitter/>} redirecter={() =>{window.open("https://twitter.com/AxewBoTX","_blank")}}/></li>
      <li><SocialButton buttonText="Discord" colorscheme="facebook" icon={<FaDiscord/>} redirecter={() =>{window.open("https://discord.com/invite/pTzFSvCYp2","_blank")}}/></li>
      <li><SocialButton buttonText="Twitch" colorscheme="purple" icon={<FaTwitch/>} redirecter={() =>{window.open("https://www.twitch.tv/axewbotx","_blank")}}/></li>
      <li><SocialButton buttonText="GitHub" colorscheme="gray" icon={<FaGithub/>} redirecter={() => {window.open("https://github.com/AxewBoTX","_blank")}}/></li>
      </ul>
      </Container>
  );
}

export default App;
