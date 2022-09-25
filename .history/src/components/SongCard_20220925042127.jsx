import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';


const SongCard = ({song, i}) => (
  <div className="flex flex-col w-[250px] p-4 bg-wh">SongCard</div>
);

export default SongCard;
