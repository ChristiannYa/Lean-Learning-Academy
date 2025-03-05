import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Card = ({ icon, text }) => {
  return (
    <div className={`${styles.card} bg-gray-500`}>
      <div className={`${styles.iconWrapper}`}>
        <img src={icon} alt={text} width={32} height={32} />
      </div>
      <p className={`font-gochiHand text-xl text-center w-2/3 text-slate-200`}>{text}</p>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
}

export default Card
