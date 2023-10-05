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
      color='primary'
      variant="solid"
      value={formatFilter}
      onChange={(event, newValue) => {
        setFormatFilter(newValue);
      }}
      sx={{
        '--ButtonGroup-separatorSize': '0px',
        justifyContent: 'center'
      }}
    >
      <Button
        value='Show All'
        sx={{ '&:focus': { outline: 'none' } }}
      >
        Show All
      </Button>

      <IconButton
        value='Game'
        sx={{ '&:focus': { outline: 'none' } }}
      >
        <SportsEsportsIcon />
      </IconButton>

      <IconButton
        value='Book'
        sx={{ '&:focus': { outline: 'none' } }}
      >
        <AutoStoriesIcon />
      </IconButton>

      <IconButton
        value='TV Show'
        sx={{ '&:focus': { outline: 'none' } }}
      >
        <TvIcon />
      </IconButton>

      <IconButton
        value='Movie'
        sx={{ '&:focus': { outline: 'none' } }}
      >
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