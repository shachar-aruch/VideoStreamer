export function TrailerPage({ image, video, info }) {
  return (
    <div>
          <video width="600px" controls>
          <source src={video} type="video/mp4" />
        </video>
    </div>
  );
}
