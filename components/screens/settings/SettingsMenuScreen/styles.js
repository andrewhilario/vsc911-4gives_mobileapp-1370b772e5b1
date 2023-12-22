import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const SettingsMenuContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    background-color: ${colors.basic.white50};
`;

export const HeaderContainer = styled.View`
    width: 90%;
    height: 70px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

export const LeftContainer = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const LeftLogoContainer = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding: 5px;
`;

export const LogoContainer = styled.View`
    width: 59px;
    height: 59px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    border-width: 2px;
    border-color: ${colors.primary.primary500};
    overflow: hidden;
`;

export const Logo = styled.Image`
    width: 58px;
    height: 58px;
    object-fit: contain;
`;

export const LeftTextContainer = styled.View`
    width: 70%;
    margin: 20px 5px 20px 5px;
`;

export const LeftText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
    padding-left: 10px;
    flex-shrink: 1;
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    width: 90%;
    margin-top: 20px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const ButtonTextContainer = styled.View`
    width: 90%;
    justify-content: center;
    margin-left: 20px;
`;

export const ButtonText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${({ color }) => color};
`;

export const IconContainer = styled.View`
    width: 10%;
    justify-content: center;
    align-items: center;
`;

export const BottomBorder = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.secondary.secondary300};
    margin-top: 5px;
    margin-bottom: 15px;
`;