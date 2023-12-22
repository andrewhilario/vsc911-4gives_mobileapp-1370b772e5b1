import styled from 'styled-components/native';
import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const DashboardUnverifiedStatusContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.basic.white50};
`;

export const HeaderContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
`;

export const HeaderText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic900};
    text-align: center;
`;

export const HeaderSubText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 10px;
    color: ${colors.basic.basic500};
    text-align: center;
    width: 60%;
`;

export const GraphContainer = styled.View`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

export const BodyText = styled.Text`
    font-family: ${fonts.REGULAR};
    font-size: 14px;
    color: ${colors.basic.basic500};
`;