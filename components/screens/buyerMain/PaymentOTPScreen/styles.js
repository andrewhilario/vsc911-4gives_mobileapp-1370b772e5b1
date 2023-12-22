import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'

import { fonts } from '../../../../constants/Fonts';
import { colors } from '../../../../constants/Colors';

export const PaymentOTPContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    background-color: ${colors.primary.primary500};
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    width: 92%;
`;

export const FormContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.basic.white50};
`;

export const OtpTitleContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
`;

export const OtpTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
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
    margin-bottom: 20px;
`;

export const FooterContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const FooterSubText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${colors.basic.basic900};
`;

export const FooterColoredSubText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${colors.primary.primary300};
    margin-left: 5px;
`;

export const LogoContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    margin-top: 20px;
`;

export const Logo = styled.Image`
    width: 200px;
    height: 150px;
`;

export const FormTextContainer = styled.View`
    margin-bottom: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const FormText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: ${({ size }) => `${size}px`};
    color: ${({ color }) => color};
    text-align: center;
`;