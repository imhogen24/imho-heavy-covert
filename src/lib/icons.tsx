import type React from 'react';
import { cn } from './utils';

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
      <path d="M8.09729 9.50476L0.651846 0.850037H2.41618L8.88106 8.36482L14.0445 0.850037H20L12.1918 12.2137L20 21.2895H18.2356L11.4085 13.3537L5.95548 21.2895H1.14441e-05L8.09772 9.50476H8.09729ZM10.5139 12.3138L11.3051 11.1823L17.5998 2.17828H14.8898L9.80981 9.44478L9.01867 10.5763L2.41534 20.0217H5.12541L10.5139 12.3143V12.3138Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_542_1051">
        <rect width="20" height="21.5385" fill="white" transform="matrix(-1 0 0 1 20 0.230774)"/>
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
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" strokeLinecap="round" strokeLinejoin="round"/>

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
    <path d="M14.05 2.00001C16.0883 2.21477 17.9922 3.1188 19.4469 4.56259C20.9015 6.00637 21.8199 7.90342 22.05 9.94M14.05 6.00001C15.0335 6.19394 15.936 6.67903 16.6404 7.39231C17.3447 8.1056 17.8184 9.01413 18 10M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18001C2.095 3.90347 2.12787 3.62477 2.21649 3.36163C2.30512 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44656 3.0498 2.28271 3.30379 2.17053C3.55777 2.05834 3.83233 2.00027 4.10999 2.00001H7.10999C7.5953 1.99523 8.06579 2.16708 8.43376 2.48354C8.80173 2.79999 9.04207 3.23945 9.10999 3.72001C9.23662 4.68007 9.47144 5.62273 9.80999 6.53001C9.94454 6.88793 9.97366 7.27692 9.8939 7.65089C9.81415 8.02485 9.62886 8.36812 9.35999 8.64001L8.08999 9.91001C9.51355 12.4136 11.5864 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1859 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" strokeLinecap="round" strokeLinejoin="round"/>
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
    <path d="M8.714 14H5.004C4.79433 14.0001 4.58999 14.0661 4.41987 14.1886C4.24976 14.3112 4.12247 14.4841 4.056 14.683L2.052 20.683C2.00176 20.8333 1.98797 20.9934 2.01176 21.1501C2.03555 21.3068 2.09623 21.4556 2.18882 21.5842C2.28141 21.7128 2.40324 21.8176 2.54428 21.8899C2.68532 21.9622 2.84152 21.9999 3 22H21C21.1584 21.9999 21.3144 21.9621 21.4554 21.8899C21.5963 21.8177 21.7181 21.713 21.8106 21.5845C21.9032 21.456 21.9639 21.3074 21.9878 21.1508C22.0117 20.9942 21.998 20.8343 21.948 20.684L19.948 14.684C19.8817 14.4848 19.7543 14.3115 19.584 14.1888C19.4136 14.066 19.209 13.9999 18.999 14H15.287M18 8C18 11.613 14.131 15.429 12.607 16.795C12.4327 16.9282 12.2194 17.0003 12 17.0003C11.7806 17.0003 11.5673 16.9282 11.393 16.795C9.87 15.429 6 11.613 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8ZM14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" strokeLinecap="round" strokeLinejoin="round"/>

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
    <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
    <path d="M21 7.5V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H8.5M16 2V6M8 2V6M3 10H8M17.5 17.5L16 16.3V14M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

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
    <path d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" strokeLinecap="round" strokeLinejoin="round"/>

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
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 9H2V21H6V9Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>

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
    <path d="M4 12H20M4 6H20M4 18H20" stroke="#FAFAFA" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>

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
   <path d="M18 6L6 18M6 6L18 18" stroke="#FAFAFA" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>

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
<path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.5972 21.9983 8.00502 21.9983C6.41283 21.9983 4.88586 21.3658 3.76002 20.24C2.63417 19.1142 2.00168 17.5872 2.00168 15.995C2.00168 14.4028 2.63417 12.8758 3.76002 11.75L12.33 3.18C13.0806 2.42811 14.0991 2.00518 15.1615 2.00424C16.2239 2.00331 17.2431 2.42444 17.995 3.175C18.7469 3.92557 19.1698 4.94407 19.1708 6.00647C19.1717 7.06886 18.7506 8.08811 18 8.84L9.41002 17.41C9.03473 17.7853 8.52574 17.9961 7.99502 17.9961C7.46429 17.9961 6.9553 17.7853 6.58002 17.41C6.20473 17.0347 5.9939 16.5257 5.9939 15.995C5.9939 15.4643 6.20473 14.9553 6.58002 14.58L15.07 6.1" stroke="#FAFAFA" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>



  </svg>
);

