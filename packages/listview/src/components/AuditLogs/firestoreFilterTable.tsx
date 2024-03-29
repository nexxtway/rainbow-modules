import React from 'react';
import { Column } from 'react-rainbow-components';
import FirestoreTableWithCursors, {
    FirestoreTableWithCursorsProps,
    FirestoreTableWithCursorsRef,
} from '../FirestoreTableWithCursors';
import FirestoreDate from './firestoreDate';
import Severity from './severity';
import { StyledListIcon } from './styled';
import Summary from './summary';

type Props = Omit<FirestoreTableWithCursorsProps, 'isCollectionGroup'>;

const FirestoreFilterTable = React.forwardRef<FirestoreTableWithCursorsRef, Props>(
    ({ collection, query }: Props, ref) => {
        return (
            <FirestoreTableWithCursors
                collection={collection}
                query={query}
                isCollectionGroup={false}
                variant="listview"
                ref={ref}
                emptyIcon={<StyledListIcon />}
                emptyTitle="No audit logs yet."
                emptyDescription="There is no audit logs data to display."
            >
                <Column
                    header="Severity"
                    field="severity"
                    headerAlignment="center"
                    cellAlignment="center"
                    width={80}
                    component={Severity}
                />
                <Column
                    header="Date"
                    field="createdAt"
                    headerAlignment="left"
                    cellAlignment="left"
                    defaultWidth={250}
                    component={FirestoreDate}
                />
                <Column
                    header="Summary"
                    field="textPayload"
                    headerAlignment="left"
                    cellAlignment="left"
                    component={Summary}
                />
            </FirestoreTableWithCursors>
        );
    },
);

export default FirestoreFilterTable;
