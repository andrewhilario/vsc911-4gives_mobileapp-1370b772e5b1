import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'

import { fonts } from '../../../../constants/Fonts';
import { colors } from '../../../../constants/Colors';

export const SignUpConfirmationContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    background-color: ${colors.secondary.secondary500};
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

export const FieldsContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

export const RowContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const FieldContainer = styled.View`
    width: ${({ width }) => width};
    margin-bottom: 15px;
`;

export const FieldTitleText = styled.Text`
    font-size: 12px;
`;

export const FieldLabelText = styled.Text`
    font-size: 18px;
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