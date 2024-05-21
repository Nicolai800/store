export const CartIcon = ({className, id, cartToggle}) => (
  <svg width="48"
      height="48"
      className={className}
      fill="none"
      viewBox="0 0 8.61 9.48"
      onClick={()=>cartToggle(id,id)}
      >
  <path class="fil0 str0" fill-rule="nonzero" stroke-width="0.38" stroke-miterlimit="22.9256" d="M0.99 2.56l-0.78 6.73 8.18 0 -0.02 -0.2 -0.76 -6.53c-2.2,0 -4.41,0 -6.62,0z" stroke="#424436" fill="none"></path>
  <path class="fil1" d="M6.25 3.12c0.11,0 0.2,0.09 0.2,0.2 0,0.11 -0.09,0.2 -0.2,0.2 -0.11,0 -0.2,-0.09 -0.2,-0.2 0,-0.11 0.09,-0.2 0.2,-0.2z" stroke="#424436"></path>
  <line class="fil0 str0" fill-rule="nonzero" stroke-width="0.38" stroke-miterlimit="22.9256" x1="2.36" y1="3.21" x2="2.35" y2="2.56" stroke="#424436"></line>
  <path class="fil0 str0" fill-rule="nonzero" stroke-width="0.38" stroke-miterlimit="22.9256" d="M6.25 2.56l-3.9 0 0.01 -0.45c0,-1.07 0.86,-1.92 1.94,-1.92 1.08,0 1.95,0.85 1.95,1.92l0 0.45z" stroke="#424436" fill="transparent"></path>
  <path class="fil1" d="M2.36 3.12c0.1,0 0.2,0.08 0.2,0.18 0,0.1 -0.08,0.18 -0.2,0.18 -0.12,0 -0.2,-0.08 -0.2,-0.18 0,-0.1 0.08,-0.18 0.2,-0.18z" stroke="#424436"></path>
  <line class="fil0 str0" fill-rule="nonzero" stroke-width="0.38" stroke-miterlimit="22.9256" x1="6.26" y1="3.21" x2="6.25" y2="2.56" stroke="#424436"></line>
  </svg> 
  );

export const HeartIcon = ({className}) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_5252_15571)">
      <path
        d="M39.4 32.2222C42.678 29.14 46 25.4456 46 20.6111C46 17.5317 44.7252 14.5783 42.456 12.4008C40.1868 10.2233 37.1091 9 33.9 9C30.028 9 27.3 10.0556 24 13.2222C20.7 10.0556 17.972 9 14.1 9C10.8909 9 7.8132 10.2233 5.54401 12.4008C3.27482 14.5783 2 17.5317 2 20.6111C2 25.4667 5.3 29.1611 8.6 32.2222L24 47L39.4 32.2222Z"
        stroke="#424436"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_5252_15571">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LogoIcon = ({className}) => (
  <svg
    width="70"
    height="73"
    viewBox="0 0 70 73"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="35" cy="35" r="35" fill="#92A234" />
    <g clip-path="url(#clip0_1_102)">
      <mask
        id="mask0_1_102"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="19"
        y="55"
        width="33"
        height="26"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.9316 60.2364C45.7202 57.6669 43.1065 55.8887 40.0775 55.8887C38.8874 55.8887 37.7614 56.1632 36.7594 56.6523C36.1946 56.1758 35.4648 55.8887 34.6679 55.8887C33.2498 55.8887 32.0441 56.7982 31.6022 58.0657C30.4977 58.1466 29.4955 58.596 28.7181 59.2915C28.3751 59.1893 28.0117 59.1344 27.6355 59.1344C26.1052 59.1344 24.7869 60.0422 24.1897 61.3486C21.5526 61.7098 19.521 63.9716 19.521 66.7079C19.521 69.6955 21.943 72.1175 24.9306 72.1175C25.3178 72.1175 25.6955 72.0768 26.0596 71.9995C26.5436 76.9248 30.6973 80.7729 35.7498 80.7729C40.4016 80.7729 44.2914 77.5111 45.257 73.1499C45.5095 73.1826 45.7669 73.1994 46.0282 73.1994C49.3147 73.1994 51.9788 70.5353 51.9788 67.2488C51.9788 65.3419 51.0818 63.6444 49.6867 62.5554C49.3269 61.3161 48.248 60.3826 46.9316 60.2364Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1_102)">
        <circle cx="35" cy="35" r="35" fill="#FFFFF1" />
      </g>
    </g>
    <path
      d="M39.4892 36.2493C38.6984 37.004 37.8645 38.0256 37.1066 39.3957C36.3577 36.6996 35.4138 34.7231 34.4596 33.2761C38.8379 18.6894 17.5 18.1667 17.5 18.1667C17.5 18.1667 18.1229 36.3975 29.2667 35.9789C29.244 34.7582 29.0545 33.5239 28.789 32.3665C28.6154 31.6119 28.4089 30.8923 28.1956 30.2282C27.4831 28.0255 26.6787 26.4619 26.6787 26.4619C27.491 27.5503 28.2104 28.5889 28.8457 29.5652C31.0321 32.9197 32.2256 35.5287 32.7804 36.9067C34.1499 39.8403 35.3797 44.6656 35.3797 52.5512C35.3797 53.4438 36.107 54.1667 36.9988 54.1667C37.8928 54.1667 38.6189 53.4438 38.6189 52.5512C38.6189 49.9954 38.4953 47.7214 38.2718 45.6928C38.788 43.2174 39.5674 41.4604 40.3741 40.2159C40.904 39.2079 41.8808 37.4814 43.1969 35.7187C44.369 34.1507 45.8144 32.5532 47.4493 31.4128C47.4493 31.4128 44.0967 35.1134 43.88 38.7361C53.1403 39.218 53.5 24.6902 53.5 24.6902C53.5 24.6902 36.5529 25.2672 39.4892 36.2493Z"
      fill="#FFFFF1"
    />
    <defs>
      <clipPath id="clip0_1_102">
        <rect
          width="35.8333"
          height="16.6667"
          fill="white"
          transform="translate(17.5 55.8333)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const MoonIcon = ({className}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.7592 11.5514C18.5575 11.3932 18.28 11.3733 18.0577 11.501C17.0038 12.1068 15.8898 12.4141 14.7467 12.4141C11.0738 12.4141 8.08577 9.42589 8.08577 5.75293C8.08577 4.6048 8.39341 3.49231 9.00022 2.44647C9.12909 2.22444 9.10997 1.94632 8.95192 1.74391C8.79395 1.5415 8.52874 1.45539 8.28206 1.52666C6.50775 2.03813 4.91078 3.12329 3.78537 4.58216C2.61737 6.09637 2 7.90984 2 9.8266C2 14.6089 5.89055 18.4997 10.6727 18.4997C12.5895 18.4997 14.4034 17.8825 15.9183 16.7149C17.3782 15.5897 18.4639 13.9937 18.9754 12.2206C19.0465 11.9743 18.9609 11.7096 18.7592 11.5514ZM10.6727 17.2419C6.58405 17.2419 3.25772 13.9154 3.25772 9.8266C3.25772 7.06817 4.83616 4.55793 7.23513 3.29635C6.96447 4.09165 6.82805 4.91328 6.82805 5.75293C6.82805 10.1194 10.3804 13.6718 14.7467 13.6718C15.5851 13.6718 16.4082 13.5348 17.2073 13.2632C15.9459 15.6627 13.4335 17.2419 10.6727 17.2419Z"
      fill="white"
    />
  </svg>
);

