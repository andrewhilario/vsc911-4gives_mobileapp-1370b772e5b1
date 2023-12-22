import styled from 'styled-components/native';

import { fonts } from '../../../../constants/Fonts';
import { colors } from '../../../../constants/Colors';
import { Container } from '../../../../common/Styles'

export const LoginStatusContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    background-color: ${colors.primary.primary500};
`;

export const LogoContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 25px;
`;

export const Logo = styled.Image`
    width: 180px;
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

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    width: 100%;
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
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;