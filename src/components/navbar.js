import { useColorMode,useColorModeValue } from '@chakra-ui/react';
import {
    IconButton,
    Box,
    Heading
} from '@chakra-ui/react'
import { SunIcon,MoonIcon} from '@chakra-ui/icons';

function Navbar(){
    const {toggleColorMode} = useColorMode();
    return(
        <Box
        display={'flex'}
        marginTop={'10px'}
        justifyContent={'space-between'}
        >
        <Heading>AxewBoTX</Heading>
        <IconButton
        onClick={toggleColorMode}
        colorScheme={useColorModeValue('purple','orange')}
        icon={useColorModeValue(<MoonIcon/>,<SunIcon/>)}
        ></IconButton>
        </Box>
    );
}

export default Navbar;
