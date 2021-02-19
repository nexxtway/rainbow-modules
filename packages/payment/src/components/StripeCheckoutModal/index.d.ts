import { CSSProperties } from 'react';

export interface StripeCheckoutModalProps {
    /** The application's API key. To use Stripe, you must get an API Key. See https://dashboard.stripe.com/account/apikeys to get an API Key. */
    apiKey: string;
    /** Indicate whether use setupIntent or paymentIntent flow. */
    variant?: 'setupIntent' | 'paymentIntent';
    /** Controls whether the modal is opened or not. If true, the modal is open. */
    isOpen?: boolean;
    /** Resolver async function that will return the intent client secret, needed to confirm the intent. */
    clientSecretResolver?: () => Promise<unknown>;
    /** Callback triggered when the intent confirm process succeded. */
    onSuccess?: (result: Record<string, unknown>) => void;
    /** Callback triggered when the component request to close (e.g click close button, press esc key or click outside the modal). */
    onCancel?: () => void;
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
}

export default function (props: StripeCheckoutModalProps): JSX.Element | null;
