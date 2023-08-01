# BackLogBuddy
Column component:
  One each of Movie, TV Show, Game and Book Column components displayed on main page.
  Consists of any number of Media components.

MediaCard component:
  MediaInfo component:
    MediaName
    MediaType
    MediaInfo*
    MediaPic*
    *(pulled from ISBNdb, IGDB, IMDB using their APIs)

  TrackingInfo component:
    Completed/Backlog/Currently (Playing/Watching/Reading)

  Color changes based on TrackingInfo (green = current, red = backlog, grey = complete)