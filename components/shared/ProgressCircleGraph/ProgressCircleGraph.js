import React from 'react'
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { AntDesign } from '@expo/vector-icons';

import { GraphContainer, GraphLeftText, GraphRightText, GraphTextContainer, ProgressCircleContainer, ProgressCircleGraphContainer, StatusContainer, StatusIcon, StatusText } from './styles'

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

const {width, height} = Dimensions.get("window")

const ProgressCircleGraph = ({scoreValue}) => {
  console.log('credit score', scoreValue)

  return (
    <ProgressCircleContainer>
      <GraphContainer>
      <AnimatedCircularProgress
        size={100}
        width={10}
        backgroundWidth={10}
        fill={scoreValue ? scoreValue : 0}
        tintColor={colors.tertiary.tertiary500}
        tintColorSecondary={colors.tertiary.tertiary500}
        backgroundColor={colors.basic.basic100}
        arcSweepAngle={240}
        rotation={240}
        >
        {scoreValue => 
          <>
            <Text style={{fontFamily: fonts.MEDIUM, fontSize: 16}}>{scoreValue ? Math.round(scoreValue) : '0'}</Text>
            <Text style={{fontFamily: fonts.MEDIUM, fontSize: 10}}>{scoreValue ? 'Excellent' : 'N/A'}</Text>
          </>
        }
      </AnimatedCircularProgress>
      </GraphContainer>
      <GraphTextContainer>
        <GraphLeftText>0</GraphLeftText>
        <GraphRightText>100</GraphRightText>
      </GraphTextContainer>
      <StatusContainer>
        <StatusIcon>
          <AntDesign name="arrowup" size={15} color={colors.basic.basic300}/>
        </StatusIcon>
        <StatusText>12 Points - This Month</StatusText>
      </StatusContainer>
    </ProgressCircleContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  canvas: {
    flex: 1,
    backgroundColor: "green",
  },
  cursor: {
    backgroundColor: "green",
  },
  ghost: {
    flex: 2,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProgressCircleGraph