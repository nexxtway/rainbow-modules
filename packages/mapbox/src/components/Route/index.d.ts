interface RouteObj {
    routes?: unknown;
    waypoints?: unknown;
}

export interface RouteProps {
    waypoints?: Array<Array<number, number>>;
    onRenderRoute?: (route: RouteObj | null) => void;
    disableAnimation?: boolean;
}

export default function (props: RouteProps): JSX.Element | null;
