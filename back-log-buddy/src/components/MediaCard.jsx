import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import PropTypes from 'prop-types';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const MediaCard = ({ mediaName, mediaType, completionStatus }) => {
  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }}>
      <CardOverflow>
        <SportsEsportsIcon />
      </CardOverflow>

      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor">
          {mediaName}
        </Typography>
        <Typography level="body-sm">{mediaType}</Typography>
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
  mediaName: PropTypes.string,
  mediaType: PropTypes.string,
  mediaInfo: PropTypes.string,
  mediaImage: PropTypes.string,
  completionStatus: PropTypes.string
}

export default MediaCard