export const SunIcon = ({className}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_5447_25609)">
      <path
        d="M9.99882 16.7622C9.64236 16.7622 9.35352 17.051 9.35352 17.4075V19.3557C9.35352 19.7122 9.64236 20.0011 9.99882 20.0011C10.3553 20.0011 10.6441 19.7122 10.6441 19.3557V17.4075C10.6441 17.051 10.3553 16.7622 9.99882 16.7622Z"
        fill="#8B8B8B"
      />
      <path
        d="M9.99882 3.23981C10.3553 3.23981 10.6441 2.95097 10.6441 2.5945V0.646529C10.6441 0.290061 10.3553 0.0012207 9.99882 0.0012207C9.64236 0.0012207 9.35352 0.290061 9.35352 0.646529V2.59459C9.35352 2.95097 9.64236 3.23981 9.99882 3.23981Z"
        fill="#8B8B8B"
      />
      <path
        d="M4.30692 14.7817L2.92889 16.1591C2.67679 16.4111 2.6767 16.8196 2.92863 17.0716C3.05468 17.1978 3.21988 17.2607 3.38508 17.2607C3.55019 17.2607 3.7153 17.1978 3.84127 17.0719L5.2193 15.6945C5.4714 15.4425 5.47149 15.034 5.21956 14.782C4.96746 14.5298 4.55885 14.5297 4.30692 14.7817Z"
        fill="#8B8B8B"
      />
      <path
        d="M15.2362 5.40844C15.4013 5.40844 15.5665 5.34555 15.6924 5.21958L17.0704 3.84223C17.3225 3.59022 17.3226 3.1817 17.0706 2.92968C16.8185 2.67741 16.4099 2.6775 16.158 2.92942L14.78 4.30677C14.5279 4.55879 14.5278 4.96731 14.7797 5.21941C14.9058 5.34546 15.071 5.40844 15.2362 5.40844Z"
        fill="#8B8B8B"
      />
      <path
        d="M3.23902 10.0003C3.23902 9.64382 2.95018 9.35498 2.59371 9.35498H0.645308C0.28884 9.35498 0 9.64382 0 10.0003C0 10.3568 0.28884 10.6456 0.645308 10.6456H2.59371C2.95009 10.6456 3.23902 10.3567 3.23902 10.0003Z"
        fill="#8B8B8B"
      />
      <path
        d="M19.3546 9.35498H17.4056C17.0491 9.35498 16.7603 9.64382 16.7603 10.0003C16.7603 10.3568 17.0491 10.6456 17.4056 10.6456H19.3546C19.711 10.6456 19.9999 10.3568 19.9999 10.0003C19.9999 9.64382 19.711 9.35498 19.3546 9.35498Z"
        fill="#8B8B8B"
      />
      <path
        d="M4.30649 5.21934C4.43254 5.34539 4.59766 5.40838 4.76286 5.40838C4.92797 5.40838 5.09317 5.34539 5.21913 5.21943C5.47123 4.96742 5.47123 4.55881 5.21922 4.30688L3.84187 2.92953C3.58977 2.67743 3.18116 2.67752 2.92932 2.92945C2.67722 3.18146 2.67722 3.59007 2.92923 3.842L4.30649 5.21934Z"
        fill="#8B8B8B"
      />
      <path
        d="M15.6934 14.7818C15.4413 14.5298 15.0327 14.5297 14.7809 14.7817C14.5288 15.0338 14.5288 15.4424 14.7808 15.6944L16.1581 17.0717C16.2841 17.1978 16.4492 17.2608 16.6144 17.2608C16.7795 17.2608 16.9447 17.1978 17.0707 17.0718C17.3228 16.8198 17.3228 16.4112 17.0708 16.1592L15.6934 14.7818Z"
        fill="#8B8B8B"
      />
      <path
        d="M9.9997 4.19067C6.79621 4.19067 4.18994 6.79694 4.18994 10.0004C4.18994 13.2039 6.79621 15.8102 9.9997 15.8102C13.2032 15.8102 15.8094 13.2039 15.8094 10.0004C15.8094 6.79694 13.2032 4.19067 9.9997 4.19067ZM9.9997 14.5197C7.50777 14.5197 5.48056 12.4924 5.48056 10.0005C5.48056 7.50859 7.50777 5.48129 9.9997 5.48129C12.4915 5.48129 14.5187 7.50859 14.5187 10.0004C14.5187 12.4923 12.4915 14.5197 9.9997 14.5197Z"
        fill="#8B8B8B"
      />
    </g>
    <defs>
      <clipPath id="clip0_5447_25609">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const InstagrammIcon = ({className}) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.5 3H12.5C7.27546 3 3 7.27361 3 12.5V31.5C3 36.7245 7.27546 41 12.5 41H31.5C36.7245 41 41 36.7245 41 31.5V12.5C41 7.27361 36.7245 3 31.5 3ZM22 29.9164C17.6271 29.9164 14.0832 26.3709 14.0832 22C14.0832 17.6271 17.6271 14.0832 22 14.0832C26.3709 14.0832 29.9168 17.6271 29.9168 22C29.9168 26.3709 26.3709 29.9164 22 29.9164ZM32.2918 14.0832C30.9789 14.0832 29.9168 13.0196 29.9168 11.7082C29.9168 10.3967 30.9789 9.33318 32.2918 9.33318C33.6047 9.33318 34.6668 10.3967 34.6668 11.7082C34.6668 13.0196 33.6047 14.0832 32.2918 14.0832Z"
      fill="#424436"
    />
  </svg>
);

