import React, { useState, useEffect } from 'react';
import { Route, Climber, ClimbingArea } from '@src/generated';
import { makeStyles } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Toolbar,
    Typography,
    IconButton,
    Tooltip,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '85%',
    },
    marginTop: {
        marginTop: theme.spacing(2),
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    pointer: {
        cursor: 'pointer',
    },
}));

type TableProps = {
    records: Route[] | Climber[] | ClimbingArea[];
    columns: { id: string; label: string; api: string }[];
};

type TableHeadProps = {
    classes: ClassNameMap<'root' | 'marginTop' | 'visuallyHidden'>;
    order: string;
    orderBy: string;
    onRequestSort: (event: any, property: any) => void;
    rowCount: number;
    columns: { id: string; label: string }[];
};

function descendingComparator(a, b, orderBy) {
    if (b[parseInt(orderBy)] < a[parseInt(orderBy)]) {
        return -1;
    }
    if (b[parseInt(orderBy)] > a[parseInt(orderBy)]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead({ classes, order, orderBy, onRequestSort, columns }: TableHeadProps) {
    // const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {columns.map((col) => (
                    <TableCell key={col.id} sortDirection={orderBy === col.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === col.id}
                            direction={orderBy === col.id ? order : 'asc'}
                            onClick={createSortHandler(col.id)}
                        >
                            <strong>{col.label}</strong>
                            {orderBy === col.id ? (
                                <span className={classes.visuallyHidden}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const PaginatedTable = ({ records, columns }: TableProps) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('2');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleRequestSort = (event: any, property: any) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event: any, id: any) => {
        history.push(`${location.pathname}/${id}`);
    };

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className={classes.root}>
            <Paper>
                <TableContainer>
                    <Table size="medium">
                        {/* <TableHead>
                            {columns.map((col, i) => (
                                <TableCell key={i}>
                                    <Typography variant="h6">{col}</Typography>
                                </TableCell>
                            ))}
                        </TableHead> */}
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={records.length}
                            columns={columns}
                        />
                        <TableBody>
                            {stableSort(records, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row: any, i: any) => {
                                    return (
                                        <TableRow key={i} hover onClick={(e) => handleClick(e, row.id)} tabIndex={1} className={classes.pointer}>
                                            {columns.map((data, i) => (
                                                <TableCell key={i}>{row[data.api]}</TableCell>
                                            ))}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={records.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default PaginatedTable;
