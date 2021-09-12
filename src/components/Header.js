
import  {Allcomponent}  from '/src/index.js';

export  class Header {
    
        
    headerItems( text, ...nameClass ){
        let headerItems = document.querySelector('.header__items');
        
        let div = document.createElement('div');
        div.classList.add(...nameClass);
        div.textContent = text;
        headerItems.append(div);
        
    }

    api(){
        // let div = document.createElement('div')
        let api = document.querySelector('.header__api');
        api.addEventListener('click',() => {
            let msg = document.createElement('div');
            msg.classList.add('header__item');
            api.append(msg);
        })
        // div.classList.add(nameClass);
        // div.textContent = text;

    }
}




