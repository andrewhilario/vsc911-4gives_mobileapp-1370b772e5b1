import React from 'react'
import Svg, { Path } from "react-native-svg"

const MailIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        d="M1 14.5A1.5 1.5 0 0 0 2.5 16h9a1.5 1.5 0 0 0 1.5-1.5V4H1v10.5Zm8.5-8a.5.5 0 1 1 1 0v7a.5.5 0 0 1-1 0v-7Zm-3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Zm-3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Zm10-5.5H9.75L9.456.416A.75.75 0 0 0 8.784 0H5.212a.741.741 0 0 0-.668.416L4.25 1H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z"
        />
    </Svg>
}

export default MailIcon