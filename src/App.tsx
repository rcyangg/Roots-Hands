import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Stack,
  Box,
  Toolbar,
  Typography,
  Container,
  Link,
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FarmerPostForm from './FarmerPostForm';
import FarmerSignUpForm from './FarmerSignUpForm';

const theme = createTheme();

// Define types for the farmer post and article data
interface FarmerPost {
  id: number;
  title: string;
  description: string;
  farmerName: string;
}

interface Article {
  id: number;
  title: string;
  description: string;
  authorInitials: string;
}

// Sample data for farmer posts
const farmerPosts: FarmerPost[] = [
  { id: 1, title: "Help needed with crop recovery", description: "Farmer John Doe, facing drought impact on crop fields...", farmerName: "John Doe" },
  { id: 2, title: "Livestock shelter needed", description: "Farmer Jane Smith needs immediate shelter for livestock due to flood risks...", farmerName: "Jane Smith" },
  // Add more sample posts as needed
];

// Sample data for articles
const articles: Article[] = [
  { id: 1, title: "The Benefits of Cover Cropping", description: "Cover cropping can enhance soil health and resilience...", authorInitials: "A" },
  { id: 2, title: "Sustainable Water Management", description: "Learn how water management can support sustainable agriculture...", authorInitials: "B" },
  // Add more sample articles as needed
];

const MainPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleFormSubmit = (formData: any) => {
    console.log(formData);
    setShowForm(false);
  };
  const handleSignUpSubmit = (formData: any) => {
    console.log("Farmer Sign-up Date: ", formData);
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            FarmAid Connect
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Sign In</Button>
          <Button color="inherit" onClick = {()=>setShowSignUp(true)}>Sign Up</Button>
          <Button color="inherit">Resources</Button>
          <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
            Need Help
          </Button>
          <Button color="inherit">
            <SearchIcon />
          </Button>
        </Toolbar>
      </AppBar>
      {/* Sign-up Form Popup */}
      <FarmerSignUpForm open = {showSignUp} onClose={() => setShowSignUp(false)} onSubmit = {handleSignUpSubmit} />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              FarmAid Connect
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              A platform connecting farmers in need with volunteers who are ready to help, creating resilience against extreme climate events.
            </Typography>
            <Stack
            sx={{ pt: 4 }}
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            >
            <Stack direction="row" spacing={2}>
              <Button variant="contained">Get Started</Button>
              <Button variant="outlined">Learn More</Button>
              <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm)}>
                Post Help Request
              </Button>
            </Stack>
  
  {/* Form should appear below the buttons when showForm is true */}
  {showForm && (
    <Box sx={{ mt: 2, width: '100%' }}>
      <FarmerPostForm onSubmit={handleFormSubmit} />
    </Box>
  )}
</Stack>
          </Container>
        </Box>

        {/* Posts Section */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h4" gutterBottom>Farmer Help Requests</Typography>
          <Grid container spacing={4}>
            {farmerPosts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '56.25%', // 16:9 aspect ratio
                    }}
                    image="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                    alt="farm image"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography>
                      {post.description}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" style={{ display: 'block', marginTop: '10px' }}>
                      Posted by {post.farmerName}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Help</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Latest Articles Section */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h4" gutterBottom>Latest Articles on Regenerative Agriculture</Typography>
          <Grid container spacing={4}>
            {articles.map((article) => (
              <Grid item key={article.id} xs={12} md={6}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ mr: 2 }}>{article.authorInitials}</Avatar>
                  <Box>
                    <Typography variant="h6">{article.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {article.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          FarmAid Connect
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Helping farmers build resilience, one connection at a time.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default MainPage;
