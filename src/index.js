"use strict";
import './styles/main.css';

import   {Header} from './components/Header';

export  class Allcomponent{

    ra(){

        alert('index workint');
    }
}

let header = new Header();
header.headerItems('Servis', 'header__item');
header.headerItems('About us', 'header__item');
header.headerItems('Api', 'header__item');
