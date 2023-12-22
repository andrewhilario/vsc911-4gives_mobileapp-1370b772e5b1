import React from 'react'
import Svg, { Path } from "react-native-svg"

const BellIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        d="M6.4 1.371A5.486 5.486 0 0 0 .914 6.857v3.279l-.646.646a.914.914 0 0 0 .646 1.56h10.972a.915.915 0 0 0 .646-1.56l-.646-.646V6.857A5.486 5.486 0 0 0 6.4 1.371ZM6.4 16a2.743 2.743 0 0 1-2.743-2.743h5.486A2.743 2.743 0 0 1 6.4 16Z"
        />
        <Path
        fill={color}
        d="M4.46.803a2.743 2.743 0 0 1 4.683 1.94H3.657c0-.728.289-1.425.803-1.94Z"
        />
    </Svg>
}

export default BellIcon