import React from 'react'
import { ButtonImageTextContainer, PreviewImage, PreviewImageContainer, ButtonTitle } from './styles'

const ButtonImageText = ({width, height, imgSource, imgHeight, title, titleSize, titleType, onPress}) => {
    return (
        <ButtonImageTextContainer width={width} height={height} onPress={onPress}>
            <PreviewImageContainer>
                <PreviewImage source={imgSource} imgHeight={imgHeight}/>
            </PreviewImageContainer>
            <ButtonTitle titleSize={titleSize} titleType={titleType}>{title}</ButtonTitle>
        </ButtonImageTextContainer>
    )
}

export default ButtonImageText