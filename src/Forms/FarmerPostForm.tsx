import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

interface FarmerPostFormProps {
  onSubmit: (formData: any) => void;
}

const FarmerPostForm: React.FC<FarmerPostFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    farmType: '',
    peopleNeeded: '',
    paid: false,
    hours: '',
    startDate: '',
    endDate: '',
    taskDescription: '',
    messageToVolunteers: '',
    accommodations: false,
    mealsProvided: false,
    transportProvided: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Request Help for Your Farm
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                label="Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Location"
                name="location"
                fullWidth
                value={formData.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Farm Type"
                name="farmType"
                fullWidth
                select
                value={formData.farmType}
                onChange={handleChange}
              >
                <MenuItem value="crop">Crop Farm</MenuItem>
                <MenuItem value="orchard">Orchard</MenuItem>
                <MenuItem value="livestock">Livestock Farm</MenuItem>
                <MenuItem value="forest">Forest</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Number of People Needed"
                name="peopleNeeded"
                type="number"
                fullWidth
                value={formData.peopleNeeded}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="paid"
                    checked={formData.paid}
                    onChange={handleChange}
                  />
                }
                label="Paid Position"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Estimated Working Hours"
                name="hours"
                fullWidth
                type="number"
                value={formData.hours}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Start Date"
                name="startDate"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formData.startDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="End Date"
                name="endDate"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formData.endDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Task Description"
                name="taskDescription"
                fullWidth
                multiline
                rows={4}
                value={formData.taskDescription}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message to Volunteers"
                name="messageToVolunteers"
                fullWidth
                multiline
                rows={2}
                value={formData.messageToVolunteers}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="accommodations"
                    checked={formData.accommodations}
                    onChange={handleChange}
                  />
                }
                label="Accommodations Provided"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="mealsProvided"
                    checked={formData.mealsProvided}
                    onChange={handleChange}
                  />
                }
                label="Meals Provided"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="transportProvided"
                    checked={formData.transportProvided}
                    onChange={handleChange}
                  />
                }
                label="Transportation Provided"
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Button type="submit" fullWidth variant="contained">
              Submit Help Request
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default FarmerPostForm;
