import type React from "react";
import { cn } from "./utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const XIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <g clipPath="url(#clip0_542_1051)">
      <path
        d="M8.09729 9.50476L0.651846 0.850037H2.41618L8.88106 8.36482L14.0445 0.850037H20L12.1918 12.2137L20 21.2895H18.2356L11.4085 13.3537L5.95548 21.2895H1.14441e-05L8.09772 9.50476H8.09729ZM10.5139 12.3138L11.3051 11.1823L17.5998 2.17828H14.8898L9.80981 9.44478L9.01867 10.5763L2.41534 20.0217H5.12541L10.5139 12.3143V12.3138Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_542_1051">
        <rect
          width="20"
          height="21.5385"
          fill="white"
          transform="matrix(-1 0 0 1 20 0.230774)"
        />
      </clipPath>
    </defs>
  </svg>
);

const FacebookIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M14.05 2.00001C16.0883 2.21477 17.9922 3.1188 19.4469 4.56259C20.9015 6.00637 21.8199 7.90342 22.05 9.94M14.05 6.00001C15.0335 6.19394 15.936 6.67903 16.6404 7.39231C17.3447 8.1056 17.8184 9.01413 18 10M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18001C2.095 3.90347 2.12787 3.62477 2.21649 3.36163C2.30512 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44656 3.0498 2.28271 3.30379 2.17053C3.55777 2.05834 3.83233 2.00027 4.10999 2.00001H7.10999C7.5953 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04207 3.23945 9.10999 3.72001C9.23662 4.68007 9.47144 5.62273 9.80999 6.53001C9.94454 6.88793 9.97366 7.27692 9.8939 7.65089C9.81415 8.02485 9.62886 8.36812 9.35999 8.64001L8.08999 9.91001C9.51355 12.4136 11.5864 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M8.714 14H5.004C4.79433 14.0001 4.58999 14.0661 4.41987 14.1886C4.24976 14.3112 4.12247 14.4841 4.056 14.683L2.052 20.683C2.00176 20.8333 1.98797 20.9934 2.01176 21.1501C2.03555 21.3068 2.09623 21.4556 2.18882 21.5842C2.28141 21.7128 2.40324 21.8176 2.54428 21.8899C2.68532 21.9622 2.84152 21.9999 3 22H21C21.1584 21.9999 21.3144 21.9621 21.4554 21.8899C21.5963 21.8177 21.7181 21.713 21.8106 21.5845C21.9032 21.456 21.9639 21.3074 21.9878 21.1508C22.0117 20.9942 21.998 20.8343 21.948 20.684L19.948 14.684C19.8817 14.4848 19.7543 14.3115 19.584 14.1888C19.4136 14.066 19.209 13.9999 18.999 14H15.287M18 8C18 11.613 14.131 15.429 12.607 16.795C12.4327 16.9282 12.2194 17.0003 12 17.0003C11.7806 17.0003 11.5673 16.9282 11.393 16.795C9.87 15.429 6 11.613 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8ZM14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PointerDownIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M6 9L12 15L18 9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ScheduleMeetingIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M21 7.5V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H8.5M16 2V6M8 2V6M3 10H8M17.5 17.5L16 16.3V14M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InstagramIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedinIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 9H2V21H6V9Z"
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HamburgerIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M4 12H20M4 6H20M4 18H20"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="#FAFAFA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FilePickerIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.5972 21.9983 8.00502 21.9983C6.41283 21.9983 4.88586 21.3658 3.76002 20.24C2.63417 19.1142 2.00168 17.5872 2.00168 15.995C2.00168 14.4028 2.63417 12.8758 3.76002 11.75L12.33 3.18C13.0806 2.42811 14.0991 2.00518 15.1615 2.00424C16.2239 2.00331 17.2431 2.42444 17.995 3.175C18.7469 3.92557 19.1698 4.94407 19.1708 6.00647C19.1717 7.06886 18.7506 8.08811 18 8.84L9.41002 17.41C9.03473 17.7853 8.52574 17.9961 7.99502 17.9961C7.46429 17.9961 6.9553 17.7853 6.58002 17.41C6.20473 17.0347 5.9939 16.5257 5.9939 15.995C5.9939 15.4643 6.20473 14.9553 6.58002 14.58L15.07 6.1"
      stroke="#FAFAFA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SunIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="81"
    height="81"
    viewBox="0 0 81 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <g clipPath="url(#clip0_1149_237)">
      <path
        d="M68.3287 68.3272C83.8197 52.8361 83.8197 27.7202 68.3287 12.2291C52.8376 -3.26192 27.7217 -3.26192 12.2307 12.2291C-3.26039 27.7202 -3.26039 52.8361 12.2307 68.3272C27.7217 83.8182 52.8376 83.8182 68.3287 68.3272Z"
        stroke="white"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        d="M60.2391 60.2374C71.2623 49.2142 71.2623 31.3421 60.2391 20.3189C49.2159 9.29569 31.3438 9.2957 20.3206 20.3189C9.29739 31.3421 9.29739 49.2142 20.3206 60.2374C31.3438 71.2606 49.2159 71.2606 60.2391 60.2374Z"
        stroke="white"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        d="M46.7053 55.7856C55.2702 52.2379 59.3375 42.4186 55.7898 33.8537C52.2421 25.2887 42.4228 21.2214 33.8578 24.7692C25.2929 28.3169 21.2256 38.1361 24.7733 46.7011C28.321 55.2661 38.1403 59.3333 46.7053 55.7856Z"
        stroke="white"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        d="M40.2789 45.6235C37.3302 45.6235 34.9336 43.2244 34.9336 40.2781C34.9336 37.3318 37.3326 34.9328 40.2789 34.9328C43.2252 34.9328 45.6242 37.3318 45.6242 40.2781C45.6242 43.2244 43.2252 45.6235 40.2789 45.6235Z"
        stroke="white"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0_1149_237">
        <rect width="80.5537" height="80.5561" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const HeavenEarthIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="90"
    height="48"
    viewBox="0 0 90 48"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <g opacity="0.6" clip-path="url(#clip0_1149_244)">
      <path
        d="M79.1113 10.6468V10.438L10.4375 10.438V10.6468L79.1113 10.6468Z"
        stroke="#A2A1A9"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M89.0001 0.549316H0.548828V20.5355H89.0001V0.549316Z"
        stroke="#FAFBFB"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M85.7051 17.2393V3.84558L3.84627 3.84558V17.2393L85.7051 17.2393Z"
        stroke="#A2A1A9"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M82.4082 13.943V7.14178L7.14192 7.14178V13.943L82.4082 13.943Z"
        stroke="#A2A1A9"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M89.0001 27.3389H0.548828V47.3251H89.0001V27.3389Z"
        stroke="#FAFBFB"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M85.7012 44.0311V30.6374L3.84236 30.6374V44.0311L85.7012 44.0311Z"
        stroke="#A2A1A9"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M82.4062 40.7349V33.9336L7.13998 33.9336V40.7349L82.4062 40.7349Z"
        stroke="#A2A1A9"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M79.1094 37.4386V37.2298L10.4356 37.2298V37.4386L79.1094 37.4386Z"
        stroke="#A2A1A9"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0_1149_244">
        <rect width="89.55" height="47.8745" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ObeliskIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="55"
    height="93"
    viewBox="0 0 55 93"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <g opacity="0.6" clip-path="url(#clip0_1149_255)">
      <path
        d="M1.08789 91.794L10.2232 20.1951L27.2771 1.73599L44.329 20.1951L53.4643 91.794H1.08789Z"
        stroke="#FAFBFB"
        stroke-width="0.442197"
        stroke-miterlimit="10"
      />
      <path
        d="M45.9694 85.0682H8.58594L16.4777 23.2257L27.2787 11.5345L38.0777 23.2257L45.9694 85.0682Z"
        stroke="#A2A1A9"
        stroke-width="0.442197"
        stroke-miterlimit="10"
      />
      <path
        d="M16.084 78.3446L22.7322 26.2564L27.2803 21.333L31.8284 26.2564L38.4746 78.3446H16.084Z"
        stroke="#A2A1A9"
        stroke-width="0.442197"
        stroke-miterlimit="10"
      />
      <path
        d="M23.5801 71.6187L27.2779 42.6439L30.9736 71.6187H23.5801Z"
        stroke="#A2A1A9"
        stroke-width="0.442197"
        stroke-miterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0_1149_255">
        <rect
          width="53.55"
          height="91.3493"
          fill="white"
          transform="translate(0.5 0.970551)"
        />
      </clipPath>
    </defs>
  </svg>
);

const PyramidIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="81"
    height="70"
    viewBox="0 0 81 70"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <g opacity="0.6" clip-path="url(#clip0_1149_230)">
      <path
        d="M40.276 1.1662L1.00977 69.1748H79.5399L40.276 1.1662Z"
        stroke="#FAFBFB"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M10.3027 63.8102L40.2766 11.8953L70.2505 63.8102H10.3027Z"
        stroke="#A2A1A9"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M19.5938 58.4457L40.2776 22.6245L60.9592 58.4457H19.5938Z"
        stroke="#A2A1A9"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <path
        d="M28.8848 53.0811L40.2763 33.3535L51.6655 53.0811H28.8848Z"
        stroke="#A2A1A9"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0_1149_230">
        <rect width="80.55" height="69.7579" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CrossPositinalIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <line
      x1="12.25"
      y1="1.09278e-08"
      x2="12.25"
      y2="24"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <line x1="24" y1="12.25" y2="12.25" stroke="#E4E4E7" strokeWidth="0.5" />
    <rect
      x="10.25"
      y="10.25"
      width="4"
      height="4"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
  </svg>
);

const XRightPositinalIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M17.21 16.74H17.504L16.028 18.858L17.546 21H17.24L15.86 19.056L14.474 21H14.174L15.692 18.858L14.216 16.74H14.516L15.86 18.66L17.21 16.74Z"
      fill="white"
    />
    <line
      x1="2.25"
      y1="6.5"
      x2="2.25"
      y2="18.5"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <line
      x1="14"
      y1="18.75"
      x2="2"
      y2="18.75"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <rect
      x="0.25"
      y="16.75"
      width="4"
      height="4"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <path
      d="M0.638 1.74H0.938L2.3 4.008L3.662 1.74H3.956L2.426 4.26V6H2.174V4.26L0.638 1.74Z"
      fill="white"
    />
  </svg>
);

const XLeftPositinalIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M17.21 16.74H17.504L16.028 18.858L17.546 21H17.24L15.86 19.056L14.474 21H14.174L15.692 18.858L14.216 16.74H14.516L15.86 18.66L17.21 16.74Z"
      fill="white"
    />
    <line
      x1="2.25"
      y1="6.5"
      x2="2.25"
      y2="18.5"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <line
      x1="14"
      y1="18.75"
      x2="2"
      y2="18.75"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <rect
      x="0.25"
      y="16.75"
      width="4"
      height="4"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <path
      d="M0.638 1.74H0.938L2.3 4.008L3.662 1.74H3.956L2.426 4.26V6H2.174V4.26L0.638 1.74Z"
      fill="white"
    />
  </svg>
);

const XRightYDownPositinalIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M17.21 5.26H17.504L16.028 3.142L17.546 1H17.24L15.86 2.944L14.474 1H14.174L15.692 3.142L14.216 5.26H14.516L15.86 3.34L17.21 5.26Z"
      fill="white"
    />
    <line
      y1="-0.25"
      x2="12"
      y2="-0.25"
      transform="matrix(-4.37112e-08 -1 -1 4.37112e-08 2 15.5)"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <line
      y1="-0.25"
      x2="12"
      y2="-0.25"
      transform="matrix(-1 0 0 1 14 3.5)"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <rect
      x="0.25"
      y="-0.25"
      width="4"
      height="4"
      transform="matrix(1 0 0 -1 0 5)"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <path
      d="M0.638 16.74H0.938L2.3 19.008L3.662 16.74H3.956L2.426 19.26V21H2.174V19.26L0.638 16.74Z"
      fill="white"
    />
  </svg>
);

const XLeftYDownPositinalIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M0.79 5.26H0.496L1.972 3.142L0.454 1H0.76L2.14 2.944L3.526 1H3.826L2.308 3.142L3.784 5.26H3.484L2.14 3.34L0.79 5.26Z"
      fill="white"
    />
    <line
      x1="15.75"
      y1="15.5"
      x2="15.75"
      y2="3.5"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <line
      x1="4"
      y1="3.25"
      x2="16"
      y2="3.25"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <rect
      x="17.75"
      y="5.25"
      width="4"
      height="4"
      transform="rotate(180 17.75 5.25)"
      stroke="#E4E4E7"
      strokeWidth="0.5"
    />
    <path
      d="M17.362 16.74H17.062L15.7 19.008L14.338 16.74H14.044L15.574 19.26V21H15.826V19.26L17.362 16.74Z"
      fill="white"
    />
  </svg>
);

const GoldenEyeIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="110"
    height="110"
    viewBox="0 0 110 110"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...props}
  >
    <path
      d="M54.9993 109.793C85.2602 109.793 109.792 85.2613 109.792 55.0003C109.792 24.7394 85.2602 0.208069 54.9993 0.208069C24.7384 0.208069 0.207031 24.7394 0.207031 55.0003C0.207031 85.2613 24.7384 109.793 54.9993 109.793Z"
      stroke="#ED7E23"
      stroke-width="0.5"
      stroke-miterlimit="10"
    />
    <path
      d="M44.4715 26.7105L39.0187 95.4726H39.0034L13.1016 81.3509L44.4715 26.7105Z"
      stroke="#ED7E23"
      stroke-width="0.416139"
      stroke-miterlimit="10"
    />
    <path
      d="M65.5742 26.7182L70.9806 95.483H70.9958L96.9067 81.3794L65.5742 26.7182Z"
      stroke="#ED7E23"
      stroke-width="0.416139"
      stroke-miterlimit="10"
    />
    <path
      d="M68.8633 95.551L55.0295 95.542H41.1367L41.1423 95.467L46.9481 22.2579L55.0295 8.18127L63.1019 22.2627L68.8633 95.551Z"
      stroke="#EE7F22"
      stroke-width="0.5"
      stroke-miterlimit="10"
    />
  </svg>
);

export {
  CloseIcon,
  ContactIcon,
  CrossPositinalIcon,
  FacebookIcon,
  FilePickerIcon,
  HamburgerIcon,
  HeavenEarthIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  ObeliskIcon,
  PointerDownIcon,
  PyramidIcon,
  ScheduleMeetingIcon,
  SunIcon,
  XIcon,
  XLeftPositinalIcon,
  XLeftYDownPositinalIcon,
  XRightPositinalIcon,
  XRightYDownPositinalIcon,
  GoldenEyeIcon,
};
