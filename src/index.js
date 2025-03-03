import './index.html';
import './index.scss';
import './modules/createLeagueArticle';
import './modules/createMatchCard';
import './modules/createBettingOdd';
import './modules/renderFootballMatches';
import './modules/renderOdds';
import './modules/helpers';
import './modules/week';
import './modules/navigation';
import './modules/favorite';
import './modules/closeGroup';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { setCurrentDates } from './modules/week';

setCurrentDates();
