import styled from 'styled-components/native';



export const TransactionDownloadContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const DownloadDocumentsContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const DownloadTextContainer = styled.View`
    width: 100px;
    margin: 0px 10px 0px 10px;
    justify-content: center;
`;

export const DownloadButtonContainer = styled.TouchableOpacity`
    width: 100px;
    margin: 0px 10px 0px 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const DownloadIcon = styled.View`
    margin-left: 10px;
`;

export const DownloadText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const DownloadButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FF873A;
`;