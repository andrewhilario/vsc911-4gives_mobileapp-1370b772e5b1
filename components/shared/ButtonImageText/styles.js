import styled from "styled-components/native";

export const ButtonImageTextContainer = styled.TouchableOpacity`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: 10px;
    border-radius: 10px;
    background-color: #F8F8F8;
    justify-content: center;
    align-items: center;
    elevation: 2;
    margin-bottom: 20px;
`;

export const PreviewImageContainer = styled.View`
    width: 90%;
    height: 170px;
    overflow: hidden;
`;

export const PreviewImage = styled.Image`
    width: 100%;
    height: ${({ imgHeight }) => imgHeight};;
    border-radius: 8px;
    object-fit: contain;
`;

export const ButtonTitle = styled.Text`
    font-size: ${({ titleSize }) => titleSize};
    font-weight: ${({ titleType }) => (titleType === 'bold' ? 'bold' : 'normal')};
    margin-bottom: 40px;
    color: #FF873A;
    text-align: center;
`;