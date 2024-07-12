import { useEffect, useState } from "react";

const AnimationBanner = () => {
  const [x, setX] = useState(0);
  const [offsets, setOffsets] = useState([0, 100, 200, 300, 400]);

  useEffect(() => {
    const t = setInterval(() => {
      setX((prev) => {
        if (prev > 500) return 0;
        return prev + 10;
      });
    }, 100);
    const tRand = setInterval(() => {
      const index = Math.round(Math.random() * 5);
      offsets[index] = Math.round(Math.random() * 500);
      setOffsets([...offsets]);
    }, 1000);

    return () => {
      clearInterval(t);
      clearInterval(tRand);
    };
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 374 457"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="30" cy="312" r="30" fill="#2B2B2B" />
      <path
        d="M29.6685 292.004C29.6685 292.004 41.3871 291.47 47.5999 303.424H28.6714C28.6714 303.424 25.0992 303.307 22.0478 307.705C21.1712 309.551 20.229 311.453 21.2864 315.2C19.7632 312.581 13.2 300.983 13.2 300.983C13.2 300.983 17.8295 292.476 29.6685 292.004Z"
        fill="#EF3F36"
      />
      <path
        d="M47.3575 322.019C47.3575 322.019 41.8783 332.5 28.4001 331.981C30.0655 329.12 37.9926 315.485 37.9926 315.485C37.9926 315.485 39.9078 312.431 37.6484 307.59C36.4992 305.908 35.328 304.15 31.5532 303.212C34.5898 303.185 47.9404 303.212 47.9404 303.212C47.9404 303.212 52.9419 311.466 47.3575 322.019Z"
        fill="#FCD900"
      />
      <path
        d="M12.572 322.094C12.572 322.094 6.29663 312.139 13.3503 300.8C14.9776 303.662 22.7497 317.302 22.7497 317.302C22.7497 317.302 24.4261 320.478 29.6672 320.953C31.6648 320.804 33.7439 320.677 36.4 317.903C34.9356 320.528 28.3664 332 28.3664 332C28.3664 332 18.8528 332.176 12.572 322.094Z"
        fill="#61BC5B"
      />
      <path
        d="M28.4001 332L31.0486 320.597C31.0486 320.597 33.9586 320.361 36.4001 317.6C34.885 320.35 28.4001 332 28.4001 332Z"
        fill="#5AB055"
      />
      <path
        d="M21.2 312C21.2 307.141 25.1407 303.2 29.9999 303.2C34.8592 303.2 38.8 307.141 38.8 312C38.8 316.859 34.8592 320.8 29.9999 320.8C25.1407 320.795 21.2 316.859 21.2 312Z"
        fill="white"
      />
      <path
        d="M22.8 312C22.8 308.026 26.021 304.8 30.0001 304.8C33.9739 304.8 37.2 308.021 37.2 312C37.2 315.974 33.9794 319.2 30.0001 319.2C26.0262 319.2 22.8 315.974 22.8 312Z"
        fill="url(#paint0_linear_296_2284)"
      />
      <path
        d="M47.5999 303.207L36.7543 306.4C36.7543 306.4 35.1174 303.99 31.5999 303.207C34.6514 303.191 47.5999 303.207 47.5999 303.207Z"
        fill="#EACA05"
      />
      <path
        d="M20.9571 314.4C19.4401 311.732 13.2 300.8 13.2 300.8L21.2 308.829C21.2 308.829 20.3793 310.544 20.6872 312.998L20.9571 314.4Z"
        fill="#DF3A32"
      />
      <circle cx="30" cy="144" r="30" fill="#2B2B2B" />
      <path
        d="M30 164C41.0457 164 50 155.046 50 144C50 132.954 41.0457 124 30 124C18.9543 124 10 132.954 10 144C10 155.046 18.9543 164 30 164Z"
        fill="#FF4500"
      />
      <path
        d="M41.0873 143.492C41.0873 142.141 39.9947 141.068 38.6632 141.068C38.0077 141.068 37.4114 141.326 36.9743 141.744C35.3054 140.551 33.0202 139.777 30.4769 139.677L31.5895 134.471L35.2058 135.246C35.2458 136.16 36.0006 136.896 36.9347 136.896C37.8884 136.896 38.6632 136.121 38.6632 135.167C38.6632 134.213 37.8884 133.438 36.9347 133.438C36.2591 133.438 35.6628 133.836 35.3847 134.412L31.3514 133.557C31.2321 133.537 31.1128 133.557 31.0332 133.617C30.934 133.677 30.8743 133.776 30.8547 133.895L29.6225 139.697C27.0395 139.777 24.7147 140.551 23.0258 141.764C22.5888 141.346 21.9925 141.088 21.3369 141.088C19.9858 141.088 18.9128 142.181 18.9128 143.512C18.9128 144.506 19.5088 145.34 20.3436 145.718C20.3036 145.956 20.284 146.194 20.284 146.453C20.284 150.188 24.6354 153.229 30.0002 153.229C35.3651 153.229 39.7165 150.208 39.7165 146.453C39.7165 146.214 39.6965 145.956 39.6569 145.718C40.4914 145.34 41.0873 144.486 41.0873 143.492ZM24.4365 145.221C24.4365 144.267 25.2114 143.492 26.1654 143.492C27.1191 143.492 27.894 144.267 27.894 145.221C27.894 146.174 27.1191 146.95 26.1654 146.95C25.2114 146.969 24.4365 146.174 24.4365 145.221ZM34.1132 149.811C32.921 151.003 30.6558 151.083 30.0002 151.083C29.3247 151.083 27.0595 150.983 25.8869 149.811C25.7084 149.632 25.7084 149.354 25.8869 149.175C26.0658 148.996 26.344 148.996 26.5228 149.175C27.278 149.93 28.8677 150.188 30.0002 150.188C31.1328 150.188 32.7421 149.93 33.4773 149.175C33.6562 148.996 33.9343 148.996 34.1132 149.175C34.2721 149.354 34.2721 149.632 34.1132 149.811ZM33.7951 146.969C32.8414 146.969 32.0665 146.194 32.0665 145.241C32.0665 144.287 32.8414 143.512 33.7951 143.512C34.7491 143.512 35.524 144.287 35.524 145.241C35.524 146.174 34.7491 146.969 33.7951 146.969Z"
        fill="white"
      />
      <circle cx="30" cy="228" r="30" fill="#2B2B2B" />
      <path
        d="M25.875 233.25L36.6875 227.656L25.875 222.016V233.25Z"
        fill="white"
      />
      <path
        opacity="0.12"
        d="M25.875 222.016L35.3594 228.344L36.6875 227.656L25.875 222.016Z"
        fill="#420000"
      />
      <path
        d="M49.5783 220.062C49.5783 220.062 49.1878 217.312 47.9852 216.094C46.4701 214.5 44.7677 214.5 43.9711 214.406C38.3952 214 30.0078 214 30.0078 214H29.9922C29.9922 214 21.6048 214 15.9977 214.406C15.2167 214.5 13.5143 214.5 11.9836 216.094C10.7966 217.312 10.4061 220.062 10.4061 220.062C10.4061 220.062 10 223.312 10 226.547V229.578C10 232.812 10.4061 236.047 10.4061 236.047C10.4061 236.047 10.7966 238.797 11.9992 240.016C13.5143 241.609 15.5135 241.562 16.4037 241.719C19.6056 242.031 29.9922 242.125 29.9922 242.125C29.9922 242.125 38.3952 242.109 43.9867 241.703C44.7677 241.609 46.4701 241.609 48.0008 240.016C49.2034 238.797 49.5939 236.047 49.5939 236.047C49.5939 236.047 50 232.812 50 229.578V226.547C49.9844 223.312 49.5783 220.062 49.5783 220.062ZM25.8688 233.25V222.016L36.6771 227.656L25.8688 233.25Z"
        fill="url(#paint1_linear_296_2284)"
      />
      <circle cx="30" cy="60" r="30" fill="#2B2B2B" />
      <path
        d="M22.5792 76.5008C37.6743 76.5008 45.9284 63.9945 45.9284 53.1516C45.9284 52.7968 45.9284 52.4419 45.9062 52.0902C47.5122 50.928 48.8984 49.4892 50 47.8411C48.5029 48.5051 46.9147 48.9409 45.2883 49.1339C47.0008 48.1073 48.2821 46.4938 48.8942 44.5933C47.283 45.5498 45.5202 46.2238 43.6819 46.5864C42.4447 45.2709 40.8085 44.3998 39.0263 44.108C37.2442 43.8161 35.4156 44.1198 33.8235 44.972C32.2313 45.8241 30.9644 47.1773 30.2188 48.8221C29.4732 50.4668 29.2905 52.3115 29.699 54.0705C26.4362 53.907 23.2442 53.0592 20.3303 51.5821C17.4164 50.1049 14.8457 48.0315 12.7852 45.4964C11.7347 47.3025 11.412 49.4411 11.883 51.4768C12.3539 53.5124 13.583 55.292 15.32 56.4533C14.023 56.4094 12.7553 56.0564 11.6223 55.4235V55.5281C11.6221 57.4206 12.2758 59.2552 13.4727 60.7212C14.6697 62.1872 16.3364 63.1947 18.1907 63.573C16.9819 63.9023 15.7137 63.95 14.4835 63.7125C15.0073 65.344 16.028 66.771 17.403 67.7937C18.7779 68.8164 20.4382 69.3836 22.1515 69.4159C19.2427 71.6938 15.6527 72.928 11.9582 72.9203C11.3038 72.9207 10.6499 72.8826 10 72.8063C13.7524 75.2166 18.1194 76.4958 22.5792 76.4913"
        fill="#1DA1F2"
      />
      <circle cx="30" cy="396" r="30" fill="#2B2B2B" />
      <rect
        x="8.66675"
        y="376"
        width="40"
        height="40"
        fill="url(#pattern0_296_2284)"
      />
      <circle cx="314" cy="228" r="60" fill="#D9D9D9" />

      <path d="M59.7988 394.542L227.5 394.542L314.5 287.5" stroke="gray" />
      <path
        d="M59.7988 394.542L227.5 394.542L314.5 287.5"
        stroke="url(#:round1)"
        strokeWidth={3}
        strokeLinecap="round"
      />

      <path d="M60 61.8044L227.701 61.8044L314.701 168.847" stroke="gray" />
      <path
        d="M60 61.8044L227.701 61.8044L314.701 168.847"
        stroke="url(#:round2)"
        strokeWidth={3}
        strokeLinecap="round"
      />

      <path d="M60.9106 312.508L213.5 312.508L275.911 273.508" stroke="gray" />
      <path
        d="M60.9106 312.508L213.5 312.508L275.911 273.508"
        stroke="url(#:round3)"
        strokeWidth={3}
        strokeLinecap="round"
      />

      <path d="M60 143.797L212.589 143.797L275 182.797" stroke="gray" />
      <path
        d="M60 143.797L212.589 143.797L275 182.797"
        stroke="url(#:round4)"
        strokeWidth={3}
        strokeLinecap="round"
      />

      <line x1="59.9951" y1="228.5" x2="253.995" y2="228.5" stroke="gray" />
      <line
        x1="59.9951"
        y1="228.5"
        x2="253.995"
        y2="228.5"
        stroke="url(#:round5)"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <defs>
        <pattern
          id="pattern0_296_2284"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_296_2284" transform="scale(0.00195312)" />
        </pattern>
        <linearGradient
          id="paint0_linear_296_2284"
          x1="29.9998"
          y1="304.902"
          x2="29.9998"
          y2="318.766"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#86BBE5" />
          <stop offset="1" stop-color="#1072BA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_296_2284"
          x1="5128"
          y1="214"
          x2="5128"
          y2="5278.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E52D27" />
          <stop offset="1" stop-color="#BF171D" />
        </linearGradient>
        <image
          id="image0_296_2284"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />

        <linearGradient
          className="transform-gpu"
          id=":round1"
          gradientUnits="userSpaceOnUse"
          x1={`${x - offsets[0]}%`}
          x2={`${x - offsets[0] + 20}%`}
          y1="0%"
          y2="0%"
        >
          <stop stop-color="#ffaa40" stop-opacity="0"></stop>
          <stop stop-color="#ffaa40"></stop>
          <stop offset="32.5%" stop-color="#ff0000"></stop>
          <stop offset="100%" stop-color="#ff0000" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          className="transform-gpu"
          id=":round2"
          gradientUnits="userSpaceOnUse"
          x1={`${x - offsets[1]}%`}
          x2={`${x - offsets[1] + 20}%`}
          y1="0%"
          y2="0%"
        >
          <stop stop-color="#ffaa40" stop-opacity="0"></stop>
          <stop stop-color="#ffaa40"></stop>
          <stop offset="32.5%" stop-color="#ff0000"></stop>
          <stop offset="100%" stop-color="#ff0000" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          className="transform-gpu"
          id=":round3"
          gradientUnits="userSpaceOnUse"
          x1={`${x - offsets[2]}%`}
          x2={`${x - offsets[2] + 20}%`}
          y1="0%"
          y2="0%"
        >
          <stop stop-color="#ffaa40" stop-opacity="0"></stop>
          <stop stop-color="#ffaa40"></stop>
          <stop offset="32.5%" stop-color="#ff0000"></stop>
          <stop offset="100%" stop-color="#ff0000" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          className="transform-gpu"
          id=":round4"
          gradientUnits="userSpaceOnUse"
          x1={`${x - offsets[3]}%`}
          x2={`${x - offsets[3] + 20}%`}
          y1="0%"
          y2="0%"
        >
          <stop stop-color="#ffaa40" stop-opacity="0"></stop>
          <stop stop-color="#ffaa40"></stop>
          <stop offset="32.5%" stop-color="#ff0000"></stop>
          <stop offset="100%" stop-color="#ff0000" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          className="transform-gpu"
          id=":round5"
          gradientUnits="userSpaceOnUse"
          x1={`${x - offsets[4]}%`}
          x2={`${x - offsets[4] + 20}%`}
          y1="0%"
          y2="0%"
        >
          <stop stop-color="#ffaa40" stop-opacity="0"></stop>
          <stop stop-color="#ffaa40"></stop>
          <stop offset="32.5%" stop-color="#ff0000"></stop>
          <stop offset="100%" stop-color="#ff0000" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimationBanner;
