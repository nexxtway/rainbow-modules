import React from 'react';
import { Button, Card } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import WhenAuthenticated from '../../src/components/WhenAuthenticated';
import WhenNoAuthenticated from '../../src/components/WhenNoAuthenticated';
import EmailPasswordSignUpForm from '../../src/components/EmailPasswordSignUpForm';

const Form = () => {
    const style = {
        margin: 'auto',
        maxWidth: '400px',
    };
    const logoStyle = { textAlign: 'center' };
    const logoTextStyle = { fontSize: '1.8em' };

    const rainbowLogo = (
        <svg width="40" height="40" viewBox="0 0 40 40">
            <g fill="none">
                <path fill="#323B45" d="M1.771 1.71H38.18V38.119H1.771z" />
                <rect width="11.84" height="11.84" x="28.153" y=".032" fill="#1DE9B6" rx="2" />
                <rect width="11.84" height="11.84" x="14.08" y=".032" fill="#01B6F5" rx="2" />
                <rect width="11.84" height="11.84" x=".11" y=".032" fill="#FE4849" rx="2" />
                <path
                    fill="#F4F6F9"
                    d="M30.075 13.995h7.84c1.104 0 2 .895 2 2v7.84c0 1.104-.896 2-2 2h-7.84c-1.105 0-2-.896-2-2v-7.84c0-1.105.895-2 2-2z"
                />
                <path
                    fill="#FC0"
                    d="M16.005 13.995h7.84c1.105 0 2 .895 2 2v7.84c0 1.104-.895 2-2 2h-7.84c-1.104 0-2-.896-2-2v-7.84c0-1.105.896-2 2-2z"
                />
                <path
                    fill="#F8752D"
                    d="M2.032 13.995h7.84c1.105 0 2 .895 2 2v7.84c0 1.104-.895 2-2 2h-7.84c-1.105 0-2-.896-2-2v-7.84c0-1.105.895-2 2-2z"
                />
                <rect width="11.84" height="11.84" x="28.075" y="27.954" fill="#01B6F5" rx="2" />
                <rect width="11.84" height="11.84" x="14.005" y="27.954" fill="#EA4243" rx="2" />
                <rect width="11.84" height="11.84" x=".032" y="27.954" fill="#1AD1A3" rx="2" />
            </g>
        </svg>
    );

    const nameIcon = (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <defs>
                <circle id="prefix__a" cx="10" cy="10" r="10" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <g>
                    <mask id="prefix__b" fill="#fff">
                        <use xlinkHref="#prefix__a" />
                    </mask>
                    <use fill="#E2E6EB" fillRule="nonzero" xlinkHref="#prefix__a" />
                    <path
                        fill="#ECC19C"
                        fillRule="nonzero"
                        d="M13.355 17.726h-.002c-.215-.163-.44-.308-.677-.438-.007-.004-.013-.008-.02-.01-1.123-.62-1.883-1.814-1.883-3.188l-1.699-.008c0 1.378-.766 2.578-1.898 3.196l-.004.002c-.24.13-.469.277-.686.438-.498.37-.934.82-1.29 1.33-.648.93 10.157 1.148 9.618.273-.382-.62-.878-1.16-1.459-1.595z"
                        mask="url(#prefix__b)"
                    />
                    <path
                        fill="#01AEEB"
                        fillRule="nonzero"
                        d="M15.664 22.33H4.167c0-1.89.911-3.565 2.319-4.613.217-.16.446-.307.686-.438l.004-.002c.185-.103.362-.22.524-.352.564.577 1.35.935 2.22.935.87 0 1.654-.358 2.216-.933.161.133.336.25.52.35.007.002.013.006.02.01.237.13.462.276.677.438h.002c1.402 1.048 2.309 2.72 2.309 4.605z"
                        mask="url(#prefix__b)"
                    />
                </g>
                <path
                    fill="#ECC19C"
                    fillRule="nonzero"
                    d="M5.504 5.515v4.515c0 3.054 2.68 5.53 4.412 5.53 1.73 0 4.412-2.476 4.412-5.53V5.515H5.504z"
                />
                <path
                    fill="#494846"
                    fillRule="nonzero"
                    d="M13.609 4.684C12.647 3.48 11.188 2.71 9.555 2.71c-2.901 0-5.25 2.421-5.25 5.407 0 1.585.66 3.01 1.715 3.998-.272-.682-.423-1.446-.423-2.253 0-1.297.394-2.485 1.049-3.399.695.31 1.822.421 3.058.25 1.225-.167 2.27-.572 2.858-1.054 1.073.948 1.771 2.477 1.771 4.203 0 .884-.18 1.715-.506 2.445 1.036-.429 1.798-1.958 1.798-3.777 0-1.947-.874-3.553-2.016-3.846z"
                />
            </g>
        </svg>
    );

    const emailIcon = (
        <svg width="19px" height="11px" viewBox="0 0 19 11" version="1.1">
            <title>email</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="rainbow-modules-email-password-signIn-form"
                    transform="translate(-384.000000, -289.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group" transform="translate(332.000000, 113.000000)">
                        <g id="input/required-copy" transform="translate(40.000000, 137.000000)">
                            <g id="input/placeholder">
                                <g
                                    id="input-base/placeholder"
                                    transform="translate(0.000000, 24.000000)"
                                >
                                    <g id="input/placeholder">
                                        <g id="email" transform="translate(12.250000, 15.000000)">
                                            <g id="Group">
                                                <path
                                                    d="M16.9515809,0.224073227 L9.22875149,4.81898169 L0.969221968,0.224073227 C0.799797673,0.370297483 0.692628832,0.578924485 0.692628832,0.810343249 C0.690991174,7.43773591 0.690991174,10.7148755 0.692628832,10.641762 L9.22871482,5.83867277 L17.1623255,10.641762 L17.2281007,10.641762 L17.2281007,0.810343249 C17.2281007,0.578924485 17.1210052,0.370297483 16.9515809,0.224073227 Z"
                                                    id="Shape"
                                                    fill="#009ACF"
                                                />
                                                <polygon
                                                    id="Shape"
                                                    fill="#01B6F5"
                                                    points="0.692628832 10.6429587 17.1665904 10.641762 10.5923442 5.3266476 7.35346682 5.3266476"
                                                />
                                                <path
                                                    d="M1.56660706,0.0114988558 C1.33652511,0.0114988558 1.12691431,0.0927116705 0.969221968,0.224107551 L8.35941747,7.2328833 C8.69481754,7.55093822 9.24358842,7.55093822 9.57898849,7.2328833 L16.969222,0.224073227 C16.8115296,0.0926773455 16.6019188,0.0114988558 16.3718369,0.0114988558 L1.56660706,0.0114988558 L1.56660706,0.0114988558 Z"
                                                    id="Shape"
                                                    fill="#38CCFF"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );

    const passwordIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
            <g fill="none">
                <path
                    fill="#009ACF"
                    d="M6.22 0C3.605.003 1.485 1.82 1.482 4.063v2.5c0 .172.163.312.365.312h1.458c.201 0 .365-.14.365-.313v-2.5c0-1.208 1.142-2.187 2.552-2.187 1.41 0 2.552.98 2.552 2.188v2.5c0 .172.163.312.364.312h1.459c.201 0 .364-.14.364-.313v-2.5C10.957 1.82 8.837.003 6.22 0z"
                    transform="translate(.75 .5)"
                />
                <path
                    fill="#01B6F5"
                    d="M1.812 6.25h8.587c.988 0 1.789.7 1.789 1.562v5.625c0 .863-.801 1.563-1.79 1.563H1.813c-.988 0-1.79-.7-1.79-1.562V7.813c0-.863.802-1.563 1.79-1.563z"
                    transform="translate(.75 .5)"
                />
                <path
                    fill="#FFF"
                    d="M7.781 9.688c.004-.863-.727-1.566-1.633-1.57-.907-.003-1.644.693-1.648 1.556-.003.597.352 1.143.913 1.407L5.16 12.77c-.026.17.099.329.278.353l.046.003h1.313c.181.002.33-.137.331-.31 0-.015 0-.031-.003-.047l-.253-1.687c.554-.265.906-.803.91-1.393z"
                    transform="translate(.75 .5)"
                />
            </g>
        </svg>
    );

    return (
        <div>
            <div className="rainbow-p-around_large" style={logoStyle}>
                {rainbowLogo}
                <h3 style={logoTextStyle}>rainbow-modules</h3>
            </div>
            <Card className="rainbow-p-around_large" style={style}>
                <EmailPasswordSignUpForm
                    nameIcon={nameIcon}
                    emailIcon={emailIcon}
                    passwordIcon={passwordIcon}
                />
            </Card>
        </div>
    );
};

export const basicEmailPasswordSignUpForm = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <WhenNoAuthenticated path="/" redirect="/app">
                <Form />
            </WhenNoAuthenticated>
            <WhenAuthenticated path="/app" redirect="/">
                <span>Authenticated!</span>
                <br />
                <Button label="Log Out" onClick={() => app.auth().signOut()} />
            </WhenAuthenticated>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Auth/Stories',
};
