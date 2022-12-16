import React, { Component } from 'react';

class Chat extends Component{
    constructor(props){

        super(props);
 
    } 
 
 componentDidMount(){
 
    (function(d, m){
 
        var kommunicateSettings =
 
            {"appId":"20a9b6bcc4dd45b9f8a53434440d7c6f1","popupWidget":true,"automaticChatOpenOnNavigation":true};
 
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
 
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
 
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
 
        window.kommunicate = m; m._globals = kommunicateSettings;
 
    })(document, window.kommunicate || {});
 
 }
 
 render(){
 
    return(
 
        <div>
 
            <h1>Hello</h1>
 
      </div>
 
    )
 
 }
 
 }
 
 export default Chat;

