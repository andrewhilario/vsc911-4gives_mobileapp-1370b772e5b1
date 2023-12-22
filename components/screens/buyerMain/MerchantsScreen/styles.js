import styled from 'styled-components/native';
import { Container } from '../../../../common/Styles'
import { colors } from '../../../../constants/Colors';
import { fonts } from '../../../../constants/Fonts';

export const MerchantsContainer = styled(Container)`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    padding-bottom: 20px;
    background-color: ${colors.primary.primary500};
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    width: 92%;
    margin-top: 60px;
`;

export const MerchantContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 10px;
    border-radius: 8px;
    background-color: ${colors.tertiary.tertiary50};
`;

export const MerchantsTitleContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom-width: 2px;
    border-bottom-color: ${colors.secondary.secondary300};
    margin-bottom: 10px;
`;

export const MerchantsTitleText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 16px;
    color: ${colors.basic.basic500};
`;

export const ViewButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ViewButtonText= styled.Text`
    font-size: 14px;
    color: #FF873A;
    margin-right: 5px;
`;

export const ViewIcon = styled.View``;

export const SearchBarContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    margin-top: 5px;
    border-radius: 8px;
    border-width: 2px;
    border-color: ${colors.basic.basic200};
`;

export const SearchBarInput = styled.TextInput`
    flex: 1;
    font-size: 14px;
    font-family: ${fonts.REGULAR};
    color: #234791;
    padding-left: 8px;
`;

export const SearchIcon = styled.View``;

export const MerchantListContainer = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
`;

export const MerchantButtonContainer = styled.View`
    width: 30%;
    height: 80px;
    margin: 5px;
    align-items: center;
    justify-content: center;
`;

export const MerchantButtonImageContainer = styled.View`
    width: 72px;
    height: 72px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const StyledImage = styled.Image`
    width: 72px;
    height: 72px;
    object-fit: cover;
`;

export const MerchantButtonText = styled.Text`
    font-family: ${fonts.MEDIUM};
    font-size: 10px;
    color: ${colors.basic.basic900};
    text-align: center;
`;