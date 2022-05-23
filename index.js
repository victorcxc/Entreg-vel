//função like
//função validarPiuwer/adicionar se for validado
//função destacar (pin) piuwer
//implementar barra de pesquisa




function countChars(obj){
    var maxLength = 140;
    var strLength = obj.value.length;
    console.log(document.getElementById("div").value);
    if(strLength >= maxLength){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+' out of '+maxLength+' characters</span>';
        document.getElementById("div").style.border = "2px solid red";
        return false;
    }
    else{
        document.getElementById("charNum").innerHTML = strLength+'/ '+  maxLength;
        document.getElementById("div").style.border = "none";
        return true;
    }
}





    
function piuwer(name, surname, nickname, profilepicture, piuwertext, i){
    const piuwers = document.createElement("div");
    const piuwerDiv = document.createElement("div");
    const info = document.createElement("div");
    const userName = document.createElement("h2");
    const nickName = document.createElement("h5");
    const profilePicture = document.createElement("img");
    const piuwerText = document.createElement("h5");
    const interactions = document.createElement("div");
    const button1 = document.createElement("button");
    const img1 = document.createElement("img");
    const button2 = document.createElement("button");
    const img2 = document.createElement("img");
    const button3 = document.createElement("button");
    const img3 = document.createElement("img");
    var numLikes = document.createElement("h3");

    userName.innerText = name + " " + surname;
    nickName.innerText = "@" + nickname;
    if (profilepicture === ''){
        profilePicture.src = "images/Component 1 (1).svg";
    }
    else{
        profilePicture.src = profilepicture;
    }
    piuwerText.innerText = piuwertext;
    img1.src = "images/Component 14.svg";
    img2.src = "images/Component 13.svg";
    img3.src = "images/Component 11.svg";
    numLikes.innerText = 0;

    piuwers.classList.add("piuwers");
    piuwerDiv.classList.add("piuwer-text");
    info.classList.add("info");
    userName.classList.add("user-info");
    nickName.classList.add("user-info");
    profilePicture.classList.add("user-image");
    piuwerText.classList.add("texto-piuwers");
    interactions.classList.add("interactions");
    button3.classList.add("button-like");
    button1.classList.add("button-pin");
    img1.classList.add("like");
    img2.classList.add("like");
    img3.classList.add("like");
    numLikes.classList.add("contador");

    
    const lowerRightDiv = document.querySelector(".lower-right-div");
    lowerRightDiv.appendChild(piuwers);

    piuwers.appendChild(profilePicture);
    piuwers.appendChild(piuwerDiv);

    piuwerDiv.appendChild(info);
    piuwerDiv.appendChild(piuwerText);
    piuwerDiv.appendChild(interactions);

    info.appendChild(userName);
    info.appendChild(nickName);

    interactions.appendChild(button1);
    interactions.appendChild(button2);
    interactions.appendChild(button3);
    
    button1.appendChild(img1);
    button2.appendChild(img2);
    button3.appendChild(img3);
    button3.appendChild(numLikes);
    button3.id ="botao";
    button1.id="botao1";
    numLikes.id = "numlilike";

    piuwers.id = i;

    


}



async function getData(){
    
    const response = await fetch("https://arcane-sierra-77337.herokuapp.com/data");
    const pius = await response.json();
    var piusVar = pius;

    return piusVar;
    

    
}

    data = getData();
    




data.then((dados) =>{
    for(let i = 0; i < dados.length; i++){
        piuwer(dados[i].user.first_name, dados[i].user.last_name, dados[i].user.username, dados[i].user.photo, dados[i].text, i);
    }

    window.addEventListener("click", function(){
        document.getElementById("submit").addEventListener("click", piuwerValidator)});

    function piuwerValidator(event){     
        if (document.getElementById("div").value.length != 0){
           const Usuario = 
            {  "id": "ea59e230-9586-489a-8b6f-e18580591513",
                "user": {
                "id": "74efe91f-5c20-42f0-b484-0134a88c575d",
                "username": "victorcxc",
                "first_name": "Victor",
                "last_name": "Martins",
                "email": "victor.martins@polijunior.com.br",
                "photo": ""
            },
                "text": document.getElementById("div").value,
                "created_at": "2021-03-17T07:11:07.862Z",
                "updated_at": "2021-03-17T07:11:07.862Z"
            };
            (document.getElementById("lowerDiv")).innerHTML = '';
            piuwer(Usuario.user.first_name, Usuario.user.last_name, Usuario.user.username, Usuario.user.photo, Usuario.text, 0);    
            for(let i = 0; i < dados.length; i++){
                piuwer(dados[i].user.first_name, dados[i].user.last_name, dados[i].user.username, dados[i].user.photo, dados[i].text, i);
            }
        }
    }


    var clicking = document.getElementsByClassName("button-like");
    for (i = 0; i < clicking.length; i++){
        clicking[i].addEventListener("click", like);
    }   

    function like(event){
        if (event.target.parentNode.querySelector('.contador').innerHTML == '1'){
            event.target.parentNode.querySelector('.contador').innerHTML = '0';
        }else{
            event.target.parentNode.querySelector('.contador').innerHTML = '1';
        }
        
    }

    var pining = document.getElementsByClassName("button-pin");
    for(i = 0; i < pining.length; i++){
        pining[i].addEventListener("click", pin);
    }

    function pin(event){
        const el = event.target.parentNode.parentNode.parentNode.parentNode.getElementById("botao1");
        el.className = '.pinned';



    } 
    const searchInput = document.querySelector("[data-search");
    searchInput.addEventListener("input", (e) =>{
        const value = e.target.value;
        
        
        
        
        
        for(i = 0; i < dados.length; i++){
            var isVisible = true;
            if (dados[i]['user']['username'].toLowerCase().includes(value.toLowerCase()) || 
                dados[i]['user']['first_name'].toLowerCase().includes(value.toLowerCase()) ||
                dados[i]['user']['last_name'].toLowerCase().includes(value.toLowerCase())){
                    isVisible = true;
                }else{
                    isVisible = false;
                    
                }
                
                
                
                console.log(value);
                if (!isVisible){
                    document.getElementById(i.toString()).style.display = "none";
                    
                }else {
                    document.getElementById(i.toString()).style.display = ''              
                }
        }
     

    })
    

    
    


}



)