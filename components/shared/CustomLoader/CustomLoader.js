import React from 'react'
import { ActivityIndicator, Modal } from 'react-native'
import { LoaderContainer, ModalContainer, Overlay } from './styles'

const CustomLoader = ({ visible }) => {
    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <ModalContainer>
                <Overlay>
                    <LoaderContainer>
                        <ActivityIndicator size="large" color="#FF873A"/>
                    </LoaderContainer>
                </Overlay>
            </ModalContainer>
        </Modal>
    )
}

export default CustomLoader