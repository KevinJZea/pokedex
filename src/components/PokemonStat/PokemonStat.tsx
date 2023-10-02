import { capitalize } from '../../utils/helpers';
import './PokemonStat.css';

export const PokemonStat = ({ base_stat, stat }: PokemonStat) => {
  return (
    <div className="PokemonStat--main-container">
      <p className="PokemonStat--stat-name">{capitalize(stat.name)}</p>
      <div className="PokemonStat--stat-container">
        <span>{base_stat}</span>
        <div className="PokemonStat--range-container">
          <div
            className="PokemonStat--range"
            style={{ width: `${base_stat < 100 ? base_stat : 94}%` }}
            data-stat={base_stat < 100 ? base_stat : 100}
          ></div>
        </div>
      </div>
    </div>
  );
};
