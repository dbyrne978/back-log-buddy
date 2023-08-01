function MediaCard({ mediaName, mediaType, mediaInfo, mediaImage }) {
  return (
  <div style={{ backgroundColor: 'green' }}>
    <h3>{mediaName}</h3>
    <p>{mediaType}</p>
    <p>{mediaInfo}</p>
    <img
      id="mediaImage"
      src={mediaImage ? mediaImage : "/placeholder-media-image.bmp"}
      alt="placeholder media image"
      />
  </div>
  );
}

export default MediaCard