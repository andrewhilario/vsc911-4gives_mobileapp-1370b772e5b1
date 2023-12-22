import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list'

import { DivisionHeader, DropDownContainer, DropdownTitle, PickerContainer } from './styles'

import { fonts } from '../../../constants/Fonts';

const CustomDropdown = ({ data, title, width='100%', size='14px', isBold=false, customColor='#1A1717', 
    onValueChange, selectedValue, haveDivisions=false, variant='label-value' }) => {
    
    //variants: address, label-value, non-label-value
    console.log(selectedValue)

    const groupedItems = [];

    if(haveDivisions){
        data.forEach((item) => {
            const existingGroup = groupedItems.find((group) => group.key === item.key);
    
            if (existingGroup) {
            existingGroup.items.push(item);
            } else {
            groupedItems.push({
                key: item.key,
                items: [item],
            });
            }
        });
    
        console.log(groupedItems)
    }   
    

    return (
        <DropDownContainer width={width}>
            {   title && <DropdownTitle size={size} isBold={isBold} customColor={customColor}>{title}</DropdownTitle> }
            <PickerContainer customColor={customColor}>
                <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => onValueChange(itemValue)
                }>
                    {
                        variant === 'address' ? (
                            groupedItems.map(({ key, items }) => [
                                <React.Fragment key={key}>
                                    <DivisionHeader>{key}</DivisionHeader>
                                    {items.map((item) => (
                                    <Picker.Item key={item.value} label={item.label} value={item.value} fontFamily='Poppins_500Medium' />
                                    ))}
                                </React.Fragment>
                                // <DivisionHeader>{key}</DivisionHeader>,
                                // items.map((item) => (
                                //   <Picker.Item key={item.value} label={item.label} value={item.value} 
                                //   fontFamily='Poppins_500Medium'/>
                                // )),
                            ])
                        ) : variant === 'label-value' ? (
                            data?.map((item, index) => (
                                <Picker.Item label={item.label} value={item.value} key={index}
                                fontFamily='Poppins_500Medium'/>
                            ))
                        ) : variant === 'name-id' ? (
                            data?.map((item, index) => (
                                <Picker.Item label={item.name} value={item.id} key={index}
                                fontFamily='Poppins_500Medium'/>
                            ))
                        ) : variant === 'non-label-value' ? (
                            data?.map((item, index) => (
                                <Picker.Item label={item.name} value={item.name} key={index}
                                fontFamily='Poppins_500Medium'/>
                            ))
                        ) : null
                    }
                </Picker>
            </PickerContainer>
            
            {/* <SelectList 
                placeholder={placeholderText ? placeholderText : 'Select'}
                setSelected={(val) => setSelectedValue(val)}
                data={data} 
                save="value"
                boxStyles={{backgroundColor: 'white', borderWidth: 2, borderRadius: 8, borderColor: customColor, height: 56, alignItems: 'center'}}
                fontFamily={fonts.REGULAR}
                dropdownStyles={{backgroundColor: 'white', borderColor: customColor}}
                maxHeight={100}
                search={false}
            /> */}
        </DropDownContainer>
        
    )
}

export default CustomDropdown