const SunIcon = ({ className, ...props }: IconProps) => (
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
<path d="M18.933 36.7532C28.7749 36.7532 36.7532 28.7749 36.7532 18.933C36.7532 9.09118 28.7749 1.11279 18.933 1.11279C9.09118 1.11279 1.11279 9.09118 1.11279 18.933C1.11279 28.7749 9.09118 36.7532 18.933 36.7532Z" stroke="#FAFBFB" strokeWidth="0.548754" stroke-miterlimit="10"/>
<path d="M27.8996 27.8996C32.8517 22.9476 32.8517 14.9186 27.8996 9.96657C22.9475 5.01449 14.9186 5.01449 9.96654 9.96657C5.01445 14.9187 5.01445 22.9476 9.96654 27.8996C14.9186 32.8517 22.9475 32.8517 27.8996 27.8996Z" stroke="#A2A1A9" strokeWidth="0.548754" stroke-miterlimit="10"/>
<path d="M21.8191 25.8992C25.6669 24.3054 27.4941 19.8942 25.9003 16.0464C24.3065 12.1987 19.8953 10.3715 16.0475 11.9653C12.1998 13.5591 10.3726 17.9703 11.9664 21.818C13.5602 25.6658 17.9714 27.493 21.8191 25.8992Z" stroke="#A2A1A9" strokeWidth="0.548754" stroke-miterlimit="10"/>
<path d="M18.9328 21.3339C17.6081 21.3339 16.5315 20.2562 16.5315 18.9326C16.5315 17.609 17.6092 16.5312 18.9328 16.5312C20.2564 16.5312 21.3342 17.609 21.3342 18.9326C21.3342 20.2562 20.2564 21.3339 18.9328 21.3339Z" stroke="#A2A1A9" strokeWidth="0.548754" stroke-miterlimit="10"/>



  </svg>
);

const HeavenEarthIcon = ({ className, ...props }: IconProps) => (
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

<path d="M31.6562 4.53605V4.45459L4.85846 4.45459V4.53605L31.6562 4.53605Z" stroke="#A2A1A9" strokeWidth="0.428751" stroke-miterlimit="10"/>
<path d="M35.5156 0.595703H1.00024V8.39468H35.5156V0.595703Z" stroke="#FAFBFB" strokeWidth="0.428751" stroke-miterlimit="10"/>
<path d="M34.229 7.10831V1.88184L2.2862 1.88184V7.10831L34.229 7.10831Z" stroke="#A2A1A9" strokeWidth="0.428751" stroke-miterlimit="10"/>
<path d="M32.9426 5.82242V3.16846L3.57233 3.16846V5.82242L32.9426 5.82242Z" stroke="#A2A1A9" strokeWidth="0.428751" stroke-miterlimit="10"/>
<path d="M35.5153 13.0493H1V20.8483H35.5153V13.0493Z" stroke="#FAFBFB" strokeWidth="0.428751" stroke-miterlimit="10"/>
<path d="M34.228 19.5634V14.3369L2.28522 14.3369V19.5634H34.228Z" stroke="#A2A1A9" strokeWidth="0.428751" stroke-miterlimit="10"/>
<path d="M32.9419 18.277V15.623L3.5716 15.623V18.277H32.9419Z" stroke="#A2A1A9" strokeWidth="0.428751" stroke-miterlimit="10"/>
<path d="M31.6555 16.9911V16.9097H4.85773V16.9911H31.6555Z" stroke="#A2A1A9" strokeWidth="0.428751" stroke-miterlimit="10"/>

</svg>
)

const ObeliskIcon = ({ className, ...props }: IconProps) => (
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

<path d="M0.386719 42.3128L4.67969 9.37392L12.6938 0.881836L20.707 9.37392L24.9999 42.3128H0.386719Z" stroke="#FAFBFB" strokeWidth="0.483769" stroke-miterlimit="10"/>
<path d="M21.4775 39.2187H3.90991L7.61849 10.7682L12.6942 5.38965L17.7689 10.7682L21.4775 39.2187Z" stroke="#A2A1A9" strokeWidth="0.483769" stroke-miterlimit="10"/>
<path d="M7.43262 36.1255L10.5568 12.1625L12.6941 9.89746L14.8314 12.1625L17.9546 36.1255H7.43262Z" stroke="#A2A1A9" strokeWidth="0.483769" stroke-miterlimit="10"/>
<path d="M10.9563 33.031L12.694 19.7012L14.4307 33.031H10.9563Z" stroke="#A2A1A9" strokeWidth="0.483769" stroke-miterlimit="10"/>

</svg>
)



const PyramicIcon = ({ className, ...props }: IconProps) => (
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

<path d="M21.1818 1L0.999756 35.955H41.3626L21.1818 1Z" stroke="#FAFBFB" strokeWidth="0.599407" stroke-miterlimit="10"/>
<path d="M5.77612 33.1984L21.1821 6.51514L36.5881 33.1984H5.77612Z" stroke="#A2A1A9" strokeWidth="0.599407" stroke-miterlimit="10"/>
<path d="M10.551 30.4402L21.1821 12.0288L31.812 30.4402H10.551Z" stroke="#A2A1A9" strokeWidth="0.599407" stroke-miterlimit="10"/>
<path d="M15.3269 27.6845L21.1819 17.5449L27.0357 27.6845H15.3269Z" stroke="#A2A1A9" strokeWidth="0.599407" stroke-miterlimit="10"/>

</svg>
)

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

