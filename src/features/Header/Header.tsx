import { Avatar, Grid, Box, Typography } from "@mui/material";

export function Header() {
  return (
    <div id="main-header">
      <Box sx={{ background: "#e6e8ff", p: 2, mt: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Box>
              <Typography variant="h2">List of best things</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Avatar>AA</Avatar>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
