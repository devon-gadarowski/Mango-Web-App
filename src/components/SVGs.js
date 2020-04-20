import React from 'react';

const ProfilePicSVG = (props) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
    <circle cx="20" cy="20" r="18" fill="#FAC36E"/>
    <circle cx="20" cy="14" r="8" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.02307 33.4373C8.41038 28.7288 13.6246 25 20 25C26.3754 25 31.5896 28.7288 31.9769 33.4373C28.7952 36.2752 24.599 38 20 38C15.401 38 11.2048 36.2752 8.02307 33.4373Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <path d="M0 0H40V40H0V0Z" fill="white"/>
    </clipPath>
    </defs>
    </svg>
);

const ProfilePic = (props) => {
    return (
        <div>
            <ProfilePicSVG props={props}/>
        </div>
    );
};

const GreenhouseSVG = (props) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="m58 62v-39.48l-26-20.801-26 20.801v39.48zm-35-8.219 3-.75 3.758.939a.991.991 0 0 0 .484 0l3.642-.91 3.669 1.84a1 1 0 0 0 .689.075l2.758-.694v5.719h-18zm20 6.219v-2h7v-2h-7v-2h13v2h-4v2h4v2zm13-8h-5v-6h5zm0-17h-5v-15.519l5 4zm-18-25.919v5.919h-12v-5.919l6-4.8zm-25 10.4v8.519h2v-10.119l9-7.2v8.319h2v-2h12v7h2v-3h6v-2h-6v-8.319l9 7.2v22.119h2v-3h5v7h-5v-2h-2v2h-7v2h7v6h-7a1.838 1.838 0 0 0 -.242.03l-1.758.439v-12.469h-2v12.882l-3.553-1.777a1 1 0 0 0 -.689-.075l-.758.189v-13.219h5a9.01 9.01 0 0 0 9-9v-3h-7a8.986 8.986 0 0 0 -7.031 3.4 9 9 0 0 0 -8.969-8.4h-7v3a9.01 9.01 0 0 0 9 9h5v18.719l-1 .25-3.758-.939a.984.984 0 0 0 -.242-.03v-16h-2v16.469l-2.123.531h-6.877v-6h7v-2h-7v-12h-2v3h-5v-11.52zm18 10.651-7.445-4.964-1.11 1.664 6.255 4.168h-2.7a7.008 7.008 0 0 1 -7-7v-1h5a7.008 7.008 0 0 1 7 7zm9.445.036-7.445 4.964v-.132a7.008 7.008 0 0 1 7-7h5v1a7.008 7.008 0 0 1 -7 7h-2.7l6.252-4.168zm-27.445 13.832h-5v-7h5zm-5 2h5v6h-5zm0 12h4v-2h-4v-2h13v2h-7v2h7v2h-13z"/>
    <path d="m27 55h2v2h-2z"/> <path d="m33 56h2v2h-2z"/> <path d="m18 34h2v2h-2z"/> <path d="m44 39h2v2h-2z"/>
    <path d="m49 6h2v2h-2z"/> <path d="m49 10h2v2h-2z"/> <path d="m47 8h2v2h-2z"/> <path d="m51 8h2v2h-2z"/>
    <path d="m15 2h2v2h-2z"/> <path d="m15 6h2v2h-2z"/> <path d="m13 4h2v2h-2z"/> <path d="m17 4h2v2h-2z"/>
    </svg>
);

const Greenhouse = (props) => {
    return (
        <div>
            <GreenhouseSVG props={props}/>
        </div>
    );
};

