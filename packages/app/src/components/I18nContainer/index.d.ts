export interface I18nContainer {
    locale?: string;
    messages?: Record<string, unknown>;
}

export default function (props: I18nContainer): JSX.Element | null;
