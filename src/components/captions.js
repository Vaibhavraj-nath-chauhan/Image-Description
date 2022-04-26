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
                var call = "{'url' :'"+ url + "'}"
                
            
                fetch("https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Description", {
                        body: call,
                        headers: {
                            "Content-Type": "application/json",
                            "Ocp-Apim-Subscription-Key": this.state.API
                        },
                        method: "POST"
                        }).then(res =>
                                    res.json()).then(d => {
                                        this.setState({
                                            caption : d.description.captions[0].text, //.text
                                            isSearched: true,
                                            url : url
                                        })})
                
            }
            else{
                alert("No URL Found")
            }
            /*
            if(this.state.URL !==null){
            fetch("https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Description", {
                        body: "{'url' :'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}",
                        headers: {
                            "Content-Type": "application/json",
                            "Ocp-Apim-Subscription-Key": this.state.API
                        },
                        method: "POST"
                        }).then(res =>
                                    res.json()).then(d => {
                                        console.log(d)})
                }
            else{
                alert("No URL")
            }
            */
        
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



// Cognitive service features
/*
const key = "6aaec6e0a27a42b5ab9028173f1195b4";
const endpoint = "https://alttext05.cognitiveservices.azure.com/";
        fetch("https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Adult,Description", {
        body: "{'url' :'https://cdn-images-1.medium.com/max/800/0*ggV5fYc6l_S5UGnx'}",
        headers: {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": "6aaec6e0a27a42b5ab9028173f1195b4"
        },
        method: "POST"
        }).then(res =>
                    res.json()).then(d => {
                        console.log(d)})


getData = () =>{
    var city = document.getElementById("city").value;
    var APIUrl = `${this.state.URL}${city}&appid=${this.state.API}`
    fetch(APIUrl)
        .then(res=>res.json())
        .then(res=>{
            if(res.cod !==200){
                alert("You Enter Wrong city")
                return false
            }
            var Temp = Math.floor(res.main.temp - 273.15)
            var Icon = res.weather[0].icon
            var IconUrl = `http://openweathermap.org/img/wn/${Icon}@2x.png`
            this.setState({
                cityName:city,
                Temp : Temp,
                Icon: IconUrl,
                isSearched : true,
            })
            console.log(city,Temp)
        })
}

*/