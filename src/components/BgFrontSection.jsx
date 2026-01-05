const BgFrontSection = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 500 320"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="linearGradient24030">
          <stop offset="0" stopColor="var(--svg-g1)" stopOpacity="1" />
          <stop offset="1" stopColor="var(--svg-g2)" stopOpacity="1" />
        </linearGradient>

        <filter
          id="filter16666"
          x="-0.0054692522"
          y="-0.0063574527"
          width="1.0109385"
          height="1.0127149"
        >
          <feGaussianBlur stdDeviation="1.3918661" />
        </filter>

        <radialGradient
          href="#linearGradient24030"
          id="radialGradient24032"
          cx="540.91394"
          cy="61.198723"
          r="305.38715"
          gradientTransform="matrix(-1,0,0,-0.86028986,1081.8279,113.84736)"
          gradientUnits="userSpaceOnUse"
        />
      </defs>

      <g transform="translate(-32.913921,-61.198723)">
        <ellipse
          cx="540.91394"
          cy="61.198723"
          rx="305.38715"
          ry="262.72147"
          fill="var(--svg-bg)"
          filter="url(#filter16666)"
        />
        <ellipse
          cx="540.91394"
          cy="61.198723"
          rx="305.38715"
          ry="262.72147"
          fill="url(#radialGradient24032)"
        />
      </g>
    </svg>
  );
};

export default BgFrontSection;
