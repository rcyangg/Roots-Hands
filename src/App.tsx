import React, { useState } from 'react';
import {
  AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline,
  Grid, Stack, Box, Toolbar, Typography, Container, Avatar, Dialog, DialogTitle,
  DialogContent, DialogActions, TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FarmerPostForm from './Forms/FarmerPostForm';
import FarmerSignUpForm from './Forms/FarmerSignUpForm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ResourcePage from "./pages/Resources";
import UserForm from "./Forms/visitorForm";

const theme = createTheme();

interface FarmerPost {
  id: number;
  title: string;
  description: string;
  farmerName: string;
  farmName: string;
  location: string;
  phone: string;
  image: string;
}

interface Article {
  id: number;
  title: string;
  description: string;
  authorInitials: string;
}

const farmerPosts: FarmerPost[] = [
  // Posts in Seattle, WA
  {
    id: 1,
    title: "Help needed with crop recovery",
    description: "Facing drought impact on crop fields...",
    farmerName: "John Doe",
    farmName: "Doe Farms",
    location: "Seattle, WA",
    phone: "123-456-7890",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Irrigation system repair needed",
    description: "Our irrigation system broke down, and crops are drying...",
    farmerName: "Emily Clark",
    farmName: "Clark Valley Farms",
    location: "Seattle, WA",
    phone: "321-654-0987",
    image: "https://images.unsplash.com/photo-1427434846691-47fc561d1179?q=80&w=4500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Harvest volunteers needed",
    description: "Looking for volunteers to help with the apple harvest this season...",
    farmerName: "Henry Lee",
    farmName: "Lee Orchards",
    location: "Seattle, WA",
    phone: "456-789-1234",
    image: "https://plus.unsplash.com/premium_photo-1661811677567-6f14477aa1fa?q=80&w=4704&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // Posts in other locations
  {
    id: 4,
    title: "Livestock shelter needed",
    description: "Needs shelter for livestock due to flood risks...",
    farmerName: "Jane Smith",
    farmName: "Smith Ranch",
    location: "Los Angeles, CA",
    phone: "987-654-3210",
    image: "https://images.unsplash.com/photo-1509826069158-41fafc8a4a42?q=80&w=4834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Volunteers needed for grape harvest",
    description: "Looking for volunteers to help with the grape harvest...",
    farmerName: "Carlos Mendoza",
    farmName: "Mendoza Vineyards",
    location: "Napa, CA",
    phone: "234-567-8901",
    image: "https://images.unsplash.com/photo-1507662228758-08d030c4820b?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    title: "Greenhouse repairs required",
    description: "Our greenhouse needs repairs after a recent storm...",
    farmerName: "Linda Grey",
    farmName: "Grey Greenhouses",
    location: "Austin, TX",
    phone: "345-678-9012",
    image: "https://plus.unsplash.com/premium_photo-1678344170545-c3edef92a16e?q=80&w=4771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    title: "Help with soil restoration",
    description: "Seeking assistance with soil restoration to improve crop yield...",
    farmerName: "Paul Brown",
    farmName: "Brown's Fields",
    location: "Miami, FL",
    phone: "456-789-0123",
    image: "https://plus.unsplash.com/premium_photo-1682126873353-7d566c9f7e96?q=80&w=4770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    title: "Pest control support needed",
    description: "Looking for help in managing pest control without harsh chemicals...",
    farmerName: "Alice Wong",
    farmName: "Sunny Acres",
    location: "Denver, CO",
    phone: "567-890-1234",
    image: "https://images.unsplash.com/photo-1464638681273-0962e9b53566?q=80&w=4770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    title: "Winter crop storage assistance",
    description: "Need help setting up crop storage facilities for winter...",
    farmerName: "Sarah Taylor",
    farmName: "Taylor Family Farm",
    location: "Chicago, IL",
    phone: "678-901-2345",
    image: "https://images.unsplash.com/photo-1589922584560-31d8667e680d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// Sample data for articles
const articles: Article[] = [
  {
    id: 1,
    title: "The Benefits of Cover Cropping",
    description: "Cover cropping can enhance soil health and resilience by preventing erosion, improving soil structure, and adding organic matter. Learn how to choose the right cover crops for your farm.",
    authorInitials: "JD"
  },
  {
    id: 2,
    title: "Sustainable Water Management",
    description: "Learn how water management techniques like drip irrigation, rainwater harvesting, and soil moisture monitoring can support sustainable agriculture while reducing water waste.",
    authorInitials: "MS"
  },
  {
    id: 3,
    title: "Natural Pest Control Methods",
    description: "Discover effective organic pest control strategies using companion planting, beneficial insects, and natural deterrents to protect your crops without harmful chemicals.",
    authorInitials: "RK"
  },
  {
    id: 4,
    title: "Soil Health Fundamentals",
    description: "Understanding your soil's microbiome is key to successful farming. Explore the essential elements of soil health and how to nurture beneficial soil organisms.",
    authorInitials: "AP"
  },
  {
    id: 5,
    title: "Climate-Resilient Farming",
    description: "Prepare your farm for climate challenges with adaptive strategies, drought-resistant crops, and innovative farming techniques that help maintain productivity.",
    authorInitials: "LM"
  },
  {
    id: 6,
    title: "Composting at Scale",
    description: "Transform farm waste into valuable compost. Learn about different composting methods, optimal conditions, and how to use compost to improve soil fertility.",
    authorInitials: "TC"
  },
  {
    id: 7,
    title: "Crop Rotation Strategies",
    description: "Maximize soil fertility and minimize pest problems with effective crop rotation. Discover planning techniques and complementary crop combinations.",
    authorInitials: "EW"
  },
  {
    id: 8,
    title: "Farm to Table Marketing",
    description: "Build direct relationships with customers through farmers markets, CSA programs, and local restaurant partnerships. Tips for successful agricultural marketing.",
    authorInitials: "BH"
  },
  {
    id: 9,
    title: "Sustainable Livestock Integration",
    description: "Learn how to integrate livestock into your farming system to improve soil health, manage vegetation, and create additional revenue streams.",
    authorInitials: "DM"
  },
  {
    id: 10,
    title: "Energy Efficient Farming",
    description: "Reduce your farm's energy costs with solar power, efficient equipment, and smart farming practices. Practical tips for sustainable energy management.",
    authorInitials: "NH"
  }
];



const MainPage: React.FC = () => {
  //From State
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<FarmerPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleHelpClick = () => {
    setOpen(true);
  };
  const [userLocation, setUserLocation] = useState<string | null>(null);

  const handleHelpFormSubmit = (formData: { fullName: string; email: string; phone: string }) => {
    setOpen(false);
    alert(`Confirmation sent to ${formData.email} regarding help request: ${selectedPost?.title}`);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation("Seattle, WA");
          },
          (error) => {
            console.error("Error getting location:", error.message);
            if (error.code === error.PERMISSION_DENIED) {
              alert("Location access denied. Please enable location access in your browser settings.");
            } else {
              alert("Unable to get location. Please check your browser and device settings.");
            }
          }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const filteredPosts = userLocation
      ? farmerPosts.filter((post) => post.location === userLocation)
      : farmerPosts;

  const handlePostClick = (post: FarmerPost) => {
    setSelectedPost(post);
  };

  const handleClose = () => {
    setSelectedPost(null);
  };

  const handleFormSubmit = (formData: any) => {
    console.log(formData);
    setShowForm(false);
  };
  const handleSignUpSubmit = (formData: any) => {
    console.log("Farmer Sign-up Date: ", formData);
  }

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/> <AppBar position="relative">
        <Toolbar> <Typography variant="h6" color="inherit" noWrap>
          Roots & Hands
        </Typography>
          <Box sx={{flexGrow: 1}}/>
          <Button color="inherit">Sign In</Button>
          <Button color="inherit" onClick = {()=>setShowSignUp(true)}>Sign Up</Button>
          <Button color="inherit" component={Link} to="/resources">
            Resources
          </Button>
          <Button variant="contained" color="secondary" sx={{ml: 2}}>
            Need Help
          </Button>
          <Button color="inherit">
            <SearchIcon /> </Button> </Toolbar> </AppBar>
          {/* Sign-up Form Popup */}
          <FarmerSignUpForm open = {showSignUp} onClose={() => setShowSignUp(false)} onSubmit = {handleSignUpSubmit} />
        <main>
          <Box sx={{bgcolor: 'background.paper', pt: 8, pb: 6}}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
              Roots & Hands
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              A platform connecting farmers in need with volunteers who are ready to help.
            </Typography>
          </Container>
          </Box>
          <Container sx={{py: 8}} maxWidth="md">
          <Typography variant="h4" gutterBottom>Farmer Help Requests</Typography>
          <Stack sx={{ pt: 4 }} spacing={2}>
  {/* Button Stack */}
  <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
    <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm)}>
      Post Help Request
    </Button>
    <Button variant="contained" color="primary" onClick={getUserLocation}>
      Find Near Me
    </Button>
  </Stack>
  
  {/* Form appears below the buttons when showForm is true */}
  {showForm && (
    <Box sx={{ mt: 2, width: '100%' }}>
      <FarmerPostForm onSubmit={handleFormSubmit} />
    </Box>
  )}
</Stack>

            
            <Grid container spacing={4} sx={{mt: 2}}>
              {filteredPosts.map((post) => (
                  <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                      <CardMedia component="img"
                                 sx={{pt: 0}}
                                 image={post.image}
                                 alt="farm image"
                      />
                      <CardContent sx={{flexGrow: 1}}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography>
                          {post.description}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          Posted by {post.farmerName}
                        </Typography>
                      </CardContent> <CardActions>
                      <Button size="small" onClick={() => handlePostClick(post)}>View</Button>
                      <Button size="small" onClick={()=> handleHelpClick()}>Help</Button>
                    </CardActions> </Card> </Grid>))}
            </Grid>
          </Container>
          {selectedPost && (
              <Dialog open={true} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>{selectedPost.title}</DialogTitle>
                <DialogContent>
                  <img src={selectedPost.image}
                                     alt="farm image"
                                     style={{width: '100%', height: 'auto', marginBottom: '16px'}}
                />
                  <Typography variant="body1">Farmer: {selectedPost.farmerName}</Typography>
                  <Typography variant="body1">Farm: {selectedPost.farmName}</Typography>
                  <Typography variant="body1">Location: {selectedPost.location}</Typography>
                  <Typography variant="body1">Phone: {selectedPost.phone}</Typography>
                  <Typography variant="body2"
                              color="textSecondary">{selectedPost.description}</Typography>
                </DialogContent> <DialogActions> <Button onClick={handleClose}>Close</Button>
              </DialogActions> </Dialog>)}

          <Container sx={{py: 8}} maxWidth="md">
            <Typography variant="h4" gutterBottom>Latest Articles on Regenerative
              Agriculture</Typography>
            <Grid container spacing={4}>
              {articles.map((article) => (
                  <Grid item key={article.id} xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Avatar sx={{mr: 2}}>{article.authorInitials}
                      </Avatar>
                      <Box> <Typography variant="h6">{article.title}
                      </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {article.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>))}
            </Grid>
          </Container>
        </main>
        <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Roots & Hands
          </Typography>
          <Typography variant="subtitle1"
                      align="center"
                      color="text.secondary"
                      component="p"
          >
            Helping farmers build resilience, one connection at a time.
          </Typography>
        </Box>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle>Help {selectedPost?.farmerName}</DialogTitle>
          <DialogContent>
            <UserForm onSubmit={handleHelpFormSubmit} />
          </DialogContent>
        </Dialog>
      </ThemeProvider>);
}

const App: React.FC = () => {
  return (
      <Router>
        <Routes> <Route path="/" element={<MainPage/>}/>
          <Route path="/resources" element={<ResourcePage/>}/>
        </Routes> </Router>);
};

export default App;