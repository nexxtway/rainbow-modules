import React, { useState } from 'react';
import { RainbowFirebaseApp, showAppSpinner, hideAppSpinner } from '@rainbow-modules/app';
import { Button, RenderIf } from 'react-rainbow-components';
import { RecordDetails, RecordField } from '@rainbow-modules/record';

import getCurrentPostion from '../../src/helpers/getCurrentPosition';
import app from '../../../../firebase';

export const GetUserCurrentPosition = () => {
    const [coords, setCoords] = useState(false);
    const handleClick = async () => {
        showAppSpinner();
        const { coords } = await getCurrentPostion();
        if (coords) {
            setCoords(coords);
        }
        hideAppSpinner();
    };
    return (
        <RainbowFirebaseApp app={app}>
            <Button label="Get your current position" onClick={handleClick} />
            <RenderIf isTrue={coords}>
                <RecordDetails>
                    <RecordField label="Latitude" value={coords.latitude} />
                    <RecordField label="Longitude" value={coords.longitude} />
                </RecordDetails>
            </RenderIf>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Mapbox/Stories/Helpers',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
