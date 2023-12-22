import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

import { DateButtonContainer, DatePickerContainer, DatePickerTitle, DateText, DateTextContainer, RowContainer } from './styles'

import { colors } from '../../../constants/Colors';

import ButtonText from '../ButtonText/ButtonText';

const DatePicker = ({title, onSelectDate, enteredDate}) => {
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, value) => {
        if (event.type === 'set' && value) {
            setDate(value);

            const year = value.getFullYear();
            const month = String(value.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(value.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;

            onSelectDate(formattedDate);
        }
        setIsPickerShow(false);
    };

    const formattedDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };
    
    return (
        <DatePickerContainer>
            <DatePickerTitle>{title}</DatePickerTitle>
            <RowContainer>
                <DateButtonContainer>
                    <ButtonText width='100%' buttonColor={colors.primary.primary500} textColor={colors.basic.white50} type='filled' text={enteredDate ? enteredDate : date ? formattedDate(date) : 'Show Picker'} 
                        textSize='14' onPress={showPicker}/>
                </DateButtonContainer>
            </RowContainer>
            {
                isPickerShow && <DateTimePicker value={date} mode='date' display='calendar' onChange={onChange}/>
            }
        </DatePickerContainer>
    )
}

export default DatePicker