import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import PropTypes from 'prop-types';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TvIcon from '@mui/icons-material/Tv';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Box from '@mui/joy/Box';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';


const MediaCard = ({ title, format, completionStatus}) => {
  const [ collapse, setCollapse ] = useState(false)
  function onClickCompletionStatus() {setCollapse(!collapse)}

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: 44 }}></Box>
      <Card
        orientation="horizontal"
        variant="outlined"
        sx={{ width: 172, height: 50 }}
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
          id='test'
          sx={{
            p: 0.2,
            writingMode: 'vertical-rl',
            textAlign: 'center',
            fontSize: 'xs',
            fontWeight: 'xl',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderLeft: '1px solid',
            borderColor: 'divider',
            width: 20
          }}
        >
          <div onClick={onClickCompletionStatus}>{completionStatus}</div>
        </CardOverflow>
        
      </Card>

      {completionStatus != 'Backlog' && <Collapse orientation="horizontal" in={collapse} >
        <Typography
          variant="soft"
          color="primary"
          sx={{
            p: 0,
            writingMode: 'vertical-rl',
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 'xl',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderLeft: '1px solid',
            borderColor: 'divider',
            width: 20,
            margin: 0,
            height: 84
          }}
        >
          Backlog
        </Typography>
      </Collapse>}

      {completionStatus != 'Complete' && <Collapse orientation="horizontal" in={collapse} >
        <Typography
          variant="soft"
          color="primary"
          sx={{
            p: 0,
            writingMode: 'vertical-rl',
            textAlign: 'center',
            fontSize: 'xs',
            fontWeight: 'xl',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderLeft: '1px solid',
            borderColor: 'divider',
            width: 20,
            margin: 0,
            height: 84
          }}
        >
          Complete
        </Typography>
      </Collapse>}

      {completionStatus != 'Playing' && <Collapse orientation="horizontal" in={collapse} >
        <Typography
          variant="soft"
          color="primary"
          sx={{
            p: 0,
            writingMode: 'vertical-rl',
            textAlign: 'center',
            fontSize: 'xs',
            fontWeight: 'xl',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderLeft: '1px solid',
            borderColor: 'divider',
            width: 20,
            margin: 0,
            height: 84
          }}
        >
          Playing
        </Typography>
      </Collapse>}

    </Box>
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