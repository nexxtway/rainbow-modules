import React from 'react';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { RainbowLogo } from '@rainbow-modules/icons';
import CodeViewer from '../../src/components/CodeViewer';

const dir = {
    fileName: '/',
    type: 'folder',
    children: [
        {
            fileName: 'helpers',
            type: 'folder',
            children: [
                {
                    fileName: 'subfolder',
                    type: 'folder',
                    children: [
                        {
                            fileName: 'helpers.ts',
                            type: 'file',
                        },
                        {
                            fileName: 'helpers1.ts',
                            type: 'file',
                        },
                        {
                            fileName: 'helpers2.ts',
                            type: 'file',
                        },
                        {
                            fileName: 'helpers3.ts',
                            type: 'file',
                        },
                        {
                            fileName: 'helpers4.ts',
                            type: 'file',
                        },
                    ],
                },
                {
                    fileName: 'index.ts',
                    type: 'file',
                },
                {
                    fileName: 'index1.ts',
                    type: 'file',
                },
                {
                    fileName: 'index2.ts',
                    type: 'file',
                },
                {
                    fileName: 'index3.ts',
                    type: 'file',
                },
            ],
        },
        {
            fileName: 'icons',
            type: 'folder',
            children: [
                {
                    fileName: 'app.svg',
                    type: 'file',
                },
                {
                    fileName: 'app1.svg',
                    type: 'file',
                },
                {
                    fileName: 'app2.svg',
                    type: 'file',
                },
                {
                    fileName: 'app3.svg',
                    type: 'file',
                },
                {
                    fileName: 'app4.svg',
                    type: 'file',
                },
                {
                    fileName: 'app5.svg',
                    type: 'file',
                },
            ],
        },
        {
            fileName: 'index.ts',
            type: 'file',
        },
        {
            fileName: 'types.ts',
            type: 'file',
        },
        {
            fileName: 'other.png',
            type: 'file',
        },
        {
            fileName: 'config.json',
            type: 'file',
        },
        {
            fileName: 'package.json',
            type: 'file',
        },
        {
            fileName: 'yarn.lock',
            type: 'file',
        },
        {
            fileName: 'readme.md',
            type: 'file',
        },
    ],
};

const shortCode = `## How this function works
This function provides you with a complete webhook infrastructure. This allows you to implement the entire webhook infrastructure on your platform meeting only a few requirements.

This function contains a web app which is called **widget** and an express backend. The widget app is provided by the same express backend at /widget/** and all the endpoint backend is at /webhooks/**.
`;

