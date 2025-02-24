import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SeatSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="none"
        {...props}
    >
        <Path
            fill="#CDA568"
            fillRule="evenodd"
            d="M9.408 22.956c1.821.228 3.882.57 5.955 1.089 3.194.798 5.965 2.373 7.947 3.753l.63.452.57.428.502.4.437.36.522.453c1.313 1.17.334 3.109-1.195 3.109H11.883a7.5 7.5 0 0 1-5.856-2.814c-1.173-1.467-1.741-3.293-.825-5.069.743-1.437 2.309-2.4 4.206-2.161Zm-1.54 3.537c-.269.522-.089.987.195 1.41l.202.274.105.136A4.5 4.5 0 0 0 11.883 30h9.332c-1.726-1.16-4.016-2.404-6.58-3.045a47.982 47.982 0 0 0-5.599-1.021c-.6-.076-.98.194-1.168.559ZM28.5 3c.93 0 1.611.507 2.04 1.056.41.52.675 1.17.86 1.794.375 1.264.55 2.89.617 4.514a44.974 44.974 0 0 1-.01 3.653l-.052 1.011c-.042.66-.096 1.293-.16 1.871l-.1.826c-.07.521-.148.978-.231 1.35-.8 3.598-2.199 5.771-3.762 6.956-1.499 1.134-3.236 1.38-4.373.81-.496-.248-.979-.693-1.377-1.155a8.55 8.55 0 0 1-1.203-1.855c-.697-1.463-1.127-3.44-.422-5.555.436-1.31 1.277-2.125 2.018-2.736l.39-.315c.864-.687 1.672-1.392 2.172-2.396.32-.637.328-1.47.299-2.254l-.03-.654-.025-1.147c-.027-1.275-.018-2.591.456-3.767C26.093 3.792 27.175 3 28.5 3Zm-.345 5.107c-.01 1.001.04 2.002.015 3.002-.023.963-.113 2.13-.579 3.062-.683 1.365-1.72 2.393-2.9 3.331l-.253.204-.427.36c-.44.39-.688.705-.839 1.158-.36 1.086-.21 2.151.175 3.066l.213.462.154.299c.258.483.637 1.084.955 1.083l.113-.005c.199-.017.589-.096 1.11-.489.121-.095.238-.196.349-.303l.247-.26c.713-.802 1.506-2.217 2.048-4.653.063-.286.126-.654.184-1.081l.085-.686c.026-.24.052-.494.075-.761l.064-.826.053-.874.034-.909c.027-.923.027-1.878-.012-2.8-.063-1.541-.226-2.876-.495-3.785-.13-.44-.215-.405-.27-.17l-.03.183-.035.349-.03.729-.004.314ZM7.83 5.063a1.5 1.5 0 0 1 2.45 1.72l-.108.154-.35.437a3.24 3.24 0 0 0 .054 4.115l.184.2a6.24 6.24 0 0 1 .659 8.051l-.198.26-.35.438a1.5 1.5 0 0 1-2.45-1.721l.108-.154.349-.437a3.24 3.24 0 0 0-.054-4.115l-.184-.2A6.24 6.24 0 0 1 7.28 5.76l.198-.26.351-.438Zm6 0a1.5 1.5 0 0 1 2.45 1.72l-.108.154-.35.437a3.24 3.24 0 0 0 .054 4.115l.185.2a6.24 6.24 0 0 1 .658 8.051l-.198.26-.35.438a1.5 1.5 0 0 1-2.45-1.721l.107-.154.35-.437a3.24 3.24 0 0 0-.054-4.115l-.184-.2a6.24 6.24 0 0 1-.659-8.051l.198-.26.35-.438h.001Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SeatSVG