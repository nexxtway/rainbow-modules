export interface ReduxContainerProps {
    reducers?: Record<string, unknown>;
    middlewares?: Array<any>;
}

export default function (props: ReduxContainerProps): JSX.Element | null;
