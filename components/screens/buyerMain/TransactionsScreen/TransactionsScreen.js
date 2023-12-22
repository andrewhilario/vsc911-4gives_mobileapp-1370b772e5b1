import React, { useEffect } from 'react'

import { BackgroundColor1, HolderContainer, ScrollContainer, TransactionsContainer } from './styles'

import MainScreenHeader from '../../../shared/MainScreenHeader/MainScreenHeader'
import Transactions from '../../../shared/Transactions/Transactions'
import UserStore from '../../../../stores/UserStore'
import TransactionStore from '../../../../stores/TransactionStore'

const TransactionsScreen = ({navigation}) => {
  //handling first name display
  const user = UserStore(state => state.user);
  const header = `Hi, ${user.first_name}!`;

  // reset states
  const isTokenValid = TransactionStore(state => state.isTokenValid)
  const setIsTokenValid = TransactionStore((state) => state.setIsTokenInvalid)
  //for navigating to next screen
  useEffect(() => {
      if (isTokenValid === true) {
          setIsTokenValid(false)
      }
  }, [isTokenValid]);

  return (
    <TransactionsContainer>
        <BackgroundColor1 />
        <MainScreenHeader leftText={header}
          leftOnPress={() => navigation.navigate('Settings', {
              screen: 'SettingsMenu',
          })}
          firstRightButtonOnPress={() => navigation.navigate('Settings', 
          {screen: 'UserNotificationMail', params: {type: 'Notifications', key: Math.random().toString()}})}
          secondRightButtonOnPress={() => navigation.navigate('Settings', 
          {screen: 'UserNotificationMail', params: {type: 'Mail', key: Math.random().toString()}})}
        />
        <HolderContainer>
          <Transactions />
        </HolderContainer>
    </TransactionsContainer>
  )
}

export default TransactionsScreen