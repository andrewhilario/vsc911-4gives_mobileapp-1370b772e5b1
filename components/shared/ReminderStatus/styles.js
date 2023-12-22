import styled from 'styled-components/native';

export const ReminderStatusContainer = styled.View`
    width: 90%;
    height: 47px;
    background-color: rgba(255, 135, 58, 0.4);
    border-radius: 10px;
    border-width: 1px;
    border-color: rgba(255, 135, 58, 1);
    flex-direction: row;
    align-items: center;
`;

export const IconContainer = styled.View`
    width: 25px;
    height: 25px;
    margin-left: 10px; 
`;

export const ReminderTextContainer = styled.View`
    margin-left: 20px;
    width: 82%;
`;

export const ReminderText = styled.Text`
    font-size: 13px;
`;