import React from 'react'
import { Octicons } from '@expo/vector-icons';

import { DownloadButtonContainer, DownloadButtonText, DownloadDocumentsContainer, DownloadIcon, DownloadText, DownloadTextContainer, TransactionDownloadContainer } from './styles'

const TransactionDownloads = () => {
  return (
    <TransactionDownloadContainer>
        <DownloadDocumentsContainer>
            <DownloadTextContainer>
                <DownloadText>Contract</DownloadText>
            </DownloadTextContainer>
            <DownloadButtonContainer>
                <DownloadButtonText>Download</DownloadButtonText>
                <DownloadIcon>
                    <Octicons name="download" size={20} color="#FF873A" />
                </DownloadIcon>
            </DownloadButtonContainer>
        </DownloadDocumentsContainer>
        <DownloadDocumentsContainer>
            <DownloadTextContainer>
                <DownloadText>Promissory Note</DownloadText>
            </DownloadTextContainer>
            <DownloadButtonContainer>
                <DownloadButtonText>Download</DownloadButtonText>
                <DownloadIcon>
                    <Octicons name="download" size={20} color="#FF873A" />
                </DownloadIcon>
            </DownloadButtonContainer>
        </DownloadDocumentsContainer>
    </TransactionDownloadContainer>
  )
}

export default TransactionDownloads