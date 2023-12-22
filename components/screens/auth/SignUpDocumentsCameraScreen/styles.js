import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const SignUpDocumentsCameraContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    background-color: ${colors.secondary.secondary300};
`;

export const SignUpDocumentsCameraTitleContainer = styled.View`
    width: 92%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    margin-top: 50px;
`;

export const SignUpDocumentsCameraTitleText = styled.Text`
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
    margin-top: 5px;
    width: 92%;
    align-items: center;
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

export const CameraContainer = styled.View`
    width: 90%;
    height: 55%;
    border-radius: 5000px;
    border-width: 8px;
    border-color: ${colors.primary.primary500};
    overflow: hidden;
    margin-bottom: 20px;
`;

export const ImageContainer = styled.View`
    width: 90%;
    height: 55%;
    border-width: 8px;
    border-color: ${colors.primary.primary500};
    border-radius: 5000px;
    overflow: hidden;
    margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10px
`;