import React from 'react'
import { CreditScoreBodyContainer, CreditScoreBodyText, CreditScoreContainer, CreditScoreRowContainer, CreditScoreTitleContainer, CreditScoreTitleText } from './styles'

import { colors } from '../../../constants/Colors'
import ProgressCircleGraph from '../ProgressCircleGraph/ProgressCircleGraph'

const CreditScore = ({creditScoreValue}) => {
    return (
        <CreditScoreContainer>
            <CreditScoreTitleContainer>
                <CreditScoreTitleText>Credit Score</CreditScoreTitleText>
            </CreditScoreTitleContainer>
            <CreditScoreRowContainer>
                <CreditScoreBodyContainer>
                    <CreditScoreBodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.</CreditScoreBodyText>
                    <CreditScoreBodyText color={colors.primary.primary300}>Learn more.</CreditScoreBodyText>
                </CreditScoreBodyContainer>
                <CreditScoreBodyContainer>
                    <ProgressCircleGraph scoreValue={creditScoreValue}/>
                </CreditScoreBodyContainer>
            </CreditScoreRowContainer>
        </CreditScoreContainer>
  )
}

export default CreditScore