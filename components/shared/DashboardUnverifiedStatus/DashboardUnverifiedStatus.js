import React from 'react'
import { Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { BodyText, DashboardUnverifiedStatusContainer, GraphContainer, HeaderContainer, HeaderSubText, HeaderText } from './styles'

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

import UserStore from '../../../stores/UserStore';

const DashboardUnverifiedStatus = () => {
    const user = UserStore(state => state.user);
    const header = `Welcome back, ${user.first_name}!`;
    const fill = 70;

    return (
        <DashboardUnverifiedStatusContainer>
            <HeaderContainer>
                <HeaderText>{header}</HeaderText>
                <HeaderSubText>Complete your profile to get verified and have access to more features.</HeaderSubText>
            </HeaderContainer>
            <GraphContainer>
                <AnimatedCircularProgress
                    size={100}
                    width={10}
                    backgroundWidth={10}
                    fill={fill}
                    tintColor={colors.tertiary.tertiary500}
                    tintColorSecondary={colors.tertiary.tertiary500}
                    backgroundColor={colors.basic.basic100}
                    arcSweepAngle={360}
                    rotation={180}
                    >
                    {fill => 
                    <>
                        <Text style={{fontFamily: fonts.MEDIUM, fontSize: 16}}>{Math.round(fill)}%</Text>
                        <Text style={{fontFamily: fonts.MEDIUM, fontSize: 10}}>Completed</Text>
                    </>
                    }
                </AnimatedCircularProgress>
            </GraphContainer>
            <HeaderContainer>
                <BodyText>1. Lorem ipsum dolor sit amet, consectetur</BodyText>
                <BodyText>2. Lorem ipsum dolor sit amet, consectetur</BodyText>
                <BodyText>3. Lorem ipsum dolor sit amet, consectetur</BodyText>
            </HeaderContainer>
        </DashboardUnverifiedStatusContainer>
    )
}

export default DashboardUnverifiedStatus