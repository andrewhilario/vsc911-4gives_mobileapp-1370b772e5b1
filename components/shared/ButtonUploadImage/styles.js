import styled, { css } from 'styled-components/native';

import { colors } from '../../../constants/Colors';
import { fonts } from '../../../constants/Fonts';

export const ButtonUploadImageContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-family: ${fonts.MEDIUM};
  font-size: 14px;
  color: ${colors.basic.basic900};
`;

export const HolderContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ProfilePhotoContainer = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: ${colors.primary.primary500};
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  width: 300px;
  height: 200px;
  border-width: 1px;
  border-color: ${colors.primary.primary500};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

export const StyledImage = styled.Image`
  flex: 1;
  object-fit: contain;
`;

export const UploadButton = styled.TouchableOpacity`
  background-color: ${colors.primary.primary500};
  padding: 6px;
  border-radius: 10px;
  width: 60%;
  margin-bottom: 20px;
  
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.MEDIUM};
  font-size: 16px;
  color: ${colors.basic.white50};
  text-align: center;
`;