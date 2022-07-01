import PropTypes from 'prop-types';
import getRandomHexColor from 'utils/get-random-hex-color';
import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>Upload stats</h2>}
            <ul className={styles.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <li
                        key={id}
                        className={styles.item}
                        style={{ backgroundColor: getRandomHexColor() }}
                    >
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.proTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.string.isRequired,
        })
    ),
};
