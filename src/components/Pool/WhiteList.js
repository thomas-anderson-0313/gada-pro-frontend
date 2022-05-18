import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../app/routes/Pool/styles";
import {Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
const WhiteList = ({ poolItem }) => {
  const classes = useStyles();
  const [teams, setTeams] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  useEffect(() => {
    if (poolItem.teams) {
      setTeams(JSON.parse(poolItem.teams));
    }
  }, [poolItem]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Grid item xs={12} md={12}>
        <div style={{ marginTop: "4%" }}>
          <div className={classes.textDescription}>WhiteList</div>
        </div>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{background: '#0080FF', color: 'white'}}>
                    White List
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {poolItem && poolItem.whiteList[0] && poolItem.whiteList.map((row) => {
                return (
                  <TableRow tabIndex={-1} key={row}>
                    <TableCell>
                      {row}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={(poolItem && poolItem.whiteList[0]) ? poolItem.whiteList.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </>
  );
};

export default WhiteList;
