import styled from 'styled-components/native';
import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const DashboardMenuContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.basic.white50};
`;

export const RowContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const LeftContainer = styled.View`
    width: 48%;
    padding: 8px;
    border-radius: 4px;
    background-color: ${colors.secondary.secondary100};
`;

export const LeftSubText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 10px;
    color: ${colors.basic.basic500};
`;

export const LeftText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
`;

export const RightContainer = styled.View`
    width: 48%;
    padding: 8px;
    border-radius: 4px;
    background-color: ${colors.secondary.secondary100};
`;

export const RightSubText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 10px;
    color: ${colors.basic.basic500};
    text-align: right;
`;

export const RightText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 18px;
    color: ${colors.basic.basic900};
    text-align: right;
`;

export const DashboardMenuButtonContainer = styled.TouchableOpacity`
    width: 25%;
`;

export const DashboardMenuIcon = styled.View`
    align-items: center;
    justify-content: center;
`;

export const DashboardMenuButtonText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 10px;
    color: ${colors.basic.basic900};
    text-align: center;
`;