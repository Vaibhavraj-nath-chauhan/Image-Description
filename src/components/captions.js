import React from 'react'
import "./captions.css"


class Captions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            API : "6aaec6e0a27a42b5ab9028173f1195b4",
            EndPoint : "https://alttext05.cognitiveservices.azure.com/",
            isSearched : false,
            caption: "",
            url:""
        }
    }

    
     
    getData = () =>{
            var url = document.getElementById('url').value;
            if (url !==""){
                fetch("https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Description", {
                        body: "{'url' :'"+ url + "'}",
                        headers: {
                            "Content-Type": "application/json",
                            "Ocp-Apim-Subscription-Key": this.state.API
                        },
                        method: "POST"
                        }).then(res =>res.json()).then(d => 
                            {
                                        this.setState(
                                            {
                                                caption : d.description.captions[0].text, //.text
                                                isSearched: true,
                                                url : url
                                            }
                                            )
                            }
                        )
                
            }
            else{
                alert("No URL Found")
            }
        }
    render(){
        return(
            <div>
                <center>
                    <h1 className="heading">Enter URL</h1>
                    <input type="text" id="url" className="url" placeholder="Enter your url here" /><br/>
                    <button className="button button1" onClick={this.getData}>Captions</button>
                    {
                    this.state.isSearched?<span>
                                   <h1>{this.state.caption}</h1>
                                   <img alt={this.state.caption} src={this.state.url}/>
                            </span>:""
                        }
                </center>
            </div>
        )
    }
}
export default Captions;
