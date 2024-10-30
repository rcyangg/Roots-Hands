import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

interface VisitorFormProps {
    onSubmit: (formData: { fullName: string; email: string; phone: string }) => void;
}
const VisitorForm: React.FC<VisitorFormProps> = ({ onSubmit })=>{
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ fullName, email, phone });
};

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Full Name" variant="outlined" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <TextField label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <TextField label="Phone" variant="outlined" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
    <Button variant="contained" type="submit">Submit</Button>
        </Box>
    );
};

export default VisitorForm;