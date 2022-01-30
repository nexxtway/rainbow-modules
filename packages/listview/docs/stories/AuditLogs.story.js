import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { AuditLogs } from '../../src';
import app from '../../../../firebase';

const labels = ['username', 'other'];

export const BasicAuditLogs = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <AuditLogs labels={labels} collectionPath="logs" />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Listview/Stories/AuditLogs',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
