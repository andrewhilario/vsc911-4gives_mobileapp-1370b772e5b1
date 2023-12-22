import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'

export const FingerBiometricsContainer = styled(Container)`
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

export const FormContainer = styled.View`
    margin-top: 10px;
    width: 85%;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 20px;
`;