const UserSVG = (props) => (
    <svg width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6865 21.195C21.5983 21.195 24.1193 20.1506 26.1798 18.0901C28.2396 16.03 29.2843 13.5093 29.2843 10.5971C29.2843 7.68602 28.24 5.16497 26.1795 3.10415C24.119 1.04434 21.5979 0 18.6865 0C15.7743 0 13.2536 1.04434 11.1935 3.10449C9.1333 5.16463 8.08862 7.68568 8.08862 10.5971C8.08862 13.5093 9.1333 16.0303 11.1935 18.0905C13.2543 20.1503 15.7753 21.195 18.6865 21.195V21.195ZM13.0169 4.92763C14.5977 3.34686 16.4521 2.57846 18.6865 2.57846C20.9205 2.57846 22.7752 3.34686 24.3563 4.92763C25.9371 6.50875 26.7058 8.36345 26.7058 10.5971C26.7058 12.8315 25.9371 14.6859 24.3563 16.267C22.7752 17.8481 20.9205 18.6165 18.6865 18.6165C16.4528 18.6165 14.5984 17.8478 13.0169 16.267C11.4358 14.6862 10.6671 12.8315 10.6671 10.5971C10.6671 8.36345 11.4358 6.50875 13.0169 4.92763Z" fill="white"/>
        <path d="M37.2298 33.8338C37.1704 32.9765 37.0502 32.0412 36.8733 31.0536C36.6947 30.0586 36.4648 29.118 36.1895 28.2583C35.9048 27.3697 35.5185 26.4922 35.0401 25.6513C34.5443 24.7785 33.9615 24.0185 33.3076 23.3931C32.6238 22.7388 31.7866 22.2128 30.8184 21.8291C29.8536 21.4474 28.7845 21.2541 27.6407 21.2541C27.1916 21.2541 26.7572 21.4384 25.9183 21.9845C25.402 22.3212 24.7981 22.7106 24.124 23.1413C23.5476 23.5086 22.7668 23.8527 21.8024 24.1642C20.8614 24.4687 19.906 24.6231 18.9627 24.6231C18.0201 24.6231 17.0647 24.4687 16.1231 24.1642C15.1597 23.853 14.3785 23.5089 13.8031 23.1417C13.1354 22.715 12.5312 22.3256 12.0072 21.9842C11.1689 21.438 10.7346 21.2537 10.2854 21.2537C9.14136 21.2537 8.07251 21.4474 7.10806 21.8294C6.14059 22.2125 5.30304 22.7385 4.61856 23.3934C3.96463 24.0192 3.38187 24.7788 2.88638 25.6513C2.40869 26.4922 2.02197 27.3694 1.7373 28.2586C1.46237 29.1183 1.23242 30.0586 1.05383 31.0536C0.876587 32.0399 0.756744 32.9754 0.697327 33.8348C0.638916 34.6751 0.609375 35.5495 0.609375 36.4331C0.609375 38.7299 1.33951 40.5893 2.7793 41.9606C4.20129 43.3138 6.08252 43.9999 8.37094 43.9999H29.5572C31.845 43.9999 33.7262 43.3138 35.1485 41.9606C36.5887 40.5903 37.3188 38.7302 37.3188 36.4327C37.3185 35.5462 37.2886 34.6717 37.2298 33.8338V33.8338ZM33.3707 40.0925C32.4311 40.9868 31.1837 41.4215 29.5569 41.4215H8.37094C6.74384 41.4215 5.4964 40.9868 4.55713 40.0928C3.63565 39.2156 3.18784 38.0182 3.18784 36.4331C3.18784 35.6086 3.21503 34.7946 3.26941 34.0131C3.32245 33.2463 3.43088 32.4041 3.59167 31.5091C3.75046 30.6253 3.95255 29.7958 4.1929 29.0448C4.42352 28.3248 4.73807 27.6117 5.12814 26.9249C5.50043 26.2703 5.92877 25.7087 6.40143 25.2562C6.84354 24.8329 7.40079 24.4864 8.0574 24.2266C8.66467 23.9863 9.34714 23.8547 10.088 23.8349C10.1783 23.8829 10.3391 23.9745 10.5996 24.1444C11.1297 24.4898 11.7406 24.8839 12.416 25.3153C13.1774 25.8007 14.1583 26.2391 15.3302 26.6174C16.5283 27.0048 17.7502 27.2015 18.9631 27.2015C20.1759 27.2015 21.3982 27.0048 22.5956 26.6178C23.7685 26.2388 24.7491 25.8007 25.5114 25.3146C26.2026 24.8728 26.7965 24.4901 27.3265 24.1444C27.587 23.9748 27.7478 23.8829 27.8381 23.8349C28.5793 23.8547 29.2618 23.9863 29.8694 24.2266C30.5257 24.4864 31.0829 24.8332 31.5251 25.2562C31.9977 25.7084 32.4261 26.27 32.7983 26.9253C33.1888 27.6117 33.5036 28.3251 33.7339 29.0445C33.9746 29.7964 34.177 30.6256 34.3355 31.5088C34.4959 32.4054 34.6047 33.248 34.6577 34.0134V34.0141C34.7125 34.7925 34.74 35.6063 34.7403 36.4331C34.74 38.0186 34.2922 39.2156 33.3707 40.0925V40.0925Z" fill="white"/>
        <path d="M6 24L10 23L14 25L20 26L25 24L28.5 22L33.5 26L35.5 33V40L30.5 43H7.5L4.5 41.5L2 38L3 29.5L6 24Z" fill="white" stroke="white"/>
        <circle cx="19" cy="11" r="9" fill="white"/>
    </svg>

);

