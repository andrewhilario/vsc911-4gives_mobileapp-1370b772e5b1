import styled from 'styled-components/native';
import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const HeaderContainer = styled.View`
    width: 90%;
    height: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary.primary500};
    margin-top: 40px;
    /* background-color: red; */
`;

export const LogoContainer = styled.View`
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    border-width: 2px;
    border-color: ${colors.basic.white50};
    overflow: hidden;
    margin-bottom: 5px;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 46px;
    object-fit: contain;
`;

export const LeftButton = styled.TouchableOpacity`
    padding: 5px;
    margin-left: 5px;
`;

export const LeftButtonContainer = styled.View`
    width: 70%;
    flex-direction: row;
    align-items: flex-end;
    /* background-color: gray; */
`;

export const LeftTextContainer = styled.View`
    width: 60%;
    margin: 20px 5px 20px 5px;
`;

export const LeftText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.white50};
    padding: 5px;
`;

export const RightButtonContainer = styled.View`
    width: 30%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* background-color: yellow; */
`;

export const RightButton = styled.TouchableOpacity`
    padding: 5px;
    margin-right: 10px;
    /* background-color: green; */
`;