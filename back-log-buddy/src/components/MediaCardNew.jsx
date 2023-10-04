import Card from '@mui/joy/Card';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Divider from '@mui/joy/Divider';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

function MediaCardNew({ currentMediaList, setCurrentMediaList }) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        width: 260,
        mx: 'auto',
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Typography level="title-lg" startDecorator={<PlaylistAddIcon />}>
        Add new backlog item
      </Typography>

      <Divider inset="none" />

      <CardContent>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input />
        </FormControl>

        <FormControl>
          <FormLabel>Media Type</FormLabel>
          <Select placeholder="Choose one…">
            <Option value='Movie'>Movie</Option>
            <Option value='TV Show'>TV Show</Option>
            <Option value='Game'>Game</Option>
            <Option value='Book'>Book</Option>
          </Select>
        </FormControl>

        <FormControl>
          <RadioGroup
            name="completion-status-radio-group"
            orientation='horizontal'
          >
            <Radio value="Backlog" label="Backlog" />
            <Radio value="Complete" label="Complete" />
            <Radio value="Playing" label="Playing" />
          </RadioGroup>
        </FormControl>

        <CardActions>
          <Button variant="solid" color="primary">
            Add card
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default MediaCardNew