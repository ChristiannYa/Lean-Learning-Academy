import PropTypes from 'prop-types';

const ChessIntroductionCard = ({ title, content, sourceLink, sourceLinkText }) => {
  return (
    <div className="w-[400px] font-leagueSpartan bg-white/5 shadow-chessCard rounded-md p-4">
      <h2 className="text-xl text-neutral-white">{title}</h2>
      <hr className="h-[1px] mx-auto my-1.5 bg-white/15 border-0 rounded-sm"/>
      <p className="text-neutral-white text-lg/6 text-justify">
        {content}
      </p>
      {sourceLink && (
        <div className="mt-2">
          <a 
            href={sourceLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neutral-white/60 hover:text-primary/90 text-sm underline"
          >
            {sourceLinkText || "Source"}
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
