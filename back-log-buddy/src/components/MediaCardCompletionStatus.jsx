import * as React from 'react';
import Button from '@mui/joy/Button';

function MediaCardCompletionStatus() {
  const [playingNowVariant, setPlayingNowVariant] = React.useState('soft');
  const [backlogVariant, setBacklogVariant] = React.useState('solid');
  const [completeVariant, setCompleteVariant] = React.useState('soft');

  const completionStatusOnClick = ( completionStatus ) => {
    if (completionStatus == 'Playing Now') {
      setPlayingNowVariant('solid')
      setBacklogVariant('soft')
      setCompleteVariant('soft')
    }
    
    if (completionStatus == 'Backlog') {
      setPlayingNowVariant('soft')
      setBacklogVariant('solid')
      setCompleteVariant('soft')
    }
    
    if (completionStatus == 'Complete') {
      setPlayingNowVariant('soft')
      setBacklogVariant('soft')
      setCompleteVariant('solid')
    }
  };

  return (
    <div id="completionStatusButtonGroup">
      <Button
        onClick={() => completionStatusOnClick('Playing Now')}
        variant={playingNowVariant}
        size="md"
        color="success">
          Playing Now
      </Button>
      <Button
        onClick={() => completionStatusOnClick('Backlog')}
        variant={backlogVariant}
        size="md"
        color="primary">
          Backlog
      </Button>
      <Button
        onClick={() => completionStatusOnClick('Complete')}
        variant={completeVariant}
        size="md"
        color="neutral">
          Complete
      </Button>
    </div>
  );
  
}

export default MediaCardCompletionStatus