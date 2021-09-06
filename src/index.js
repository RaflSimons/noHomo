"use strict";

import {Header} from './components/Header';

export  class Allcomponent{
    super(){
        this.ra()
    }
    ra(){
        alert('niga');
    }
}

let allcomponent = new Allcomponent();
let header = new Header();
allcomponent.ra();
// header.raf();

