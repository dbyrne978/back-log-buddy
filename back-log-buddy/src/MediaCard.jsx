import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import { CssVarsProvider } from '@mui/joy/styles';

function MediaCard({ mediaName, mediaType, mediaInfo, mediaImage }) {  
  return (
    <CssVarsProvider>
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
        <Typography level="title-lg">{mediaName}</Typography>
        <Typography level="title-md">{mediaType}</Typography>
        <Typography level="body-sm">{mediaInfo}</Typography>
        <AspectRatio sx={{ width: 100 }}>
          <img
            id="mediaImage"
            src={mediaImage ? mediaImage : "/placeholder-media-image.bmp"}
            alt="placeholder media image"
          />
        </AspectRatio>
      </Card>
    </CssVarsProvider>
  );
  
}

export default MediaCard