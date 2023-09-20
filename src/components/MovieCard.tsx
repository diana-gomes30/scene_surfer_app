import { Movie } from '@/interfaces/movies';
import { imageBaseUrl } from '@consts/urls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface MovieCardProps {
  movie: Movie;
}

const imageLoader = ({
  src,
  width,
}: {
  src: string;
  width?: number | `${number}`;
}) => {
  return `${imageBaseUrl}${src}?w=${width}`;
};

export default function MovieCard(props: MovieCardProps) {
  var releaseDate = new Date(props.movie.release_date).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  );

  var voteAverage: number =
    Math.round((props.movie.vote_average / 2) * 100) / 100;

  return (
    <div className="p-5">
      <div
        className="container bg-cover w-56 h-80 items-center justify-center border rounded-lg border-black"
        style={{
          backgroundImage: `url(${imageLoader({
            src: props.movie.poster_path,
          })})`,
        }}
      >
        <div className="w-full h-2/3"></div>
        <div className="w-full h-1/3 bottom-0 backdrop-blur-sm bg-gray-500/50 rounded-lg">
          <h6 className="px-1 py-1 text-left font-bold">{props.movie.title}</h6>
          <p className="px-1 text-sm text-left">{releaseDate}</p>
          <div className="px-1 pt-2 flex flex-row items-center">
            <FontAwesomeIcon
              icon={faStar}
              className={`pr-1 ${voteAverage > 1 ? 'text-yellow-400' : ''}`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`pr-1 ${voteAverage > 2 ? 'text-yellow-400' : ''}`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`pr-1 ${voteAverage > 3 ? 'text-yellow-400' : ''}`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`pr-1 ${voteAverage > 4 ? 'text-yellow-400' : ''}`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`pr-1 ${voteAverage >= 5 ? 'text-yellow-400' : ''}`}
            />
            <p className="text-sm">{voteAverage} out of 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
