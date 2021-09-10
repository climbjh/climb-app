import React, { useState, useEffect } from 'react';
import { Route, Climber, ClimbingArea } from '@src/generated';
import { makeStyles } from '@material-ui/core';

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
}));

type TableProps = {
    data: Route[] | Climber[] | ClimbingArea[];
    columns: string[];
};

const PaginatedTable = ({ data, columns }: TableProps) => {
    const classes = useStyles();

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleClick = (event: any, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: any[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    return (
        <div className={classes.root}>
            <Paper>
                <TableContainer>
                    <Table size="medium">
                        <TableHead>
                            {columns.map((col, i) => (
                                <TableCell key={i}>
                                    <Typography variant="h6">{col}</Typography>
                                </TableCell>
                            ))}
                        </TableHead>
                        <TableBody>
                            {data &&
                                data.map((row, i) => (
                                    <TableRow
                                        key={i}
                                        hover
                                        onClick={(e) => handleClick(e, row.name)}
                                        tabIndex={1}
                                        // selected={isItemSelected}
                                    >
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.grade}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
};

export default PaginatedTable;
