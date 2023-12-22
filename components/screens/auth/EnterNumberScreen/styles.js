import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'

export const EnterNumberContainer = styled(Container)`
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
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #FF873A;
`;

export const HeaderText = styled.Text`
    font-size: 15px;
    margin-bottom: 10px;
    color: black;
`;

export const FormContainer = styled.View`
    margin-top: 10px;
    width: 85%;
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 92%;
    margin-bottom: 20px
`;