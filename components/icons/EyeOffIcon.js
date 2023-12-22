import React from 'react'
import Svg, { Path } from "react-native-svg"

const EyeOffIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M3.254.281a1.002 1.002 0 0 0-1.416 1.416L15.859 15.72a1.002 1.002 0 0 0 1.417-1.416L15.8 12.827A10.029 10.029 0 0 0 19.113 8C17.837 3.937 14.041.99 9.557.99a9.973 9.973 0 0 0-4.52 1.075L3.256.28h-.001Zm4.268 4.267 1.516 1.517a2.006 2.006 0 0 1 2.454 2.454l1.516 1.516A4.006 4.006 0 0 0 7.522 4.55v-.001Z"
        clipRule="evenodd"
        />
        <Path
        fill={color}
        d="m12.014 14.707-2.708-2.709A4.006 4.006 0 0 1 5.56 8.251l-3.68-3.678A9.995 9.995 0 0 0 0 8c1.276 4.063 5.073 7.01 9.557 7.01.848 0 1.671-.104 2.457-.303Z"
        />
    </Svg>
}

export default EyeOffIcon