export const WhatsappIcon = ({className}) => (
  <svg
    width="39"
    height="38"
    viewBox="0 0 39 38"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.2793 0C8.8027 0 0.279297 8.52279 0.279297 19C0.279297 22.6862 1.3363 26.24 3.34268 29.3263L0.381966 36.2348C0.177865 36.7098 0.284245 37.2628 0.650391 37.6289C0.892838 37.8714 1.21693 38 1.54596 38C1.71419 38 1.88428 37.9666 2.04508 37.8973L8.95361 34.936C12.0393 36.9436 15.5931 38 19.2793 38C29.7565 38 38.2793 29.4772 38.2793 19C38.2793 8.52279 29.7565 0 19.2793 0ZM29.0316 25.8009C29.0316 25.8009 27.452 27.8271 26.3103 28.3008C23.4083 29.502 19.3115 28.3008 14.6443 23.635C9.97845 18.9678 8.77672 14.871 9.97845 11.969C10.4522 10.826 12.4784 9.24766 12.4784 9.24766C13.0276 8.81966 13.8811 8.87285 14.3734 9.36517L16.6656 11.6573C17.1579 12.1496 17.1579 12.9561 16.6656 13.4484L15.227 14.8858C15.227 14.8858 14.6443 16.6349 18.1437 20.1355C21.6432 23.635 23.3935 23.0523 23.3935 23.0523L24.8309 21.6137C25.3232 21.1214 26.1297 21.1214 26.622 21.6137L28.9141 23.9059C29.4064 24.3982 29.4596 25.2505 29.0316 25.8009Z"
      fill="#424436"
    />
  </svg>
);

export const NumberFourIcon = ({className}) => (
  <svg
    width="180"
    height="246"
    viewBox="0 0 180 246"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M99.4461 139.709V96.7939H152.21V139.709H179.999V187.196H152.21V245.94H99.4461V187.196H0.601562V145.337L88.1898 0.0599365H147.989L64.6218 139.709H99.4461Z"
      fill="#92A234"
    />
  </svg>
);
