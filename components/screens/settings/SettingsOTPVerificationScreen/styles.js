import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'

export const SettingsOTPVerificationContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
`;

export const HolderContainer = styled.View`
    background-color: #FF873A;
    width: 600px;
    height: 40px;
`; 

export const LogoContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 25px;
`;

export const Logo = styled.Image`
    width: 150px;
    height: 40px;
`;

export const HeaderTitle = styled.Text`
    font-size: 15px;
    margin-bottom: 10px;
    color: black;
`;

export const FormContainer = styled.View`
    margin-top: 10px;
    width: 85%;
`;

export const OtpInputContainer = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`;

export const OtpInput = styled.TextInput`
    width: 60px;
    height: 60px;
    border: 1px solid #FF873A;
    margin: 0 5px;
    text-align: center;
    font-size: 24px;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 92%;
    margin-bottom: 20px
`;