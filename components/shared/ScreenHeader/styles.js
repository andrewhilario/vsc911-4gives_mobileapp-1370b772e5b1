import styled from 'styled-components/native';
import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const HeaderContainer = styled.View`
    width: 92%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: ${colors.primary.primary500};
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const LogoContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
  /* Add your logo styles here */
    width: 170px;
    height: 50px;
`;

export const RightButtonContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const RightButton = styled.TouchableOpacity`
    padding: 5px;
    flex-direction: row;
    align-items: center;
`;

export const RightButtonText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 20px;
    color: ${colors.basic.white50};
    margin-left: 5px;
`;

export const RightIcon = styled.View`
    margin-bottom: 2px;
`;