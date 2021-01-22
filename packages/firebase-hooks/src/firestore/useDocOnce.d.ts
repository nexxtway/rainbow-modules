type Data = {
    id?: number;
    data?: Record<string, unknown>;
};

export interface UseDocOnceProps {
    path?: string;
}

export default function (props: UseDocOnceProps): [Data, boolean];
