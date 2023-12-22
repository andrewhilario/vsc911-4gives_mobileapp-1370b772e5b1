import React, { useEffect, useState } from 'react'
import { useWindowDimensions, Text } from 'react-native'
import { NumericFormat } from 'react-number-format';
import Slider from '@react-native-community/slider'

import { BreakdownContainer, ButtonContainer, CalculatorContainer, CalculatorTitleContainer, CalculatorTitleText, InstallmentCalculatorContainer, ResultBreakdownContainer, ResultBreakdownText, ResultContainer, ResultValueText, ScrollContainer, SliderContainer, SliderValueContainer, SliderValueText, TitleText, ValueText } from './styles'

import { colors } from '../../../../constants/Colors';
import ButtonText from '../../../shared/ButtonText/ButtonText';
import useGetRateAndFee from '../../../../hooks/useGetRateAndFee';

const InstallmentCalculatorScreen = () => {
    const { width } = useWindowDimensions();

    const { interestRate, transactionFee } = useGetRateAndFee();

    const [amountValue, setAmountValue] = useState(0);
    const [termValue, setTermValue] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        function compute(amountValue, termValue) {
            // Calculate total interest and total repayment
            const totalInterest = amountValue * (interestRate / 100) * termValue;
            const totalRepayment = amountValue + totalInterest;
            // Calculate monthly payment using the formula
            const monthlyPayment = (totalRepayment / termValue) + transactionFee;
            return monthlyPayment.toFixed(2);
        }
  
        setResult(compute(amountValue, termValue))
      }, [amountValue, termValue])

    return (
        <InstallmentCalculatorContainer>
            <ScrollContainer>
                <CalculatorContainer>
                    <CalculatorTitleContainer>
                        <CalculatorTitleText>Installment Calculator</CalculatorTitleText>
                    </CalculatorTitleContainer>
                    <SliderContainer>
                        <TitleText>Purchase Amount</TitleText>
                        <ValueText>
                            <NumericFormat
                                value={amountValue}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'₱ '}
                                decimalScale={2}
                                renderText={value => <Text>{value}</Text>}
                            />
                        </ValueText>
                        <Slider 
                            style={{width: width * 0.8, height: 40}}
                            minimumValue={3000}
                            maximumValue={25000}
                            step={100}
                            minimumTrackTintColor="#fecf70"
                            maximumTrackTintColor="#3d5875"
                            thumbTintColor="#fecf70"
                            value={amountValue}
                            onValueChange={(value) => setAmountValue(value)}
                        />
                        <SliderValueContainer>
                            <SliderValueText>PHP 3,000</SliderValueText>
                            <SliderValueText>PHP 25,000</SliderValueText>
                        </SliderValueContainer>
                    </SliderContainer>
                    <SliderContainer>
                        <TitleText>Terms</TitleText>
                        <ValueText>{termValue} Months</ValueText>
                        <Slider 
                            style={{width: width * 0.8, height: 40}}
                            minimumValue={3}
                            maximumValue={12}
                            step={3}
                            minimumTrackTintColor="#fecf70"
                            maximumTrackTintColor="#3d5875"
                            thumbTintColor="#fecf70"
                            value={termValue}
                            onValueChange={(value) => setTermValue(value)}
                        />
                        <SliderValueContainer>
                            <SliderValueText>3 Months</SliderValueText>
                            <SliderValueText>6 Months</SliderValueText>
                            <SliderValueText>9 Months</SliderValueText>
                            <SliderValueText>12 Months</SliderValueText>
                        </SliderValueContainer>
                    </SliderContainer>
                    {
                        amountValue && termValue ? (
                            <>
                                <ResultContainer>
                                    <TitleText>Your monthly payment will be</TitleText>
                                    <ResultValueText>
                                    <NumericFormat
                                        value={result}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'₱ '}
                                        decimalScale={2}
                                        renderText={value => <Text>{value}</Text>}
                                    />
                                    </ResultValueText>
                                    <ResultBreakdownContainer>
                                        <BreakdownContainer>
                                            <ResultBreakdownText>Duration</ResultBreakdownText>
                                            <ResultBreakdownText>{termValue} Months</ResultBreakdownText>
                                        </BreakdownContainer>
                                        <BreakdownContainer>
                                            <ResultBreakdownText>Rate</ResultBreakdownText>
                                            <ResultBreakdownText>3%</ResultBreakdownText>
                                        </BreakdownContainer>
                                        <BreakdownContainer>
                                            <ResultBreakdownText>Service Fee</ResultBreakdownText>
                                            <ResultBreakdownText>
                                                <NumericFormat
                                                    value={20}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'₱ '}
                                                    decimalScale={2}
                                                    renderText={value => <Text>{value}</Text>}
                                                />
                                            </ResultBreakdownText>
                                        </BreakdownContainer>
                                    </ResultBreakdownContainer>
                                </ResultContainer>
                                <ButtonContainer>
                                    <ButtonText buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text='Get this deal now' textSize='20'/>
                                </ButtonContainer>
                            </>
                        ) : null
                    }
                </CalculatorContainer>
            </ScrollContainer>
            
        </InstallmentCalculatorContainer>
    )
}

export default InstallmentCalculatorScreen