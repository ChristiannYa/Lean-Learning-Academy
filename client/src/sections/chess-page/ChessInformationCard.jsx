import PropTypes from 'prop-types';

const ChessIntroductionCard = ({ title, content, sourceLink, sourceLinkText }) => {
  return (
    <div className="w-[320px] font-leagueSpartan bg-white/5 shadow-chessCard rounded-md p-3.5">
      <h2 className="text-xl text-neutral-white">{title}</h2>
      <hr className="h-[1px] mx-auto my-0.5 bg-chess/20 border-0 rounded-sm" />
      <p className="regularText">{content}</p>
      {sourceLink && (
        <div className="mt-2">
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-white/60 hover:text-chess/90 text-sm underline"
          >
            {sourceLinkText || 'Source'}
          </a>
        </div>
      )}
    </div>
  );
};

ChessIntroductionCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  sourceLink: PropTypes.string,
  sourceLinkText: PropTypes.string
};

export default ChessIntroductionCard;
