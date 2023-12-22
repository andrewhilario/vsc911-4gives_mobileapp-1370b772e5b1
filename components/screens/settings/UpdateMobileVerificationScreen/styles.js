import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'

import { fonts } from '../../../../constants/Fonts';
import { colors } from '../../../../constants/Colors';

export const UpdateMobileVerificationContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    background-color: ${colors.secondary.secondary300};
`;

export const LogoContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 25px;
`;

export const Logo = styled.Image`
    width: 150px;
    height: 150px;
`;

export const FormViewContainer = styled.View`
    width: 92%;
    flex: 1;
    border-radius: 16px 16px 0px 0px;
    background-color: ${colors.basic.white50};
    padding: 24px 24px 0px 24px;
    margin-top: 10px;
`;

export const HeaderContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
`;

export const HeaderText = styled.Text`
    font-family: ${fonts.BOLD};
    font-size: 32px;
    text-align: center;
    color: ${colors.basic.basic900};
`;

export const HeaderSubText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${colors.basic.basic300};
    text-align: center;
`;

export const OtpInputContainer = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`;

export const OtpInput = styled.TextInput`
    width: 45px;
    height: 60px;
    margin: 5px;
    border-width: 2px;
    border-color: ${({ isFilled }) => isFilled  ? colors.basic.basic900 : colors.basic.basic300};
    border-radius: 8px;
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${colors.basic.basic900};
    text-align: center;
`;

export const TimerText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${colors.basic.basic900};
    text-align: center;
    margin: 5px 0px 20px 0px;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px
`;