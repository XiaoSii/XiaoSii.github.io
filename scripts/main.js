{
    const brand = document.querySelector('h1');
    brand.textContent = 'Listen Young'

    function enlarge(e){
        e.target.style.fontSize = '50px';
    }

    function smallize(e){
        e.target.style.fontSize = '35px';
    }

    brand.addEventListener('mouseover',enlarge);
    brand.addEventListener('mouseleave',smallize);


    const personizedHead = document.querySelector('h2');
    let changeUser = document.querySelector('button');
    
    function setUserName(){
        let name = prompt('Please Enter Your Name:');
        if(! name){
            setUserName();
        } else {
            personizedHead.textContent = `Welcome Home ${name}`;
            localStorage.setItem('name',name);
        }
    }

    if(! localStorage.getItem('name')){
        setUserName();
    } else{
        let name = localStorage.getItem('name');
        personizedHead.textContent = `Welcome Home ${name}`;
    }

    changeUser.addEventListener('click', setUserName);

}