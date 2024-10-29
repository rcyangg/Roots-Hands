// FarmerSignUpForm.tsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box } from '@mui/material';

interface FarmerSignUpFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
}

const FarmerSignUpForm: React.FC<FarmerSignUpFormProps> = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    farmDescription: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Farmer Sign Up</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
          <TextField label="Email" name="email" value={formData.email} onChange={handleChange} type="email" fullWidth required />
          <TextField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} type="tel" fullWidth required />
          <TextField label="Farm Location" name="location" value={formData.location} onChange={handleChange} fullWidth required />
          <TextField
            label="Farm Description"
            name="farmDescription"
            value={formData.farmDescription}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
            required
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FarmerSignUpForm;
