import style from './Icons.module.css'
interface IconProps {
    fill: string | undefined
}
export const AmpUpIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <g clipPath="url(#clip0_1393_1534)">
                <path d="M28.7382 15.4218C28.7382 22.7773 22.7754 28.7402 15.4199 28.7402C8.06437 28.7402 2.10156 22.7773 2.10156 15.4218C2.10156 8.06632 8.06437 2.10352 15.4199 2.10352C22.7754 2.10352 28.7382 8.06632 28.7382 15.4218Z" stroke={fill} strokeWidth="2.5702" />
                <path d="M15.4221 11.2148L21.4926 17.5235H9.35156L15.4221 11.2148Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_1393_1534">
                    <rect width="30.8424" height="30.8424" fill={fill} />
                </clipPath>
            </defs>
        </svg>
    )
}
export const ArrowDownIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M0.999999 0.841798L7 6.8418L13 0.841797" stroke={fill} strokeWidth="1.27778" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export const ArrowLeftIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M7.33333 12.8327L1.5 6.99935L7.33333 1.16602" stroke={fill} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
export const ArrowUpIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M13 6.8418L7 0.841797L1 6.8418" stroke={fill} strokeWidth="1.27778" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
export const ChallengesIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M11.9922 15.4922C11.4671 15.4927 10.9538 15.3372 10.5172 15.0454C10.0807 14.7536 9.74069 14.3387 9.54034 13.8534C9.33999 13.368 9.28834 12.8341 9.39193 12.3194C9.49553 11.8046 9.7497 11.3323 10.1222 10.9622C10.1925 10.8926 10.2757 10.8375 10.3673 10.8001C10.4588 10.7627 10.5568 10.7437 10.6557 10.7441C10.7546 10.7446 10.8525 10.7646 10.9437 10.8028C11.0348 10.8411 11.1176 10.897 11.1872 10.9672C11.2568 11.0375 11.3119 11.1208 11.3493 11.2123C11.3867 11.3038 11.4057 11.4019 11.4053 11.5008C11.4048 11.5996 11.3849 11.6975 11.3466 11.7887C11.3083 11.8799 11.2525 11.9626 11.1822 12.0322C11.0743 12.1377 10.9887 12.2637 10.9303 12.4028C10.8719 12.5419 10.8419 12.6913 10.8422 12.8422C10.8289 13.0797 10.8902 13.3154 11.0176 13.5163C11.145 13.7172 11.332 13.8733 11.5525 13.9626C11.773 14.0519 12.0159 14.07 12.2471 14.0143C12.4784 13.9586 12.6865 13.832 12.8422 13.6522C12.9845 13.5112 13.1768 13.432 13.3772 13.432C13.5776 13.432 13.7699 13.5112 13.9122 13.6522C14.0509 13.7958 14.1284 13.9876 14.1284 14.1872C14.1284 14.3868 14.0509 14.5787 13.9122 14.7222C13.6595 14.9718 13.3595 15.1685 13.0298 15.3007C12.7001 15.4329 12.3474 15.498 11.9922 15.4922Z" fill={fill} fillOpacity="0.6" />
            <path d="M22.2422 12.8418C22.2422 15.5603 21.1623 18.1674 19.24 20.0896C17.3178 22.0119 14.7107 23.0918 11.9922 23.0918C9.27372 23.0918 6.66659 22.0119 4.74434 20.0896C2.82209 18.1674 1.74219 15.5603 1.74219 12.8418C1.74219 10.1233 2.82209 7.5162 4.74434 5.59395C6.66659 3.6717 9.27372 2.5918 11.9922 2.5918C12.1911 2.5918 12.3819 2.67081 12.5225 2.81147C12.6632 2.95212 12.7422 3.14288 12.7422 3.3418V7.1418C12.7396 7.3399 12.6597 7.52917 12.5197 7.66926C12.3796 7.80936 12.1903 7.88921 11.9922 7.8918C11.0128 7.88506 10.0543 8.17436 9.24219 8.7218C8.42551 9.26305 7.78863 10.0354 7.41282 10.9402C7.037 11.845 6.9393 12.8412 7.13219 13.8018C7.44587 14.9414 8.15312 15.933 9.12844 16.6007C10.1038 17.2683 11.2841 17.5689 12.4599 17.4491C13.6358 17.3292 14.7312 16.7966 15.5517 15.9459C16.3723 15.0952 16.8649 13.9812 16.9422 12.8018C16.941 12.703 16.9596 12.6049 16.9968 12.5134C17.0341 12.4218 17.0893 12.3387 17.1592 12.2688C17.2291 12.1989 17.3122 12.1437 17.4038 12.1064C17.4953 12.0692 17.5934 12.0506 17.6922 12.0518H21.4922C21.5941 12.0517 21.695 12.0723 21.7887 12.1125C21.8825 12.1526 21.967 12.2115 22.0372 12.2854C22.1074 12.3594 22.1618 12.4468 22.197 12.5425C22.2323 12.6381 22.2476 12.74 22.2422 12.8418Z" fill={fill} fillOpacity="0.6" />
            <path d="M21.8811 6.97185C21.855 7.1664 21.7753 7.34989 21.6511 7.50185L19.4811 9.67185C19.1733 9.98274 18.7912 10.2099 18.3711 10.3318C18.1251 10.4082 17.8686 10.4454 17.6111 10.4418C17.4347 10.4566 17.2574 10.4566 17.0811 10.4418L15.7511 10.1818L13.4711 12.4718C13.3282 12.609 13.1391 12.6875 12.9411 12.6918C12.7422 12.6917 12.5516 12.6125 12.4111 12.4718C12.3403 12.4029 12.2841 12.3205 12.2457 12.2295C12.2073 12.1384 12.1875 12.0406 12.1875 11.9418C12.1875 11.8431 12.2073 11.7453 12.2457 11.6542C12.2841 11.5632 12.3403 11.4808 12.4111 11.4118L14.7011 9.11185L14.4311 7.79185C14.3504 7.36638 14.3709 6.9279 14.4911 6.51185C14.613 6.09171 14.8402 5.70964 15.1511 5.40185L17.3011 3.25185C17.4488 3.11746 17.6334 3.03039 17.8311 3.00185C18.0161 2.97437 18.205 3.00586 18.3711 3.09185C18.5361 3.17578 18.6746 3.30387 18.7711 3.46185C18.8687 3.63863 18.9106 3.84083 18.8911 4.04185L18.5711 6.30185L20.8211 5.99185C21.0094 5.97336 21.1989 6.01216 21.3649 6.10315C21.5308 6.19414 21.6654 6.3331 21.7511 6.50185C21.8325 6.64539 21.8772 6.80686 21.8811 6.97185Z" fill={fill} fillOpacity="0.6" />
        </svg>

    )
}
export const DecksIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M11 12.0085H17.1111C17.4574 12.0085 17.7479 11.8965 17.9826 11.6725C18.2172 11.4485 18.3341 11.1716 18.3333 10.8418V5.00846C18.3333 4.67791 18.216 4.40102 17.9813 4.1778C17.7467 3.95457 17.4566 3.84257 17.1111 3.8418H11C10.6537 3.8418 10.3636 3.9538 10.1298 4.1778C9.89592 4.4018 9.77859 4.67869 9.77778 5.00846V10.8418C9.77778 11.1724 9.89511 11.4496 10.1298 11.6736C10.3644 11.8976 10.6545 12.0092 11 12.0085ZM2.44444 21.3418C1.77222 21.3418 1.19696 21.1135 0.718667 20.657C0.24037 20.2004 0.000814815 19.6509 0 19.0085V2.67513C0 2.03346 0.239556 1.48435 0.718667 1.0278C1.19778 0.571241 1.77304 0.342575 2.44444 0.341797H19.5556C20.2278 0.341797 20.8034 0.570464 21.2826 1.0278C21.7617 1.48513 22.0008 2.03424 22 2.67513V19.0085C22 19.6501 21.7608 20.1996 21.2826 20.657C20.8043 21.1143 20.2286 21.3426 19.5556 21.3418H2.44444Z" fill="url(#paint0_linear_1393_1560)" />
            <defs>
                <linearGradient id="paint0_linear_1393_1560" x1="8.50448" y1="0.341812" x2="16.2878" y2="3.33753" gradientUnits="userSpaceOnUse">
                    <stop stopColor={fill} />
                </linearGradient>
            </defs>
        </svg>
    )
}
export const HelpIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M10.945 17.7562C11.33 17.7562 11.6556 17.6231 11.9218 17.3569C12.188 17.0907 12.3207 16.7655 12.32 16.3812C12.3193 15.997 12.1865 15.6714 11.9218 15.4044C11.6571 15.1375 11.3315 15.0048 10.945 15.0062C10.5585 15.0077 10.2333 15.1408 9.96929 15.4055C9.70529 15.6703 9.5722 15.9955 9.56999 16.3812C9.56779 16.767 9.70089 17.0926 9.96929 17.358C10.2377 17.6235 10.5629 17.7562 10.945 17.7562ZM9.955 13.5212H11.99C11.99 12.9162 12.0589 12.4396 12.1968 12.0912C12.3347 11.7429 12.7241 11.2662 13.365 10.6612C13.8417 10.1846 14.2175 9.73064 14.4925 9.29944C14.7675 8.86824 14.905 8.35051 14.905 7.74625C14.905 6.71958 14.5292 5.93125 13.7775 5.38125C13.0258 4.83125 12.1367 4.55625 11.11 4.55625C10.065 4.55625 9.21726 4.83125 8.5668 5.38125C7.91633 5.93125 7.4624 6.59125 7.205 7.36125L9.01999 8.07625C9.11166 7.74625 9.31809 7.38875 9.63929 7.00375C9.96049 6.61875 10.4507 6.42625 11.11 6.42625C11.6967 6.42625 12.1367 6.58685 12.43 6.90805C12.7233 7.22925 12.87 7.58198 12.87 7.96625C12.87 8.33291 12.76 8.67684 12.54 8.99804C12.32 9.31924 12.045 9.61698 11.715 9.89124C10.9083 10.6062 10.4133 11.1471 10.23 11.5137C10.0467 11.8804 9.955 12.5496 9.955 13.5212ZM11 22.1562C9.47833 22.1562 8.04833 21.8677 6.71 21.2905C5.37167 20.7134 4.2075 19.9295 3.2175 18.9387C2.2275 17.948 1.44393 16.7838 0.866801 15.4462C0.289668 14.1086 0.000734725 12.6786 1.3924e-06 11.1562C-0.00073194 9.63384 0.288201 8.20385 0.866801 6.86625C1.4454 5.52865 2.22897 4.36448 3.2175 3.37375C4.20603 2.38302 5.3702 1.59945 6.71 1.02305C8.0498 0.446655 9.4798 0.157722 11 0.156256C12.5202 0.154789 13.9502 0.443722 15.29 1.02305C16.6298 1.60239 17.794 2.38595 18.7825 3.37375C19.771 4.36155 20.555 5.52572 21.1343 6.86625C21.7136 8.20678 22.0022 9.63678 22 11.1562C21.9978 12.6757 21.7089 14.1057 21.1332 15.4462C20.5575 16.7868 19.774 17.9509 18.7825 18.9387C17.791 19.9265 16.6269 20.7105 15.29 21.2905C13.9531 21.8706 12.5231 22.1592 11 22.1562Z" fill={fill} fillOpacity="0.6" />
        </svg>
    )
}
export const StoresIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M22.8153 4.50078L20.4278 0.721615C20.2153 0.384115 19.8361 0.175781 19.4319 0.175781H4.56527C4.16111 0.175781 3.78194 0.384115 3.56944 0.721615L1.17777 4.50078C-0.0555609 6.45078 1.03611 9.16328 3.34027 9.47578C3.50694 9.49661 3.67777 9.50912 3.84444 9.50912C4.93194 9.50912 5.89861 9.03411 6.56111 8.30078C7.22361 9.03411 8.19027 9.50912 9.27777 9.50912C10.3653 9.50912 11.3319 9.03411 11.9944 8.30078C12.6569 9.03411 13.6236 9.50912 14.7111 9.50912C15.8028 9.50912 16.7653 9.03411 17.4278 8.30078C18.0944 9.03411 19.0569 9.50912 20.1444 9.50912C20.3153 9.50912 20.4819 9.49661 20.6486 9.47578C22.9611 9.16745 24.0569 6.45495 22.8194 4.50078H22.8153ZM20.8194 10.7966H20.8153C20.5944 10.8258 20.3694 10.8424 20.1403 10.8424C19.6236 10.8424 19.1278 10.7633 18.6653 10.6216V16.1758H5.33194V10.6174C4.86527 10.7633 4.36527 10.8424 3.84861 10.8424C3.61944 10.8424 3.39027 10.8258 3.16944 10.7966H3.16527C2.99444 10.7716 2.82777 10.7424 2.66527 10.7008V18.8424C2.66527 20.3133 3.86111 21.5091 5.33194 21.5091H18.6653C20.1361 21.5091 21.3319 20.3133 21.3319 18.8424V10.7008C21.1653 10.7424 20.9986 10.7758 20.8194 10.7966Z" fill={fill} fillOpacity="0.6" />
        </svg>

    )
}
export const TeamsIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M12 0.841797C11.5502 0.841797 11.1048 0.927964 10.6893 1.09538C10.2737 1.26279 9.89611 1.50818 9.57806 1.81752C9.26 2.12686 9.00771 2.49411 8.83558 2.89828C8.66345 3.30246 8.57486 3.73565 8.57486 4.17313C8.57486 4.6106 8.66345 5.0438 8.83558 5.44797C9.00771 5.85215 9.26 6.21939 9.57806 6.52873C9.89611 6.83807 10.2737 7.08346 10.6893 7.25087C11.1048 7.41829 11.5502 7.50446 12 7.50446C12.9084 7.50446 13.7796 7.15348 14.4219 6.52873C15.0643 5.90399 15.4251 5.05665 15.4251 4.17313C15.4251 3.2896 15.0643 2.44227 14.4219 1.81752C13.7796 1.19277 12.9084 0.841797 12 0.841797ZM19.7143 2.50579C19.0323 2.50579 18.3782 2.76929 17.896 3.23832C17.4138 3.70735 17.1429 4.34349 17.1429 5.00679C17.1429 5.6701 17.4138 6.30624 17.896 6.77526C18.3782 7.24429 19.0323 7.50779 19.7143 7.50779C20.3963 7.50779 21.0503 7.24429 21.5326 6.77526C22.0148 6.30624 22.2857 5.6701 22.2857 5.00679C22.2857 4.34349 22.0148 3.70735 21.5326 3.23832C21.0503 2.76929 20.3963 2.50579 19.7143 2.50579ZM4.28571 2.50579C3.60373 2.50579 2.94968 2.76929 2.46744 3.23832C1.9852 3.70735 1.71429 4.34349 1.71429 5.00679C1.71429 5.6701 1.9852 6.30624 2.46744 6.77526C2.94968 7.24429 3.60373 7.50779 4.28571 7.50779C4.9677 7.50779 5.62175 7.24429 6.10399 6.77526C6.58623 6.30624 6.85714 5.6701 6.85714 5.00679C6.85714 4.34349 6.58623 3.70735 6.10399 3.23832C5.62175 2.76929 4.9677 2.50579 4.28571 2.50579ZM6.85714 10.8308C6.86031 10.3906 7.04232 9.9695 7.36347 9.65934C7.68462 9.34917 8.11884 9.17511 8.57143 9.17512H15.4286C15.8832 9.17512 16.3193 9.35079 16.6408 9.66347C16.9622 9.97616 17.1429 10.4002 17.1429 10.8425V15.8444C17.1433 16.3692 17.0588 16.8908 16.8926 17.3901C16.513 18.5217 15.731 19.4846 14.6872 20.106C13.6433 20.7273 12.4059 20.9664 11.1971 20.7802C9.98829 20.594 8.88734 19.9948 8.09191 19.0902C7.29648 18.1856 6.85869 17.0348 6.85714 15.8444V10.8308ZM5.14286 10.8425C5.14286 10.2339 5.30914 9.66532 5.60229 9.17512H1.71429C1.25963 9.17512 0.823594 9.35079 0.502103 9.66347C0.180612 9.97616 2.3728e-07 10.4002 2.3728e-07 10.8425V15.0108C-0.000233225 15.6932 0.171816 16.3653 0.501039 16.968C0.830262 17.5706 1.30659 18.0854 1.88819 18.4672C2.46978 18.849 3.13886 19.0861 3.83667 19.1576C4.53447 19.2291 5.23965 19.1328 5.89029 18.8773C5.39793 17.9375 5.14178 16.8975 5.14286 15.8428V10.8425ZM18.8571 10.8425V15.8444C18.8571 16.9366 18.588 17.967 18.1097 18.8773C18.7603 19.1328 19.4655 19.2291 20.1633 19.1576C20.8611 19.0861 21.5302 18.849 22.1118 18.4672C22.6934 18.0854 23.1697 17.5706 23.499 16.968C23.8282 16.3653 24.0002 15.6932 24 15.0108V10.8425C24 10.4002 23.8194 9.97616 23.4979 9.66347C23.1764 9.35079 22.7404 9.17512 22.2857 9.17512H18.3977C18.6891 9.66532 18.8571 10.2339 18.8571 10.8425Z" fill={fill} fillOpacity="0.6" />
        </svg>

    )
}
import React from 'react';

