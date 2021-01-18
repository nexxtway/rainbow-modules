export interface WhenNoAuthenticatedProps {
    path?: string;
    component?: React.ComponentType;
    redirect?: string | Record<string, unknown>;
}

export default function (props: WhenNoAuthenticatedProps): JSX.Element | null;
