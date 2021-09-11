
import  {Allcomponent}  from '/src/index.js';

export  class Header {
    
        
    headerItems( text, nameClass ){
        let headerItems = document.querySelector('.header__items');
        
        let div = document.createElement('div');
        div.classList.add(nameClass);
        div.textContent = text;
        headerItems.append(div);
        
    }
}




