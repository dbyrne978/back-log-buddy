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
form validation for new backlog item
  no duplicate keys
  no empty title
add color change to CompletionStatus
add update to CompletionStatus
add edit to title/format (with validation)
hide BacklogItemAdder
add drag and drop
add columns