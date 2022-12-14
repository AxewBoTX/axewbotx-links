import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db','#202023')(props)
        }
    })
}
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}
const fonts = {
    heading: "'M PLUS Rounded 1c'",
    body: "'M PLUS Rounded 1c'"
}

const theme = extendTheme({styles,fonts,config});

export default theme;
