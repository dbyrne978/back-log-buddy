import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import MediaCardCompletionStatus from './MediaCardCompletionStatus.jsx'
import PropTypes from 'prop-types';
import Divider from '@mui/joy/Divider';

function MediaCard({ mediaName, mediaType, mediaInfo, mediaImage, completionStatus }) {
  return (
    <Card
      variant='outlined'
      sx={{
        width: 300,
        mx: 'auto', // margin left & right
        my: 4, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
      }}>

      <Typography level="title-lg" textColor="inherit">{mediaName}</Typography>
      <Divider inset="none" />
      <Typography level="title-md" textColor="inherit">{mediaType}</Typography>
      <Typography level="body-sm" textColor="inherit">{mediaInfo}</Typography>

      <AspectRatio sx={{ width: 100 }}>
        <img
          id="mediaImage"
          src={mediaImage ? mediaImage : "./src/assets/placeholder-media-image.bmp"}
          alt="placeholder media image"
        />
      </AspectRatio>

      <MediaCardCompletionStatus completionStatus={completionStatus} />
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