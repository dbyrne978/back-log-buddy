# BackLogBuddy
Column component:
  One each of Movie, TV Show, Game and Book Column components displayed on main page.
  Consists of any number of BacklogItem components.

BacklogItem component:
  MediaInfo component:
    Title
    Format
    Image*
    *(pulled from ISBNdb, IGDB, IMDB using their APIs)

  CompletionStatus component:
    Completed/Backlog/Currently (Playing/Watching/Reading)

  Color changes based on CompletionStatus (green = current, red = backlog, grey = complete)

TODO:
Create Modal instead of alert when duplicate title/format is added
add color change to CompletionStatus
hide BacklogItemAdder
add drag and drop
add columns
  columns merge if on smaller screen
add floating labels to title and format in BacklogItemAdder
add catches to the services