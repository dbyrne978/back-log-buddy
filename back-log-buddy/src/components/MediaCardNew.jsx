import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import MediaCardCompletionStatus from './MediaCardCompletionStatus.jsx'
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

function MediaCardNew() {
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

      <Input
        placeholder="Media Name"
        sx={{
          '&::before': {
            display: 'none',
          },
          '&:focus-within': {
            outline: '2px solid var(--Input-focusedHighlight)',
            outlineOffset: '2px',
          },
        }}
      />

      <Select defaultValue="Media Type">
        <Option value="Book">Book</Option>
        <Option value="TV Show">TV Show</Option>
        <Option value="Game">Game</Option>
        <Option value="Movie">Movie</Option>
      </Select>

      <Input
        placeholder="Media Info"
        sx={{
          '&::before': {
            display: 'none',
          },
          '&:focus-within': {
            outline: '2px solid var(--Input-focusedHighlight)',
            outlineOffset: '2px',
          },
        }}
      />

      <AspectRatio sx={{ width: 100 }}>
        <img
          id="mediaImage"
          src={"./src/assets/placeholder-media-image.bmp"}
          alt="placeholder media image"
        />
      </AspectRatio>

      <MediaCardCompletionStatus />

    </Card>
  );
  
}

export default MediaCardNew