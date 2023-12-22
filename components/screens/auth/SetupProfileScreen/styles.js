import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'

import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const SetupProfileContainer = styled(Container)`
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

export const HeaderContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const HeaderIconContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    background-color: #FF873A;
    border-radius: 100px;
    width: 50px;
    height: 50px;
`;

export const HeaderTitle = styled.Text`
    font-family: ${fonts.BOLD};
    font-size: 32px;
    text-align: center;
    color: ${colors.basic.basic900};
    margin-bottom: 5px;
`;

export const FormContainer = styled.ScrollView`
    flex-grow: 0;
    width: 92%;
    margin-top: 5px;
    margin-bottom: 10px;
    height: 450px;
`;

export const GenderContainer = styled.View`
    margin-bottom: 10px;
`;

export const GenderSelectorContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const GenderTitle = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 14px;
    color: ${colors.primary.primary300};
`;

export const GenderButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 30px;
`;

export const GenderButton = styled.TouchableOpacity`
    width: 15px;
    height: 15px;
    border-radius: 100px;
    border-width: 2px;
    border-color: ${colors.primary.primary500};
    background-color: ${(props) => (props.selected ? colors.primary.primary500 : colors.basic.white50)};
`;

export const GenderText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic300};
    margin-right: 10px;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 20px;
`;