import Card from '@mui/joy/Card';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import Divider from '@mui/joy/Divider';
import Button from '@mui/joy/Button';

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

      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Add new card
      </Typography>
      
      <Divider inset="none" />

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

      <Select defaultValue="Game">
        <Option value="Book">Book</Option>
        <Option value="TV Show">TV Show</Option>
        <Option value="Game">Game</Option>
        <Option value="Movie">Movie</Option>
      </Select>

      <Select defaultValue="Backlog">
        <Option value="Complete">Complete</Option>
        <Option value="Backlog">Backlog</Option>
        <Option value="Playing">Playing</Option>
      </Select>

      <Button type="submit">Submit</Button>

    </Card>
  );
  
}

export default MediaCardNew