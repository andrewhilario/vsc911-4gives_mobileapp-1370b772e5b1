import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

import { FileContainer, FileIconContainer, FileItemsContainer, FileNameContainer, FileNameText, FileSizeContainer, FileSizeText, FileTextContainer } from './styles'
import { colors } from '../../../constants/Colors';
import BuyerAuthStore from '../../../stores/BuyerAuthStore';
import UserStore from '../../../stores/UserStore';

const UploadedFileCard = ({fileName, fileSize, type, screen, onPress}) => {
  const clearUpload = BuyerAuthStore((state) => state.clearUpload)
  const clearUpload_user = UserStore((state) => state.clearUpload)

  const handleClear = () => {
    if(screen === 'SignUpDocuments'){
      clearUpload(type)
    }else{
      clearUpload_user(type)
    }
  }
  return (
    <FileContainer>
        <FileItemsContainer>
            <FileTextContainer>
              <FileNameContainer>
                <FileNameText>{fileName}</FileNameText>
              </FileNameContainer>
              { fileSize &&  
                <FileSizeContainer>
                  <FileSizeText>{fileSize}</FileSizeText>
                </FileSizeContainer>
              }
            </FileTextContainer>
            <FileIconContainer onPress={onPress ? onPress : handleClear}>
                <FontAwesome name="trash" size={24} color={colors.primary.primary500} />
            </FileIconContainer>
        </FileItemsContainer>
    </FileContainer>
  )
}

export default UploadedFileCard