import React from 'react'
import Axios from 'axios'
import {
    Card, 
    CardBody, 
    CardImg, 
    CardTitle, 
    CardText, 
    FormGroup, 
    Label, 
    Input, 
    Button,
    CardHeader,
    CardFooter
} from 'reactstrap'

let URL = 'https://newsapi.org/v2/top-headlines?'
const KEY = '&apiKey=44e39f08b9314a82bcab8b1bb56b6dd5'

class RequestAPI extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [], country: [
                'ae', 'ar', 'at', 'au', 'be', 'bg', 'br',
                'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de',
                'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id',
                'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt',
                'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no',
                'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru',
                'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr',
                'tw', 'ua', 'us', 've', 'za'
              ], 
            link:''
        }
    }
    
    componentDidUpdate() {
        Axios.get(this.state.link)
          .then((response) => {
            // console.log(response.data)
            this.setState({ data: response.data.articles });
          })
          .catch((error) => console.log(error));
    }
    
    inputCountry = () => {
        return (
            <FormGroup>
                {/* <Label for="country">Country</Label> */}
                <Input style={{width:'60%', margin:'auto'}} type="text" innerRef={(country)=> this.country = country} id="country" placeholder="Country"/>
            </FormGroup>
        )
    }
    
    dropdownCategory = () => {
        return (
            <FormGroup id="country">
                {/* <Label for="country">Country</Label> */}
                <Input style={{width:'60%', margin:'auto'}} type="select" innerRef={(category) => this.category = category}>
                    <option>Choose...</option>    
                    <option value="general">General</option>    
                    <option value="business">Business</option>    
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </Input>
            </FormGroup>
        );
    }

    buttonSubmit = () => {
        return (
            <FormGroup style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'auto'}}>
                <Button className = "shadow rounded" color='dark' onClick={this.handleSubmit}>Submit</Button>
            </FormGroup>
        )
    }
    
    inputCard = () => {
        return (
            <div id="form-news">
                <Card clasName="rounded shadow"style={{ width:'95%'}}>
                    <CardHeader><h1 style={{textAlign:'center'}}>Generate News</h1></CardHeader>
                    <CardBody>
                        {this.inputCountry()}
                        {this.dropdownCategory()}
                        {this.buttonSubmit()}
                    </CardBody>
                </Card>
            </div>
        )
    }

    handleSubmit = () => {
        let category = this.category.value
        let country = this.country.value
        let linkURL = ''
        if(this.state.country.filter(item => item===country).length>0){
            linkURL = `${URL}country=${country}&category=${category}${KEY}`
        } else{
            linkURL = `${URL}category=${category}${KEY}`
        } 

        this.setState({link: linkURL})
        console.log(linkURL)
        this.category.value = 'general'
        this.country.value = ''
    }

    renderCard = () => {
        return this.state.data.map(item => {
            return (
                <Card className="shadow rounded" id="card-box"style={{width:'25vw', margin: '2%'}}>
                    <CardHeader className="shadow p-3 bg-dark text-white text-center text-lg font-weight-bold">{item.source.name}</CardHeader>
                    <CardImg top width="100%" height="auto" src={item.urlToImage} alt="article-image"></CardImg>
                    <CardBody className="p-1">
                        <div style={{fontSize:'12px', width:'100%', height:'100%', display:'flex', flexDirection:'column'}}>
                            <CardTitle style={{fontWeight : 700, fontSize:"18px", height:'auto', overflowY:'hidden'}}>{item.title}</CardTitle>
                            <div style={{flexGrow:'1', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                                <CardText style={{fontSize:'14px', overflowY:'hidden', textAlign:'left'}}>{item.description}</CardText>
                                <Button className = "shadow rounded" href={item.url}>Read More</Button>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="shadow p-3">Author: {item.author}</CardFooter>
                </Card>
            )
        })
        };

    render(){
        return (
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                {this.inputCard()}
                <div style={{display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly'}}>
                    {this.renderCard()}
                </div>  
            </div>
        )
    }
}

export default RequestAPI