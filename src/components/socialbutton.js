import {
    Button
} from '@chakra-ui/react';

function SocialButton(props){
    return(
        <Button
        size={'lg'}
        height={'50px'}
        width={'80%'}
        maxW={'400px'}
        fontSize={'25px'}
        colorScheme={props.colorscheme}
        leftIcon={props.icon}
        onClick={props.redirecter}
        >{props.buttonText}</Button>
    );
}

export default SocialButton;