export const ArrowRightIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="9" height="14" viewBox="0 0 9 14" fill={fill} xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path
                d="M1.66667 1.16602L7.5 6.99935L1.66667 12.8327"
                stroke={fill}
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

    );
};

export const ParticipantsIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M10 3.75C10 4.74456 9.60491 5.69839 8.90165 6.40165C8.19839 7.10491 7.24456 7.5 6.25 7.5C5.25544 7.5 4.30161 7.10491 3.59835 6.40165C2.89509 5.69839 2.5 4.74456 2.5 3.75C2.5 2.75544 2.89509 1.80161 3.59835 1.09835C4.30161 0.395088 5.25544 0 6.25 0C7.24456 0 8.19839 0.395088 8.90165 1.09835C9.60491 1.80161 10 2.75544 10 3.75ZM15.25 7.5C16.0456 7.5 16.8087 7.18393 17.3713 6.62132C17.9339 6.05871 18.25 5.29565 18.25 4.5C18.25 3.70435 17.9339 2.94129 17.3713 2.37868C16.8087 1.81607 16.0456 1.5 15.25 1.5C14.4544 1.5 13.6913 1.81607 13.1287 2.37868C12.5661 2.94129 12.25 3.70435 12.25 4.5C12.25 5.29565 12.5661 6.05871 13.1287 6.62132C13.6913 7.18393 14.4544 7.5 15.25 7.5ZM13.75 11.391V11.25C13.75 10.4386 13.4868 9.64911 13 9H17.9095C18.9235 9 19.747 9.822 19.747 10.8375C19.747 10.8375 19.747 14.25 15.247 14.25C14.35 14.25 13.6315 14.115 13.057 13.8975C13.4139 13.2404 13.6415 12.5209 13.7275 11.778C13.7365 11.685 13.7425 11.6055 13.7455 11.5395L13.75 11.391ZM12.25 11.25C12.25 10.6533 12.0129 10.081 11.591 9.65901C11.169 9.23705 10.5967 9 10 9H2.5C1.90326 9 1.33097 9.23705 0.90901 9.65901C0.487053 10.081 0.25 10.6533 0.25 11.25V11.3625C0.25 11.3625 0.25 15.75 6.25 15.75C11.968 15.75 12.2365 11.766 12.25 11.391V11.25Z" fill={fill} />
        </svg>
    )
}
export const MailIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M6.5 5.5L11.5 9L16.5 5.5" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.5 13.5V3.5C1.5 2.96957 1.71071 2.46086 2.08579 2.08579C2.46086 1.71071 2.96957 1.5 3.5 1.5H19.5C20.0304 1.5 20.5391 1.71071 20.9142 2.08579C21.2893 2.46086 21.5 2.96957 21.5 3.5V13.5C21.5 14.0304 21.2893 14.5391 20.9142 14.9142C20.5391 15.2893 20.0304 15.5 19.5 15.5H3.5C2.96957 15.5 2.46086 15.2893 2.08579 14.9142C1.71071 14.5391 1.5 14.0304 1.5 13.5Z" stroke={fill} strokeWidth="1.5" />
        </svg>

    )
}
export const DuplicateIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M14.3438 4.4375H6.46875C5.79742 4.4375 5.15359 4.70418 4.67889 5.17889C4.20418 5.65359 3.9375 6.29742 3.9375 6.96875V14.8438C3.9375 15.5151 4.20418 16.1589 4.67889 16.6336C5.15359 17.1083 5.79742 17.375 6.46875 17.375H14.3438C15.0151 17.375 15.6589 17.1083 16.1336 16.6336C16.6083 16.1589 16.875 15.5151 16.875 14.8438V6.96875C16.875 6.29742 16.6083 5.65359 16.1336 5.17889C15.6589 4.70418 15.0151 4.4375 14.3438 4.4375ZM13.2029 11.4688H10.9688V13.7029C10.9688 14.0056 10.736 14.2654 10.4333 14.2805C10.3573 14.2842 10.2813 14.2724 10.2099 14.2458C10.1385 14.2192 10.0733 14.1784 10.0182 14.1259C9.96309 14.0734 9.9192 14.0102 9.88921 13.9402C9.85922 13.8702 9.84376 13.7949 9.84375 13.7188V11.4688H7.60957C7.30687 11.4688 7.04707 11.236 7.03195 10.9333C7.02829 10.8573 7.0401 10.7813 7.06668 10.7099C7.09326 10.6385 7.13405 10.5733 7.18658 10.5182C7.23911 10.4631 7.30228 10.4192 7.37227 10.3892C7.44226 10.3592 7.51761 10.3438 7.59375 10.3438H9.84375V8.10957C9.84375 7.80687 10.0765 7.54707 10.3792 7.53195C10.4552 7.52829 10.5312 7.5401 10.6026 7.56668C10.674 7.59326 10.7392 7.63405 10.7943 7.68658C10.8494 7.73911 10.8933 7.80228 10.9233 7.87227C10.9533 7.94226 10.9687 8.01761 10.9688 8.09375V10.3438H13.2188C13.295 10.3437 13.3704 10.3591 13.4405 10.389C13.5105 10.4189 13.5738 10.4628 13.6264 10.518C13.679 10.5731 13.7198 10.6383 13.7465 10.7097C13.7731 10.7811 13.7849 10.8572 13.7812 10.9333C13.7665 11.236 13.5056 11.4688 13.2029 11.4688Z" fill={fill} />
            <path d="M13.9177 3.3125C13.7426 2.81934 13.4193 2.39242 12.9921 2.09029C12.5648 1.78816 12.0545 1.62563 11.5312 1.625H3.65625C2.98492 1.625 2.34109 1.89168 1.86639 2.36639C1.39168 2.84109 1.125 3.48492 1.125 4.15625V12.0312C1.12563 12.5545 1.28816 13.0648 1.59029 13.4921C1.89242 13.9193 2.31934 14.2426 2.8125 14.4177V6.125C2.8125 5.37908 3.10882 4.66371 3.63626 4.13626C4.16371 3.60882 4.87908 3.3125 5.625 3.3125H13.9177Z" fill={fill} />
        </svg>

    )
}
export const TrashIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M11.5698 3.50335C11.7213 3.50335 11.8667 3.56355 11.9738 3.67072C12.081 3.77788 12.1412 3.92322 12.1412 4.07478C12.1412 4.22633 12.081 4.37167 11.9738 4.47884C11.8667 4.586 11.7213 4.64621 11.5698 4.64621H10.9983L10.9966 4.68678L10.4635 12.1559C10.4429 12.4443 10.3139 12.7141 10.1024 12.9111C9.89086 13.1081 9.61253 13.2176 9.32347 13.2176H4.67261C4.38355 13.2176 4.10522 13.1081 3.89369 12.9111C3.68216 12.7141 3.55313 12.4443 3.53261 12.1559L2.99947 4.68735C2.9986 4.67365 2.99822 4.65993 2.99833 4.64621H2.4269C2.27534 4.64621 2.13 4.586 2.02284 4.47884C1.91567 4.37167 1.85547 4.22633 1.85547 4.07478C1.85547 3.92322 1.91567 3.77788 2.02284 3.67072C2.13 3.56355 2.27534 3.50335 2.4269 3.50335H11.5698ZM8.14118 1.78906C8.29274 1.78906 8.43808 1.84927 8.54524 1.95643C8.65241 2.06359 8.71261 2.20894 8.71261 2.36049C8.71261 2.51204 8.65241 2.65739 8.54524 2.76455C8.43808 2.87172 8.29274 2.93192 8.14118 2.93192H5.85547C5.70392 2.93192 5.55857 2.87172 5.45141 2.76455C5.34424 2.65739 5.28404 2.51204 5.28404 2.36049C5.28404 2.20894 5.34424 2.06359 5.45141 1.95643C5.55857 1.84927 5.70392 1.78906 5.85547 1.78906H8.14118Z" fill={fill} />
        </svg>

    )
}
export const HeartIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.46964 12.8909C4.01714 11.0117 0.667969 7.90758 0.667969 4.97258C0.667969 0.0692483 5.2513 -1.76159 9.0013 2.02508C12.7513 -1.76159 17.3346 0.0692483 17.3346 4.97258C17.3346 7.90758 13.9846 11.0117 11.533 12.8909C10.423 13.7409 9.86797 14.1667 9.0013 14.1667C8.13464 14.1667 7.57964 13.7417 6.46964 12.8909ZM12.7513 2.70842C12.9171 2.70842 13.076 2.77426 13.1932 2.89147C13.3105 3.00868 13.3763 3.16765 13.3763 3.33342V4.37508H14.418C14.5837 4.37508 14.7427 4.44093 14.8599 4.55814C14.9771 4.67535 15.043 4.83432 15.043 5.00008C15.043 5.16584 14.9771 5.32481 14.8599 5.44202C14.7427 5.55923 14.5837 5.62508 14.418 5.62508H13.3763V6.66675C13.3763 6.83251 13.3105 6.99148 13.1932 7.10869C13.076 7.2259 12.9171 7.29175 12.7513 7.29175C12.5855 7.29175 12.4266 7.2259 12.3094 7.10869C12.1922 6.99148 12.1263 6.83251 12.1263 6.66675V5.62508H11.0846C10.9189 5.62508 10.7599 5.55923 10.6427 5.44202C10.5255 5.32481 10.4596 5.16584 10.4596 5.00008C10.4596 4.83432 10.5255 4.67535 10.6427 4.55814C10.7599 4.44093 10.9189 4.37508 11.0846 4.37508H12.1263V3.33342C12.1263 3.16765 12.1922 3.00868 12.3094 2.89147C12.4266 2.77426 12.5855 2.70842 12.7513 2.70842Z" fill={fill} />
        </svg>

    )
}
export const FilterIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.953 0.75H18.047C18.714 0.75 19.284 0.75 19.74 0.807C20.223 0.868 20.69 1.005 21.074 1.365C21.464 1.732 21.619 2.189 21.687 2.664C21.75 3.101 21.75 3.644 21.75 4.264V5.04C21.75 5.529 21.75 5.95 21.714 6.303C21.674 6.683 21.589 7.038 21.383 7.379C21.178 7.718 20.903 7.964 20.585 8.184C20.286 8.392 19.905 8.607 19.455 8.86L16.513 10.516C15.843 10.893 15.61 11.029 15.454 11.164C15.097 11.474 14.892 11.819 14.796 12.25C14.755 12.435 14.75 12.667 14.75 13.373V16.105C14.75 17.006 14.75 17.771 14.657 18.36C14.559 18.985 14.33 19.585 13.73 19.96C13.143 20.327 12.498 20.293 11.87 20.144C11.265 20.001 10.52 19.709 9.626 19.36L9.54 19.326C9.12 19.162 8.754 19.019 8.464 18.869C8.152 18.708 7.862 18.508 7.641 18.196C7.416 17.88 7.327 17.542 7.286 17.196C7.25 16.881 7.25 16.503 7.25 16.081V13.373C7.25 12.667 7.246 12.435 7.204 12.25C7.11322 11.8242 6.88137 11.4416 6.546 11.164C6.39 11.029 6.156 10.893 5.487 10.516L2.545 8.86C2.095 8.607 1.714 8.392 1.415 8.184C1.097 7.964 0.822 7.718 0.617 7.379C0.411 7.038 0.326 6.682 0.287 6.303C0.25 5.951 0.25 5.529 0.25 5.04V4.264C0.25 3.644 0.25 3.101 0.313 2.664C0.381 2.189 0.536 1.732 0.926 1.365C1.31 1.005 1.776 0.868 2.26 0.807C2.716 0.75 3.286 0.75 3.953 0.75ZM2.448 2.296C2.114 2.338 2.008 2.406 1.953 2.459C1.903 2.505 1.839 2.586 1.797 2.877C1.752 3.195 1.75 3.629 1.75 4.315V5.005C1.75 5.539 1.75 5.883 1.778 6.149C1.804 6.396 1.848 6.515 1.902 6.604C1.957 6.695 2.049 6.798 2.27 6.952C2.504 7.114 2.823 7.295 3.31 7.569L6.223 9.209L6.303 9.254C6.863 9.569 7.243 9.783 7.529 10.031C8.10742 10.519 8.50823 11.1845 8.669 11.924C8.75 12.291 8.75 12.704 8.75 13.284V16.043C8.75 16.515 8.751 16.805 8.777 17.023C8.799 17.221 8.836 17.288 8.863 17.327C8.893 17.369 8.953 17.434 9.152 17.537C9.364 17.646 9.657 17.761 10.119 17.942C11.08 18.318 11.727 18.569 12.216 18.685C12.695 18.799 12.853 18.74 12.934 18.689C13.002 18.646 13.107 18.559 13.176 18.126C13.248 17.669 13.25 17.023 13.25 16.042V13.284C13.25 12.704 13.25 12.291 13.332 11.924C13.4925 11.1847 13.893 10.5191 14.471 10.031C14.757 9.783 15.138 9.568 15.696 9.254L15.777 9.209L18.69 7.569C19.177 7.295 19.496 7.114 19.73 6.952C19.951 6.798 20.043 6.695 20.098 6.604C20.152 6.515 20.196 6.396 20.221 6.149C20.249 5.883 20.25 5.539 20.25 5.004V4.314C20.25 3.629 20.248 3.194 20.203 2.877C20.161 2.586 20.096 2.505 20.048 2.459C19.992 2.407 19.886 2.338 19.552 2.296C19.202 2.251 18.727 2.25 18 2.25H4C3.273 2.25 2.799 2.251 2.448 2.296Z" fill={fill} />
        </svg>

    )
}
export const XIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
            <path d="M1.01562 12.6264L12.9786 1.36719M1.01562 1.36719L12.9786 12.6264" stroke={fill} strokeWidth="1.05556" strokeLinecap="round" />
        </svg>

    )
}
export const SearchIcon: React.FC<IconProps> = ({ fill = "currentcolor" }) => { return ( 
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={style.icon}>
<path d="M16.3752 16.3752L12.5751 12.5751M12.5751 12.5751C13.2251 11.925 13.7407 11.1533 14.0925 10.304C14.4443 9.45473 14.6254 8.54446 14.6254 7.62518C14.6254 6.7059 14.4443 5.79563 14.0925 4.94633C13.7407 4.09703 13.2251 3.32533 12.5751 2.67531C11.925 2.02528 11.1533 1.50965 10.304 1.15786C9.45473 0.806065 8.54446 0.625 7.62518 0.625C6.7059 0.625 5.79563 0.806065 4.94633 1.15786C4.09703 1.50965 3.32533 2.02528 2.67531 2.67531C1.36252 3.98809 0.625 5.76862 0.625 7.62518C0.625 9.48174 1.36252 11.2623 2.67531 12.5751C3.98809 13.8878 5.76862 14.6254 7.62518 14.6254C9.48174 14.6254 11.2623 13.8878 12.5751 12.5751Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
</svg>
) }
// export const Icon: React.FC<IconProps> = ({ fill = "currentcolor" }) => { return ( ) }

