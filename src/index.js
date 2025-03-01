import './index.html';
import './index.scss';
import './modules/helpers';
import './modules/calendar';
import './modules/navigation';
import './modules/favorite';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { setCurrentDates } from './modules/calendar';

setCurrentDates();
