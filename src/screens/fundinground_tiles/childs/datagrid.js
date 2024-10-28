import React from "react";
import { TablePagination, Grid, Typography } from '@mui/material';
import { ROWSPERPAGE } from "config";

import { GridContainer, CardItem } from "components";

const Component = (props) => {

    const { rowsCount, rows, pageInfo, onActionClicked, onPageClicked } = props;

    const handleChangePage = (event, newPage) => {
        const _page = { page: newPage, pageSize: pageInfo.pageSize };
        if (onPageClicked) onPageClicked(_page);
    };

    const handleChangeRowsPerPage = (event) => {
        const _page = { page: 0, pageSize: parseInt(event.target.value, 5) };
        if (onPageClicked) onPageClicked(_page);
    };

    const OnActionClicked = (id, type) => {
        if (onActionClicked) onActionClicked(id, type);
    };


    return (
        <>
            <GridContainer>
                {rows && rows.map((x, index) => (
                    <CardItem key={index} keyid={x.RoundId} title={x.RoundType}  imgsrc={x.FundingRoundStartupLogoIconData}  width={300}
                        description={x.AmountRaised} onActionClicked={OnActionClicked}>
                    <Grid container direction="column">
                        <Typography variant="caption" color="text.secondary">
                            <strong>TargetAmount:</strong>&nbsp;{x.TargetAmount}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            <strong>FundedStartup:</strong>&nbsp;{x.FundedStartup?.Name}
                        </Typography>
                    </Grid>
                                                                                                                                                                                                                    </CardItem>
                ))}
            </GridContainer>
            {rows && rows.length > 0 && <TablePagination
                component="div"
                count={rowsCount}
                page={pageInfo.page}
                rowsPerPageOptions={ROWSPERPAGE}
                onPageChange={handleChangePage}
                rowsPerPage={pageInfo.pageSize}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />}
        </>
    );

};

export default Component;
