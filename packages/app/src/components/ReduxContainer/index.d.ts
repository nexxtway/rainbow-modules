export interface ReduxContainerProps {
    reducers?: Record<string, unknown>;
    middlewares?: Array<unknown>;
    children?: ReactNode;
}

export default function (props: ReduxContainerProps): JSX.Element | null;
