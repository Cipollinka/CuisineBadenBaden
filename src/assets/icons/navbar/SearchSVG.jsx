import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchSVG = ({ color = "#fff", ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            fillRule="evenodd"
            d="M14.875 2.833c.822 0 1.63.082 2.407.241a1.417 1.417 0 0 1-.564 2.777A9.209 9.209 0 1 0 23.9 16.718a1.418 1.418 0 0 1 2.777.564 12.04 12.04 0 0 1-2.064 4.679l-.28.368 5.174 5.174a1.416 1.416 0 0 1-1.87 2.122l-.133-.119-5.174-5.174a12.042 12.042 0 1 1-7.454-21.499Zm12.042-1.417a1.417 1.417 0 0 1 1.272.794l.068.166.184.535a4.251 4.251 0 0 0 2.386 2.55l.262.1.535.182a1.417 1.417 0 0 1 .167 2.612l-.167.068-.535.184a4.25 4.25 0 0 0-2.55 2.386l-.1.262-.182.536a1.416 1.416 0 0 1-2.613.165l-.067-.165-.185-.536a4.248 4.248 0 0 0-2.385-2.55l-.262-.099-.536-.183a1.416 1.416 0 0 1-.167-2.612l.167-.068.536-.184a4.25 4.25 0 0 0 2.55-2.386l.099-.262.183-.535a1.417 1.417 0 0 1 1.34-.96Zm0 4.528a7.088 7.088 0 0 1-1.14 1.14 6.99 6.99 0 0 1 1.14 1.138 6.981 6.981 0 0 1 1.139-1.139 7.08 7.08 0 0 1-1.14-1.139Z"
            clipRule="evenodd"
        />
    </Svg>
);

export default SearchSVG;
