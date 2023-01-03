import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';


const Blog = (props) => {
    const { blogs } = props;

    return (
        <div style={{ margin: '0%' }}>
            <Grid container spacing={3} style={{
                margin: 0,
                width: '100%',
                marginTop:'2rem'
            }}>
                {blogs.sort((a, b) => new Date(b.date) - new Date(a.date)).map((blog, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card className='blog-card' sx={{ maxWidth: 345 }}>
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
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                        View
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>

    );
};

export default Blog;
