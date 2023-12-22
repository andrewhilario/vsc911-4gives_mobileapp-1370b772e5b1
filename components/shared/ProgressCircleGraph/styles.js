import styled from 'styled-components/native';

import { colors } from '../../../constants/Colors';

export const ProgressCircleContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
`;

export const GraphContainer = styled.View`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
`;

export const GraphTextContainer = styled.View`
    width: 50%;
    align-items: center;
    flex-direction: row;
    margin-bottom: 5px;
`;

export const GraphLeftText = styled.Text`
    font-size: 10px;
    color: ${colors.basic.basic300};
`;
export const GraphRightText = styled.Text`
    font-size: 10px;
    color: ${colors.basic.basic300};
    margin-left: 60px;
`;

export const StatusContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const StatusIcon = styled.View`
    margin-right: 5px;
`;

export const StatusText = styled.Text`
    font-size: 10px;
    color: ${colors.basic.basic300};
`;