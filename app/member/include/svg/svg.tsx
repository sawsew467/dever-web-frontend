import React from 'react'

const VectorFirst = ({className}) => {
    return (
      <svg
        className={className}
        width="6"
        height="11"
        viewBox="0 0 6 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path  className={className}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.206382 4.85072C0.0257628 5.03134 0.0257628 5.32413 0.206382 5.50474L4.92166 10.22C5.10228 10.4006 5.39507 10.4006 5.57568 10.22L5.79373 10.002C5.97435 9.82137 5.97435 9.52854 5.79373 9.34792L1.62352 5.17773L5.79374 1.00752C5.97435 0.8269 5.97435 0.53411 5.79374 0.353492L5.57569 0.135442C5.39507 -0.0451775 5.10228 -0.0451775 4.92166 0.135442L0.206382 4.85072Z"
          fill="#111111"
          />
      </svg>
    );
};
const Rectangle1 = ({className}) => {
    return (
      <svg
        className={className}
        width="270"
        height="190"
        viewBox="0 0 270 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={className}
          d="M0 132.917L270 0.833374V169.879C270 182.735 258.046 192.251 245.518 189.371L0 132.917Z"
          fill="#FF0000"
          fill-opacity="0.55"
        />
      </svg>
    );
  };
const Rectangle2 = ({ className }) => {
    return (
      <svg
        className={className}
        width="270"
        height="158"
        viewBox="0 0 270 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path  className={className}
          d="M0 0.5L270 64.25V0.5V138C270 149.046 261.046 158 250 158H0V0.5Z"
          fill="#0098FF"
        />
      </svg>
    );
  };
const Rectangle3 = ({ className }) => {
    return (
      <svg
        className={className}
        width="270"
        height="190"
        viewBox="0 0 270 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path  className={className}
          d="M0 132.917L270 0.833252V169.879C270 182.734 258.046 192.251 245.518 189.371L0 132.917Z"
          fill="#0098FF"
          fill-opacity="0.7"
        />
      </svg>
    );
  };
  const Vector = ({ className }) => {
    return (
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="#0098FF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path  className={className}
            className={className}
            d="M12.875 0.833313V2.24998H12.1667L7.91667 8.62498V13.5833H5.08333V8.62498L0.833333 2.24998H0.125V0.833313H12.875Z"
            fill="#0098FF"
            />
        </svg>
    );
  };
  
export {Vector,VectorFirst,Rectangle3,Rectangle2,Rectangle1}  ;