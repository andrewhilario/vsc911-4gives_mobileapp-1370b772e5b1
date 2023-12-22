import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const AccountSecurityContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    background-color: ${colors.secondary.secondary300};
`;

export const AccountSecurityTitleContainer = styled.View`
    width: 92%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-top: 50px;
`;

export const AccountSecurityTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
`;

export const BackContainer = styled.View`
    justify-content: center;
    margin-bottom: 5px;
`;

export const BackButton = styled.TouchableOpacity`
`;

export const FormContainer = styled.View`
    margin-top: 10px;
    width: 92%;
`;

export const SecurityOptionContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const SecurityOptionTextContainer = styled.View`
    width: 70%;
    justify-content: center;
`;

export const SecurityOptionText = styled.Text`
    font-family: ${fonts.REGULAR};
    font-size: 16px;
    color: ${colors.basic.basic900};
`;

export const SecurityOptionToggleContainer = styled.View`
    width: 30%;
    justify-content: center;
`;