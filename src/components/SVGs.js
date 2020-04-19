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

export {ProfilePic, Greenhouse};