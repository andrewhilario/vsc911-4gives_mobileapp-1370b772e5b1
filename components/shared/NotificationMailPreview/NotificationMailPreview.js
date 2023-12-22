import React from 'react'
import { useNavigation } from "@react-navigation/native";

import { Circle, DateTimeContainer, DateTimeText, MessageText, NotificationMailItemHolder, NotificationMailPreviewContainer } from './styles'

import useFormatDate from '../../../hooks/useFormatDate';

import UserStore from '../../../stores/UserStore';
import TransactionStore from '../../../stores/TransactionStore';

const NotificationMailPreview = ({ data, sortUnread = false }) => {
  //navigation
  const navigation = useNavigation();

  const userToken = UserStore(state => state.userToken)
  //handle notifs
  const handlePress = async(proposalID) => {
    console.log(proposalID)
    try{
      navigation.navigate('Buyer', {
        screen: 'OfferDetails',
        params: {
          proposalID: proposalID
        }
      })
    }catch(error){
      console.log(error)
    }
  }

  const unread = data.filter(item => item.status === 'unread');

  return (
    <NotificationMailPreviewContainer>
      {
        sortUnread === true ? (
          unread.map((item, index) => (
            <NotificationMailItemHolder key={index} isUnread={item.read === false}
            onPress={() => { handlePress(item.data.proposal_id); }}>
              <MessageText>{item.message}</MessageText>
              <DateTimeContainer>
                <DateTimeText isUnread={item.status === 'unread'}>{useFormatDate(item.created, 'numbers')}</DateTimeText>
                <Circle isUnread={item.read === false}/>
                <DateTimeText isUnread={item.status === 'unread'}>{useFormatDate(item.created, 'time')}</DateTimeText>
              </DateTimeContainer>
            </NotificationMailItemHolder>
          ))
        ) : (
          data.map((item, index) => (
            <NotificationMailItemHolder key={index} isUnread={item.read === false}
            onPress={() => { handlePress(item.data.proposal_id); }}>
              <MessageText>{item.message}</MessageText>
              <DateTimeContainer>
                <DateTimeText isUnread={item.read === false}>{useFormatDate(item.created, 'numbers')}</DateTimeText>
                <Circle isUnread={item.read === false}/>
                <DateTimeText isUnread={item.read === false}>{useFormatDate(item.created, 'time')}</DateTimeText>
              </DateTimeContainer>
            </NotificationMailItemHolder>
          ))
        )
      }
      
    </NotificationMailPreviewContainer>
  )
}

export default NotificationMailPreview