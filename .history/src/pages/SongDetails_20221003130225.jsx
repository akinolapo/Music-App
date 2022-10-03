import { useParams } from 'react-router-dom';
import { useS}

const SongDetails = () => {
  const { songid } = useParams();

  console.log(songid);

  return <div>SongDetails</div>;
};
export default SongDetails;
