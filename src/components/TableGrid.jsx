import React from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {
  SortingState,
  IntegratedSorting,
  DataTypeProvider,
} from '@devexpress/dx-react-grid';

const FlagFormatter = flags => (
  <div>
    <img style={{ width: '40px', height: 'auto' }} src={flags.value} alt={flags.row.country_abbreviation} />
  </div>
);

const flag = ['flag'];

const TableGrid = props => (
  <div>
    <Grid
      rows={props.rows}
      columns={props.columns}
    >
      <DataTypeProvider
        for={flag}
        formatterComponent={FlagFormatter}

      />
      <SortingState
        defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
      />
      <IntegratedSorting />
      <Table />
      <TableHeaderRow showSortingControls />
    </Grid>

  </div>
);

export default TableGrid;
