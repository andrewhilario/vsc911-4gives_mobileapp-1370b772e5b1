import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const DocumentsStatusContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    background-color: ${colors.secondary.secondary300};
`;

export const DocumentsStatusTitleContainer = styled.View`
    width: 92%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-top: 50px;
`;

export const DocumentsStatusTitleText = styled.Text`
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
    align-items: center;
    width: 92%;
`;

export const LogoContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    margin-top: 20px;
`;

export const Logo = styled.Image`
    width: 190px;
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