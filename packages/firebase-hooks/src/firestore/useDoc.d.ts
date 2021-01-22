type Data = {
    id?: number;
    data?: Record<string, unknown>;
};

export interface UseDocProps {
    path?: string;
}

export default function (props: UseDocProps): [Data, boolean];
