export function TrailerPage({
  id,
  image,
  name,
  rating,
  video,
  coverImage,
  storyline,
  duration,
  genre,
}) {
  return (
    <div>
      <video width="600px" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
