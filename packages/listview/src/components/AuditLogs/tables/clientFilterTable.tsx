import React from 'react';
import { Column } from 'react-rainbow-components';
import { useCollection } from '@rainbow-modules/firebase-hooks';
import FirestoreDate from '../firestoreDate';
import Severity from '../severity';
import { StyledTable } from '../styled';
import Summary from '../summary';
import { ClientFilterTableProps } from '../types';

const ClientFilterTable = ({ collection, filters, query }: ClientFilterTableProps): JSX.Element => {
    const [data, isLoading] = useCollection({
        path: collection,
        query,
        track: [filters],
    });

    const tableData = isLoading
        ? []
        : (data as Array<any>)
              .filter(({ data: item }) => {
                  const { labels: itemLabels } = item;
                  const itemLabelKeys = Object.keys(itemLabels);
                  const { labels: filterLabels = {} } = filters;
                  return Object.keys(filterLabels).every((key) => {
                      if (!key) return true;
                      if (!itemLabelKeys.includes(key)) return false;
                      return filterLabels[key].includes(itemLabels[key]);
                  });
              })
              .map((item) => item.data);
    return (
        <StyledTable keyField="id" data={tableData} isLoading={!!isLoading} variant="listview">
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
                field="date"
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
        </StyledTable>
    );
};

export default ClientFilterTable;
