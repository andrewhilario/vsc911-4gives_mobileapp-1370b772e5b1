import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const InstallmentCalculatorContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    background-color: ${colors.primary.primary500};
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    width: 92%;
    margin-top: 60px;
`;

export const CalculatorContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.tertiary.tertiary50};
`;

export const CalculatorTitleContainer = styled.View`
    width: 100%;
    border-bottom-width: 2px;
    border-bottom-color:  ${colors.secondary.secondary300};
    margin-bottom: 10px;
`;

export const CalculatorTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic500};
`;

export const SliderContainer = styled.View`
    width: 100%;
    height: 130px;
    margin-bottom: 10px;
`;

export const TitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic500};
    margin-bottom: 5px;
`;

export const ValueText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 20px;
    color: ${colors.basic.basic900};
    margin-bottom: 5px;
`;

export const SliderValueContainer = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const SliderValueText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 10px;
    color: ${colors.basic.basic300};
    margin-bottom: 5px;
`;

export const ResultContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #fecf70;
    padding: 20px;
    margin-bottom: 15px;
`;

export const ResultValueText = styled.Text`
    font-family: ${fonts.BOLD};
    font-size: 32px;
    color: ${colors.basic.basic900};
    margin-bottom: 10px;
`;

export const ResultBreakdownContainer = styled.View`
    width: 85%;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const BreakdownContainer = styled.View`
    width: 30%;
    justify-content: center;
    align-items: center;
`;

export const ResultBreakdownText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 12px;
    color: ${colors.basic.basic500};
`;

export const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
`;