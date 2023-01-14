import { Dialog } from '@mui/material';

interface Props {
  open: boolean;
  handleClose: VoidFunction;
  children: React.ReactNode;
}

export const CustomDialog = ({ open, handleClose, children }: Props) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelleby="alert-dialog-title"
        aria-describedby="aler-dialog-description"
        fullWidth
      >
        {children}
      </Dialog>
    </div>
  );
};
