import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import PropTypes from 'prop-types';
import CardContent from '@mui/joy/CardContent';
import { CardCover } from '@mui/joy';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TvIcon from '@mui/icons-material/Tv';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Box } from '@mui/material';


const MediaCard = ({ title, format, completionStatus}) => {
  return (
    <Card sx={{ minHeight: '160px', width: 120 }}>
      <CardCover>
        <img
          src="./placeholder-media-image.bmp"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Box display='flex' >
          {format == 'Game' && <SportsEsportsIcon color='primary' />}
          {format == 'Book' && <AutoStoriesIcon color='primary'  />}
          {format == 'TV Show' && <TvIcon color='primary'  />}
          {format == 'Movie' && <LocalMoviesIcon color='primary'  />}
          <Typography level="title-md" textColor="#fff">
            {title}
          </Typography>
        </Box>
        <Typography level="title-sm" textColor="#fff">
            {completionStatus}
          </Typography>
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  title: PropTypes.string,
  format: PropTypes.string,
  mediaInfo: PropTypes.string,
  mediaImage: PropTypes.string,
  completionStatus: PropTypes.string
}

export default MediaCard