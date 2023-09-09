import Button from '@mui/joy/Button';

function MediaCardCompletionStatus({ completionStatus }) {
  return (
    <div id="completionStatusButtonGroup">
      <Button size="md" color="success">
          Playing Now
      </Button>
      <Button size="md" color="primary">
          Backlog
      </Button>
      <Button size="md" color="neutral">
          Complete
      </Button>
    </div>
  );
  
}

export default MediaCardCompletionStatus