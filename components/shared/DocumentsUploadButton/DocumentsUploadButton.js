import React from 'react'
import { Octicons } from '@expo/vector-icons';

import { colors } from '../../../constants/Colors'
import { PromptContainer, PromptIconContainer, PromptText, PromptTextContainer, UploadContainer } from './styles'

const DocumentsUploadButton = ({onPress, text, variant}) => {
  return (
    <UploadContainer onPress={onPress}>
        <PromptContainer>
            <PromptIconContainer>
                {
                    variant === 'documents' ? (
                        <Octicons name="upload" size={24} color={colors.basic.basic200} />
                    ) : variant === 'selfie' ? (
                        <Octicons name="device-camera" size={24} color={colors.basic.basic200}/>
                    ) : null
                }
            </PromptIconContainer>
            <PromptTextContainer>
                <PromptText>{text}</PromptText>
            </PromptTextContainer>
        </PromptContainer>
    </UploadContainer>
  )
}

export default DocumentsUploadButton