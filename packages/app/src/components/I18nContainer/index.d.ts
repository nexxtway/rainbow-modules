export interface I18nContainer {
    locale?: string;
    messages?: Record<string, unknown>;
    children?: ReactNode;
}

export default function (props: I18nContainer): JSX.Element | null;
