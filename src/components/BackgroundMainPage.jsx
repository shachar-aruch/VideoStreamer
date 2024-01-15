import videoBg from "/videos/coverHomePage.mp4";
import "./BackgroundMainPage.css";

export function BackgroundMainPage() {
  return (
    <div className="BackgroundMainPage">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted></video>
      <div className="content">
        <h1>Break time</h1>
        <h2> Add your next movie to your watchlist</h2>
      </div>
    </div>
  );
}
