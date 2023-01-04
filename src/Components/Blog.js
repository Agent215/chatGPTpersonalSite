import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';


const Blog = (props) => {
    const { blogs } = props;

    return (
        <div style={{ margin: '0%' }}>
            <Grid style ={{ padding: '1rem', paddingTop:'2rem'}}container spacing={2}>
                {blogs.sort((a, b) => new Date(b.date) - new Date(a.date)).map((blog, index) => (
                    <Grid   item xs={12} md={4} key={index}>
                        <Card className='blog-card' >
                            <CardActionArea
                                href={`/blog/${blog.id}`}>
                                {blog.image && (
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        alt={blog.imageCaption}
                                        image={blog.image}
                                        title={blog.imageCaption}
                                    />
                                )}
                                <div>
                                    <CardContent className="content">
                                        <Typography component="h5" variant="h5">
                                            {blog.title}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            {blog.date}
                                        </Typography>
                                        {blog.imageCaption && (
                                            <Typography variant="subtitle1" style={{ paddingTop: '1rem' }}>
                                                {blog.imageCaption}
                                            </Typography>
                                        )}
                                    </CardContent>

                                </div>
                                {/* this button wont really do anything, as the user can click anywhere on the card. But this helps if they dont know to click.
                                hopefully this makes it a more mobile first UX  */}
                                <Button  variant="contained" size="small" color="success">
                                   View
                                </Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>

    );
};

export default Blog;
