import { CSSProperties, ReactNode } from 'react';

interface OptionsObj {
    brand?: string;
    id?: string;
    last4?: number | string;
    disabled?: boolean;
    primary?: boolean;
    expMonth?: number;
    expYear?: number;
}

export interface CreditCardpickerProps {
    /** The name of CreditCardPicker. */
    name?: string;
    /** The value of the component. */
    value?: string;
    /** The action triggered when a value attribute changes. */
    onChange?: (value: string | Array<string>) => void;
    /** The action triggerd when new card button is clicked. When passed it will show an add new card button. */
    onAdd?: (event: MouseEvent) => void;
    /** The action triggered when the remove card action is confirmed. When passed it will show a remove card button. */
    onRemove?: (card: OptionsObj) => void;
    /** Indicate that the cards are loading when set to true */
    isLoading?: boolean;
    /** An array with the credit card options. */
    options?: Array<OptionsObj>;
    /** If is set to true the UniversalPicker is required. This value defaults to false. */
    required?: boolean;
    /** The title at the top of the UniversalPicker component. */
    label?: ReactNode;
    /** Describes the position of the CreditCardPicker label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment?: 'left' | 'center' | 'right';
    /** Specifies that an UniversalPicker must be filled out before submitting the form. */
    error?: ReactNode;
    /** The id of the outer element. */
    id?: string;
    /** The class name of the root element. */
    className?: string;
    /** It is an object with custom style applied to the root element. */
    style?: CSSProperties;
}

export default function (props: CreditCardpickerProps): JSX.Element | null;