const User = (props) => {
    return (
        <div>
            <UserSVG props={props}/>
        </div>
    );
};

const LeafSVG = (props) => (
    <div>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 469.333 469.333" fill="#FFFFFF">
        <g>
        <g>
        <path d="M468.523,6.592C466.88,2.603,462.976,0,458.667,0C44.694,0,0,171.563,0,245.333c0,26.539,5.888,51.328,17.515,73.664
                c1.792,3.456,5.333,5.653,9.216,5.739c3.669-0.107,7.531-1.941,9.472-5.333C64.15,271.104,143.296,151.893,274.006,88.555
                c5.355-2.56,11.755-0.363,14.293,4.907c2.56,5.312,0.341,11.712-4.949,14.272c-9.856,4.779-19.328,9.984-28.608,15.381
                c-3.541,2.069-6.976,4.267-10.453,6.421c-5.227,3.243-10.389,6.549-15.424,9.963c-5.013,3.371-9.963,6.827-14.827,10.368
                c-1.515,1.109-2.965,2.24-4.459,3.371C79.488,250.176,0,404.821,0,458.667c0,5.888,4.779,10.667,10.667,10.667
                s10.667-4.779,10.667-10.667c0-17.195,11.712-52.053,33.877-93.632c32.171,26.304,75.456,40.299,126.123,40.299
                c136.981,0,165.675-130.347,181.077-200.384c20.736-94.251,66.368-149.312,103.787-186.752
                C469.27,15.147,470.166,10.581,468.523,6.592z"/>
        </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
    </svg>
    </div>
);

const Leaf = (props) => {
    return (
        <div>
            <LeafSVG props={props}/>
        </div>
    );
};

const GearSVG = (props) => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF">
        <path d="m499.953125 197.703125-39.351563-8.554687c-3.421874-10.476563-7.660156-20.695313-12.664062-30.539063l21.785156-33.886719c3.890625-6.054687 
        3.035156-14.003906-2.050781-19.089844l-61.304687-61.304687c-5.085938-5.085937-13.035157-5.941406-19.089844-2.050781l-33.886719 
        21.785156c-9.84375-5.003906-20.0625-9.242188-30.539063-12.664062l-8.554687-39.351563c-1.527344-7.03125-7.753906-12.046875-14.949219-12.046875h-86.695312c-7.195313 
        0-13.421875 5.015625-14.949219 12.046875l-8.554687 39.351563c-10.476563 3.421874-20.695313 7.660156-30.539063 12.664062l-33.886719-21.785156c-6.054687-3.890625-14.003906-3.035156-19.089844 
        2.050781l-61.304687 61.304687c-5.085937 5.085938-5.941406 13.035157-2.050781 19.089844l21.785156 33.886719c-5.003906 9.84375-9.242188 20.0625-12.664062 30.539063l-39.351563 8.554687c-7.03125 1.53125-12.046875 
        7.753906-12.046875 14.949219v86.695312c0 7.195313 5.015625 13.417969 12.046875 14.949219l39.351563 8.554687c3.421874 10.476563 7.660156 20.695313 12.664062 30.539063l-21.785156 33.886719c-3.890625 6.054687-3.035156 14.003906 2.050781 
        19.089844l61.304687 61.304687c5.085938 5.085937 13.035157 5.941406 19.089844 2.050781l33.886719-21.785156c9.84375 5.003906 20.0625 9.242188 30.539063 12.664062l8.554687 39.351563c1.527344 7.03125 7.753906 12.046875 14.949219 12.046875h86.695312c7.195313 
        0 13.421875-5.015625 14.949219-12.046875l8.554687-39.351563c10.476563-3.421874 20.695313-7.660156 30.539063-12.664062l33.886719 21.785156c6.054687 3.890625 14.003906 3.039063 19.089844-2.050781l61.304687-61.304687c5.085937-5.085938 5.941406-13.035157 2.050781-19.089844l-21.785156-33.886719c5.003906-9.84375 
        9.242188-20.0625 12.664062-30.539063l39.351563-8.554687c7.03125-1.53125 12.046875-7.753906 12.046875-14.949219v-86.695312c0-7.195313-5.015625-13.417969-12.046875-14.949219zm-152.160156 58.296875c0 50.613281-41.179688 
        91.792969-91.792969 91.792969s-91.792969-41.179688-91.792969-91.792969 41.179688-91.792969 91.792969-91.792969 91.792969 41.179688 91.792969 91.792969zm0 0"/>
    </svg>
);

const Gear = (props) => {
    return (
        <div>
            <GearSVG props={props}/>
        </div>
    );
};

export {ProfilePic, Greenhouse, User, Leaf, Gear};