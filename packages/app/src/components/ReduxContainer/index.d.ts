export interface ReduxContainerProps {
    reducers?: Record<string, unknown>;
    middlewares?: Array<any>;
    children?: ReactNode;
}

export default function (props: ReduxContainerProps): JSX.Element | null;
