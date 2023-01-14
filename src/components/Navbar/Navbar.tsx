import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { CustomDialog } from '../Modal';
import { FavoriteTable } from './FavoriteTable';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <CustomDialog open={open} handleClose={handleClose}>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Good practices TS
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            startIcon={<FavoriteIcon />}
            onClick={handleOpen}
          >
            Open Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
