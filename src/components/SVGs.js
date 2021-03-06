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

const PlusSVG = (props) => (
    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.5 0V47.5" stroke="white" stroke-width="9"/>
        <path d="M0.75 23.75L48.25 23.75" stroke="white" stroke-width="9"/>
    </svg>
);

const Plus = (props) => {
    return (
        <div>
            <PlusSVG props={props}/>
        </div>
    );
};

const LeafSVG = (props) => (
    <div>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 469.333 469.333" xml="preserve" fill='#FFFFFF'>
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

const LogoutSVG = (props) => (
    <svg viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.72858" y="2.79999" width="22.6143" height="37.4" rx="3" stroke="#FF8C42" stroke-width="4"/>
        <rect x="19.4572" y="16.5714" width="14.7857" height="8.87143" fill="white"/>
        <path d="M41.2178 22.5607C41.8036 21.9749 41.8036 21.0251 41.2178 20.4393L31.6719 10.8934C31.0861 10.3076 30.1363 10.3076 29.5505 10.8934C28.9647 11.4792 28.9647 12.4289 29.5505 13.0147L38.0358 21.5L29.5505 29.9853C28.9647 30.5711 28.9647 31.5208 29.5505 32.1066C30.1363 32.6924 31.0861 32.6924 31.6719 32.1066L41.2178 22.5607ZM13.5428 23L40.1571 23L40.1571 20L13.5428 20L13.5428 23Z" fill="#FF8C42"/>
    </svg>
);

const Logout = (props) => {
    return (
        <div>
            <LogoutSVG props={props}/>
        </div>
    );
};

export {ProfilePic, Greenhouse, Plus, Leaf, Gear, Logout};