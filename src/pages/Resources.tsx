import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Avatar,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Link} from "react-router-dom";

const theme = createTheme();

// Define the article data type
interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  authorInitials: string;
  imageUrl: string;
}

// Sample data for articles
const articles: Article[] = [
  {
    id: 1,
    title: "The Benefits of Cover Cropping",
    description: "Cover cropping can enhance soil health, prevent erosion, and improve crop yields.",
    author: "Alice Johnson",
    authorInitials: "AJ",
    imageUrl: "https://www.noble.org/wp-content/uploads/2023/03/jon-hemme-inspects-soil-in-his-field.jpg",
  },
  {
    id: 2,
    title: "Sustainable Water Management for Farmers",
    description: "Learn how water management strategies can support sustainable agriculture practices.",
    author: "Bob Smith",
    authorInitials: "BS",
    imageUrl: "https://www.noble.org/wp-content/uploads/2023/03/cattle-mob-grazing.jpg",
  },
  {
    id: 3,
    title: "Agroforestry: Trees in Agricultural Landscapes",
    description: "Integrating trees within farmland can support biodiversity and improve soil quality.",
    author: "Carla Green",
    authorInitials: "CG",
    imageUrl: "https://www.noble.org/wp-content/uploads/2023/03/tall-forage.jpg",
  },
  {
    id: 4,
    title: "Regenerative agriculture assists capturing carbon in the soil to combat climate variability",
    description: "Proper integration of livestock on grazing lands — which make up 655 million acres of U.S. land (the single-largest land use) — can actually rejuvenate the land’s health.",
    author: "Joey Young",
    authorInitials: "CG",
    imageUrl: "https://www.noble.org/wp-content/uploads/2023/03/open-field-with-clear-skies.jpg",
  },
  {
    id: 5,
    title: "Regenerative agriculture stimulates enhanced wildlife habitat",
    description: "Moving away from monocultures benefits wildlife (large and small, above ground and below), which in turn benefits the ecosystem and ultimately the operation. Again, nature likes diversity.",
    author: "David Austin",
    authorInitials: "CG",
    imageUrl: "https://www.noble.org/wp-content/uploads/2023/03/doe-and-fawn-in-pasture.jpg",
  },
  {
    id: 6,
    title: "Regenerative agriculture advocates decreased use of chemical inputs and subsequent pollution",
    description: "By increasing diversity, both in terms of plants and animals, farmers and ranchers can build some resilience against — and a new mindset toward — pests. With regenerative ranching, “weeds” aren’t necessarily seen as a bad thing, because livestock can eat them. If cattle, sheep or goats are eating “weeds,” the farmer doesn’t need to spray as much herbicide.",
    author: "Alex Ben",
    authorInitials: "CG",
    imageUrl: "https://www.noble.org/wp-content/uploads/2023/03/cattle-graze-in-shade.jpg",
  }

];

const ResourcePage: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
      <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Roots & Hands - Resources
  </Typography>
  <Box sx={{ flexGrow: 1 }} />
  <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit">Sign In</Button>
  <Button color="inherit">Sign Up</Button>
  </Toolbar>
  </AppBar>

  <main>
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
  variant="h4"
  align="center"
  color="text.primary"
  gutterBottom
  >
  Resources on Regenerative Agriculture
  </Typography>
  <Typography variant="h6" align="center" color="text.secondary" paragraph>
  Explore articles and insights to help you adopt sustainable practices and build resilience.
  </Typography>
  </Container>
  </Box>

  {/* Articles Section */}
  <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
      {articles.map((article) => (
            <Grid item key={article.id} xs={12} sm={6} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
  <CardMedia
      component="img"
  image={article.imageUrl}
  alt={`${article.title} image`}
  sx={{
    height: 140,
  }}
  />
  <CardContent sx={{ flexGrow: 1 }}>
  <Typography gutterBottom variant="h5" component="h2">
      {article.title}
      </Typography>
      <Typography>
      {article.description}
      </Typography>
      <Box display="flex" alignItems="center" mt={2}>
  <Avatar sx={{ mr: 1 }}>{article.authorInitials}</Avatar>
  <Typography variant="body2" color="textSecondary">
  {article.author}
  </Typography>
  </Box>
  </CardContent>
  <CardActions>
  <Button size="small">Read More</Button>
  </CardActions>
  </Card>
  </Grid>
))}
  </Grid>
  </Container>
  </main>

  {/* Footer */}
  <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
  <Typography variant="h6" align="center" gutterBottom>
    Roots & Hands
  </Typography>
  <Typography
  variant="subtitle1"
  align="center"
  color="text.secondary"
  component="p"
      >
      Building resilience through knowledge and community support.
  </Typography>
  </Box>
  </ThemeProvider>
);
};

export default ResourcePage;