// React
import {useEffect, useState} from "react";
// React Router
import {Route, Routes} from "react-router-dom";
// Redux
import {useSelector} from "react-redux";
// Global styles
import './App.scss';
// Global components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Snowfall
import Snowfall from "react-snowfall";
import ConfirmAudioModal from "./components/ConfrimAudioModal/ConfirmAudioModal";
// Howler
import christmasMusic from "./assets/music/christmas.mp3";
import {Howl} from "howler";
// Routes
import ChristmasStoriesRoute from "./routes/christmas-stories";
import ChristmasStoryRoute from "./routes/christmas-story";
import HomeRoute from "./routes/home";
import NotFoundRoute from "./routes/not-found";

let christmasSoundHowler = null;

const App = () => {
    const themeState = useSelector(state => state.theme);
    const musicState = useSelector(state => state.music);
    const [acceptAudio, setAcceptAudio] = useState(false);

    useEffect(() => {
        const theme = themeState.theme;
        if (theme === "dark") {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
   }, [themeState.theme]);

    useEffect(() => {
        // Setup the new Howl
         christmasSoundHowler = new Howl({
            src: [christmasMusic],
            loop: true,
            onplayerror: () => {
                christmasSoundHowler.once('unlock', function() {
                    christmasSoundHowler.play();
                });
            }
        });

        christmasSoundHowler.play();
    }, []);

    useEffect(() => {
        if(!musicState.play) {
            // Mute the sound
            christmasSoundHowler.mute(true);
        } else {
            // Play the sound
            christmasSoundHowler.mute(false);
        }
    }, [musicState.play])

    return (
          <>
              <div id="app" className={`app`}>
                  <Header/>
                  <Routes>
                      <Route path="/" element={<HomeRoute />} />
                      <Route path="/christmas-stories" element={<ChristmasStoriesRoute />} />
                      <Route path="/christmas-stories/:christmasStorySlug"  element={<ChristmasStoryRoute />} />
                      <Route path="*" element={<NotFoundRoute />} />
                  </Routes>
                  <Footer />
              </div>
              <Snowfall
              style={{zIndex: 5000}}
              />
              <ConfirmAudioModal
                  open={!acceptAudio}
                  onClose={() => setAcceptAudio(true)}
              />
          </>
      );
}

export default App;
