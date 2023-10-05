import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import PropTypes from 'prop-types';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TvIcon from '@mui/icons-material/Tv';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const MediaCard = ({ title, format, completionStatus }) => {
  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      sx={{ width: 260 }}
    >
      <CardOverflow
        sx={{ 
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {format == 'Game' && <SportsEsportsIcon />}
        {format == 'Book' && <AutoStoriesIcon />}
        {format == 'TV Show' && <TvIcon />}
        {format == 'Movie' && <LocalMoviesIcon />}
      </CardOverflow>

      <CardContent
        sx={{ 
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Typography fontWeight="md" textColor="success.plainColor">
          {title}
        </Typography>
        <Typography level="body-sm">{format}</Typography>
      </CardContent>
      
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          textAlign: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        {completionStatus}
      </CardOverflow>
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