<line x1="12.25" y1="1.09278e-08" x2="12.25" y2="24" stroke="#E4E4E7" strokeWidth="0.5"/>
<line x1="24" y1="12.25" y2="12.25" stroke="#E4E4E7" strokeWidth="0.5"/>
<rect x="10.25" y="10.25" width="4" height="4" stroke="#E4E4E7" strokeWidth="0.5"/>

</svg>
)

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

<path d="M17.21 16.74H17.504L16.028 18.858L17.546 21H17.24L15.86 19.056L14.474 21H14.174L15.692 18.858L14.216 16.74H14.516L15.86 18.66L17.21 16.74Z" fill="white"/>
<line x1="2.25" y1="6.5" x2="2.25" y2="18.5" stroke="#E4E4E7" strokeWidth="0.5"/>
<line x1="14" y1="18.75" x2="2" y2="18.75" stroke="#E4E4E7" strokeWidth="0.5"/>
<rect x="0.25" y="16.75" width="4" height="4" stroke="#E4E4E7" strokeWidth="0.5"/>
<path d="M0.638 1.74H0.938L2.3 4.008L3.662 1.74H3.956L2.426 4.26V6H2.174V4.26L0.638 1.74Z" fill="white"/>

</svg>
)

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

<path d="M17.21 16.74H17.504L16.028 18.858L17.546 21H17.24L15.86 19.056L14.474 21H14.174L15.692 18.858L14.216 16.74H14.516L15.86 18.66L17.21 16.74Z" fill="white"/>
<line x1="2.25" y1="6.5" x2="2.25" y2="18.5" stroke="#E4E4E7" strokeWidth="0.5"/>
<line x1="14" y1="18.75" x2="2" y2="18.75" stroke="#E4E4E7" strokeWidth="0.5"/>
<rect x="0.25" y="16.75" width="4" height="4" stroke="#E4E4E7" strokeWidth="0.5"/>
<path d="M0.638 1.74H0.938L2.3 4.008L3.662 1.74H3.956L2.426 4.26V6H2.174V4.26L0.638 1.74Z" fill="white"/>

</svg>
)

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

<path d="M17.21 5.26H17.504L16.028 3.142L17.546 1H17.24L15.86 2.944L14.474 1H14.174L15.692 3.142L14.216 5.26H14.516L15.86 3.34L17.21 5.26Z" fill="white"/>
<line y1="-0.25" x2="12" y2="-0.25" transform="matrix(-4.37112e-08 -1 -1 4.37112e-08 2 15.5)" stroke="#E4E4E7" strokeWidth="0.5"/>
<line y1="-0.25" x2="12" y2="-0.25" transform="matrix(-1 0 0 1 14 3.5)" stroke="#E4E4E7" strokeWidth="0.5"/>
<rect x="0.25" y="-0.25" width="4" height="4" transform="matrix(1 0 0 -1 0 5)" stroke="#E4E4E7" strokeWidth="0.5"/>
<path d="M0.638 16.74H0.938L2.3 19.008L3.662 16.74H3.956L2.426 19.26V21H2.174V19.26L0.638 16.74Z" fill="white"/>

</svg>
)

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

<path d="M0.79 5.26H0.496L1.972 3.142L0.454 1H0.76L2.14 2.944L3.526 1H3.826L2.308 3.142L3.784 5.26H3.484L2.14 3.34L0.79 5.26Z" fill="white"/>
<line x1="15.75" y1="15.5" x2="15.75" y2="3.5" stroke="#E4E4E7" strokeWidth="0.5"/>
<line x1="4" y1="3.25" x2="16" y2="3.25" stroke="#E4E4E7" strokeWidth="0.5"/>
<rect x="17.75" y="5.25" width="4" height="4" transform="rotate(180 17.75 5.25)" stroke="#E4E4E7" strokeWidth="0.5"/>
<path d="M17.362 16.74H17.062L15.7 19.008L14.338 16.74H14.044L15.574 19.26V21H15.826V19.26L17.362 16.74Z" fill="white"/>


</svg>
)

export {
  CloseIcon, ContactIcon, CrossPositinalIcon, FacebookIcon, FilePickerIcon, HamburgerIcon, HeavenEarthIcon, InstagramIcon, LinkedinIcon, LocationIcon, ObeliskIcon, PointerDownIcon, PyramicIcon, ScheduleMeetingIcon, SunIcon, XIcon, XLeftPositinalIcon, XLeftYDownPositinalIcon, XRightPositinalIcon, XRightYDownPositinalIcon
};
