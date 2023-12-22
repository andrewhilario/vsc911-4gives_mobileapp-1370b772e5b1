import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const AccountDetailsMenuContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    background-color: ${colors.basic.white50};
`;

export const AccountDetailsMenuTitleContainer = styled.View`
    width: 92%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-top: 50px;
`;

export const AccountDetailsMenuTitleText = styled.Text`
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

export const DetailsOptionContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const DetailsOptionTextContainer = styled.View`
    width: 70%;
    justify-content: center;
`;

export const DetailsOptionText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic900};
`;

export const DetailsOptionButtonContainer = styled.View`
    width: 30%;
    align-items: flex-end;
    justify-content: center;
`;

export const DetailsOptionButton = styled.TouchableOpacity`
`;