const code = `## How this function works
This function provides you with a complete webhook infrastructure. This allows you to implement the entire webhook infrastructure on your platform meeting only a few requirements.

This function contains a web app which is called **widget** and an express backend. The widget app is provided by the same express backend at /widget/** and all the endpoint backend is at /webhooks/**.


## Prerequisites
- If you want to implement this in the your-projectproject, you need to have previously added your-project to the app.functions.store platform.
- The webhook infrastructure implemented by this function assumes that the runtime service account used by this function is the [App Engine default service account](https://cloud.google.com/functions/docs/concepts/iam#runtime_service_accounts).
- The function use authenticated push subscriptions to create webhooks infrastructure, so Google Pub/Sub creates and maintains a special service account for your project: service-{PROJECT_NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com where {PROJECT_NUMBER} is the GCP project that contains the subscription. This service account needs the Service Account Token Creator role. If you use a project created after April 8, 2021, the role is granted automatically as part of the Pub/Sub service agent role. Otherwise, you must explicitly grant the role to the account. To grant the role once the implementation of the webhooks infrastructure in your system is finished, it is recommended to create a test webhook to check that everything is OK, the creation of this webhook will create a push subscription for each event, go to one of these, click on edit, in the Delivery Push section a warning box will appear with a GRANT button which will grant to the specified service account the necessary role.

## Function details

Follow this step-by-step guide to implement this webhook infrastructure.

### Step 1: Create an endpoint

Create an authentication endpoint to authenticate the webhook widget with your platform. This endpoint must receive a POST request with an idToken provided by your platform and a group id from your business logic. It also must return a custom token with specific claims.

The request that will receive your endpoint will have the following schema:

#### Headers:

authorization: Bearer <yourPlatformIdToken> 
...

#### Body:

The response that will return your endpoint must have the following schema:

status: 200

#### Body


and this customToken must have the following claims:

And in this way, your authentication endpoint confirms that your platform user, with credentials obtained from the idToken that receives your authentication endpoint, has the required access to the webhooks of the group whose id is groupId.

The widget will use this custom token to sign in with the user that the sent idToken belongs to.
    
For example, a possible implementation of this endpoint using javascript and Firebase Cloud Functions would be the following:

### Step 2: Install the function

To install this function, you will need to provide some environment variables:
- EVENTS: Events supported by your platform. It is a JSON array with the following format:
- FIRESTORE_NAMESPACE: The Firestore collection path where the webhook data will be stored..
- FIREBASE_CLIENT_JSON_CONFIG: [Firebase configuration object](https://support.google.com/firebase/answer/7015592?authuser=0#zippy=%2Cin-this-article) containing keys and identifiers for your client web app.
- AUTHENTICATION_ENDPOINT: The endpoint to authenticate the widget with your platform. This should receive the idToken and the group as parameters and should return a custom token with specific claims. See the previous section.
    

### Step 3: Add the required Firestore rules to access webhooks data

Note that FIRESTORE_NAMESPACE must be replaced with the value that you introduce in the environment variable FIRESTORE_NAMESPACE when you installed the function.

### Step 4: Add the required iFrame to your web application to insert the widget. 

This iFrame must have as src the endpoint corresponding to the widget app. You can obtain part of this endpoint from app.function.store, if you go to the installed function details in the Trigger section. Once there, you can copy the function trigger and attach to this the /widget suffix. Or you can construct this manually according to the following template:

Also, to finish composing the iFrame, you need to first resolve the authenticated user's tokenId and group, and then add this to the URL of the widgetEndpoint as query parameters:
 
Note that if you are using firebase sdk for your web application, you can resolve the idToken as follows:

For example, a possible implementation to build this iFrame using React is the following: 
### Step 5: Events with Google Pub/Sub SDK
 
Emit all supported events from your platform using Google Pub/Sub SDK specifying the group of users you want to notify.

For example, a possible implementation to do this using javascript and Firebase Cloud Functions is the following:

### Step 6: Documentation

Add the necessary documentation to notify the end user how to use the webhooks. To do this, see the [Final Client Documentation](#final-client-documentation).


> This system requires that the runtime service account used has some permissions enabled. It is recommended, when you finish the webhooks implementation,  to create some webhooks for testing purposes and review the logs.

## Final Client Documentation
This section of the documentation is intended for end customers of your platform, who will be using the webhook implementation. Use this information to write the documentation for the webhooks section in your platform documentation.
### Secure the webhooks
`;

const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    padding: 12px 0;
    overflow: hidden;
    justify-content: center;
`;

export const CodeViewerExample = () => {
    const onFolderExpand = async ({ folderPath }) => {
        let folder = dir;
        folderPath.split('/').forEach((item) => {
            if (!item || !folder) return;
            folder = folder.children.find((file) => file.fileName === item);
        });
        if (!folder || !Array.isArray(folder.children)) return [];
        const files = folder.children.map((item) => ({
            ...item,
        }));
        return {
            files,
        };
    };

    const onFileSelect = () => {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        content: shortCode,
                    }),
                1500,
            );
        });
    };

    return (
        <RainbowFirebaseApp>
            <Container>
                <CodeViewer
                    icon={<RainbowLogo />}
                    name="<CodeViewer />"
                    onFolderExpand={onFolderExpand}
                    onFileSelect={onFileSelect}
                />
            </Container>
        </RainbowFirebaseApp>
    );
};

export const CodeViewerLongContentExample = () => {
    const onFolderExpand = async ({ folderPath }) => {
        let folder = dir;
        folderPath.split('/').forEach((item) => {
            if (!item || !folder) return;
            folder = folder.children.find((file) => file.fileName === item);
        });
        if (!folder || !Array.isArray(folder.children)) return [];
        const files = folder.children.map((item) => ({
            ...item,
        }));
        return {
            files,
        };
    };

    const onFileSelect = () => {
        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        content: code,
                    }),
                1500,
            );
        });
    };

    return (
        <RainbowFirebaseApp>
            <Container>
                <CodeViewer
                    icon={<RainbowLogo />}
                    name="<CodeViewer />"
                    onFolderExpand={onFolderExpand}
                    onFileSelect={onFileSelect}
                />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Content/Stories/CodeViewer',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
