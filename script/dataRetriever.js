class DataRetriever{
    constructor(){        
        this.init();
    }
    /*
        Set button getter
     */    
    static get Trigger_ELM(){
        return document.querySelector('.user-buttom');
    }
    static get INPUT_FETCH(){
        return document.querySelector('.user-input');
    }
    static get URL(){
        return "https://jsonplaceholder.typicode.com/";
    }
    static get UserNameArea(){
        return document.querySelector('.user-name');  
    }
    static get PostsArea(){
        return document.querySelector('.user-post');  
    }
    /*
        *Function for Draw the information getting in ajax call
    */
    rederTemplate(user,post){
        const {name="N/A", username="N/A"}=user;   
        const posts=post;     
        const NameHTML=`<p><b>Name:</b> ${name}.</p>`;
        const UsernameHTML=`<p><b>Username:</b> ${username}</p>`;
        DataRetriever.UserNameArea.innerHTML= `${NameHTML}${UsernameHTML}`;
        DataRetriever.PostsArea.innerHTML=posts.map(data=> `<li>${data.title}.</li>`).join("");
    }
    /* 
    * Funcion para manejar el ajax call
    */
    ajaxCall(url){
        fetch(url)
            .then(data=>data.json(data))
            .then(data=>this.dateGenerator.next(data))
            .catch(err=>`Problems retrieving information ${err}`);
    }
    /*
        *Function for make calls to ajax 
        *For Users and post.
    */
    *makeCalls(userid){                
        const user = yield this.ajaxCall(`${DataRetriever.URL}users/${userid}`);
        const posts = yield this.ajaxCall(`${DataRetriever.URL}posts?userId=${userid}`);
        yield this.rederTemplate(user,posts);        
    }
    /*
        * Get User ID and initiate the generator
    */
    gerUserId(){
        const userid = DataRetriever.INPUT_FETCH.value;  
        this.dateGenerator= this.makeCalls(userid);
        this.dateGenerator.next();        
    }
    /*
        *Add event listener to button for get user id and initiate the ajax call
     */
    init(){        
        DataRetriever.Trigger_ELM.addEventListener("click",this.gerUserId.bind(this));
    }
}

new DataRetriever();

