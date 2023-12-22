import React from 'react'
import Svg, { Circle } from "react-native-svg"

const StackMenuIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Circle cx={2} cy={2} r={2} fill={color} />
        <Circle cx={2} cy={8} r={2} fill={color} />
        <Circle cx={2} cy={14} r={2} fill={color} />
    </Svg>
}

export default StackMenuIcon