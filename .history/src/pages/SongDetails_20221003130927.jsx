import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  console.log(songid);

  return(
    <div className="flex flex-col">
        {/* <DetailsHeader artistId={artistId} songData={songData} /> */}
        <div className="mb-10"></div>
    </div>
  )
};
export default SongDetails;
