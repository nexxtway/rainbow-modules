interface RouteObj {
    routes?: any;
    waypoints?: any;
}

export interface RouteProps {
    waypoints?: Array<any>;
    onRenderRoute?: (route: RouteObj) => void;
    disableAnimation?: boolean;
}

export default function (props: RouteProps): JSX.Element | null;
