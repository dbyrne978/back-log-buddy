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
import BacklogItemDelete from './BacklogItemDelete';
import CompletionStatus from './CompletionStatus';


const BacklogItem = ({ username, title, format, completionStatus, id, setBacklogItems, backlogItems }) => {
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
        <Typography level="title-md" textColor="#fff">
          {username}
        </Typography>
        <Box display='flex' >
          {format == 'Game' && <SportsEsportsIcon color='primary' />}
          {format == 'Book' && <AutoStoriesIcon color='primary'  />}
          {format == 'TV Show' && <TvIcon color='primary'  />}
          {format == 'Movie' && <LocalMoviesIcon color='primary'  />}
          <Typography level="title-md" textColor="#fff">
            {title}
          </Typography>
        </Box>
        <Box display='flex' >
          <CompletionStatus
            completionStatus={completionStatus}
            id={id}
            setBacklogItems={setBacklogItems}
            backlogItems={backlogItems}
          />
          <BacklogItemDelete
            id={id}
            setBacklogItems={setBacklogItems}
            backlogItems={backlogItems}
            title={title}
            format={format}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

BacklogItem.propTypes = {
  title: PropTypes.string,
  format: PropTypes.string,
  mediaInfo: PropTypes.string,
  mediaImage: PropTypes.string,
  completionStatus: PropTypes.string,
  id: PropTypes.string,
  setBacklogItems: PropTypes.func,
  backlogItems: PropTypes.array
}

export default BacklogItem