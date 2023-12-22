import React from 'react'
import Svg, { Path } from "react-native-svg"

const CalendarIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M2.149 2.834a.777.777 0 0 0-.778.777v10.24c0 .43.348.778.778.778h10.24c.429 0 .777-.348.777-.778V3.611a.777.777 0 0 0-.777-.777H2.149ZM0 3.611c0-1.186.962-2.148 2.149-2.148h10.24c1.186 0 2.148.962 2.148 2.148v10.24A2.149 2.149 0 0 1 12.39 16H2.149A2.149 2.149 0 0 1 0 13.851V3.611Z"
        clipRule="evenodd"
        />
        <Path
        fill={color}
        fillRule="evenodd"
        d="M10.194 0c.379 0 .686.307.686.686V3.61a.686.686 0 1 1-1.371 0V.686c0-.379.307-.686.685-.686ZM4.343 0c.379 0 .686.307.686.686V3.61a.686.686 0 1 1-1.372 0V.686c0-.379.307-.686.686-.686ZM0 6.537c0-.379.307-.686.686-.686H13.85a.686.686 0 0 1 0 1.372H.686A.686.686 0 0 1 0 6.537Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default CalendarIcon