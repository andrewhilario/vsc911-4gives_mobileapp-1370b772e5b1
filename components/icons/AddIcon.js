import React from 'react'
import Svg, { Path } from "react-native-svg"

const AddIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M8 0a1.6 1.6 0 0 1 1.6 1.6v4.8h4.8a1.6 1.6 0 0 1 0 3.2H9.6v4.8a1.6 1.6 0 0 1-3.2 0V9.6H1.6a1.6 1.6 0 1 1 0-3.2h4.8V1.6A1.6 1.6 0 0 1 8 0Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default AddIcon