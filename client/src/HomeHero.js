import "./HomeHero.css";

export const HomeHero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("addvideo");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="home-hero-container">
      <video className="hero-video" autoPlay="autoplay" loop muted>
        <source
          src="https://player.vimeo.com/external/589196039.sd.mp4?s=774ac7e5685942e38c2752429a83aa9638ea2c7d&profile_id=164"
          type="video/mp4"
        />
        {/* <source src="movie.ogg" type="video/ogg" /> */}
      </video>
      <div className="home-hero-text-wrapper">
        <p className="card-subtitle">FEATURE</p>
        <h1 className="card-title home-hero-card-title">
          Graceful and Coordinated
        </h1>
        <p className="home-hero-text">
          Cats are graceful, agile and playful, and they make wonderful
          companions. They are among the most loved and cherished pets in the
          world. To watch more videos please{" "}
          <a href="#all-videos" className="home-hero-all-videos-link">
            click here
          </a>
          .
        </p>
        <button className="add-video-button" onClick={scrollToForm}>
          Add a Video
        </button>
      </div>
    </div>
  );
};
