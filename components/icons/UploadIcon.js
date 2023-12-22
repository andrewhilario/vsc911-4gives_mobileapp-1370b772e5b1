import React from 'react'
import Svg, { Path } from "react-native-svg"

const UploadIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M0 15a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM3.293 4.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L8 3.414V11a1 1 0 1 1-2 0V3.414L4.707 4.707a1 1 0 0 1-1.414 0Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default UploadIcon