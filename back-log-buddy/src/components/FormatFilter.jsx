import PropTypes from 'prop-types';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TvIcon from '@mui/icons-material/Tv';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const FormatFilter = ({ formatFilter, setFormatFilter }) => {
  return (
    <ToggleButtonGroup
      variant="solid"
      value={formatFilter}
      onChange={(event, newValue) => {
        setFormatFilter(newValue);
      }}
    >
      <Button value="all">Show All</Button>

      <IconButton value='games'>
        <SportsEsportsIcon />
      </IconButton>

      <IconButton value='books'>
        <AutoStoriesIcon />
      </IconButton>

      <IconButton value='shows'>
        <TvIcon />
      </IconButton>

      <IconButton value='movies'>
        <LocalMoviesIcon />
      </IconButton>

    </ToggleButtonGroup>
  )
}

FormatFilter.propTypes = {
  formatFilter: PropTypes.string,
  setFormatFilter: PropTypes.func,
}

export default FormatFilter