import React from 'react'
import Svg, { Path } from "react-native-svg"

const CopyIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M4.444 1.778h6.93c.99 0 1.35.103 1.711.297.362.193.647.478.84.84.194.361.297.72.297 1.712v6.929a.889.889 0 0 0 1.778 0V4.558c0-1.585-.165-2.16-.475-2.74A3.23 3.23 0 0 0 14.181.476C13.601.165 13.027 0 11.441 0H4.445a.889.889 0 1 0 0 1.778Zm6.864 2.074c-.362-.193-.721-.296-1.712-.296H2.849c-.991 0-1.35.103-1.712.296a2.02 2.02 0 0 0-.84.84C.103 5.054 0 5.413 0 6.404v6.747c0 .99.103 1.35.297 1.712.194.362.478.646.84.84.362.194.72.297 1.712.297h6.747c.99 0 1.35-.103 1.712-.297.361-.194.646-.478.84-.84.193-.362.296-.72.296-1.712V6.404c0-.99-.103-1.35-.296-1.712a2.02 2.02 0 0 0-.84-.84Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default CopyIcon