import React, { Component } from "react";
import NewsItem from "./NewsItem"
import { Spinner } from "./Spinner";
import PropTypes from 'prop-types';

import InfiniteScroll from "react-infinite-scroll-component";




export default class News extends Component {
  articles=[
    {
      "source": { "id": null, "name": "India.com" },
      "author": "Zee News Desk",
      "title": "WI: 76-2 (32) | IND VS WI 2nd Test, Day 5 LIVE Cricket Score and Updates: Mohammed Siraj Reflects On - Zee News",
      "description": "WI: 76-2 (32) | IND VS WI 2nd Test, Day 5 LIVE Cricket Score and Updates: Rain To Play Spoilsport? C",
      "url": "https://zeenews.india.com/cricket/live-updates/live-cricket-score-ind-vs-wi-2nd-test-day-5-cricket-match-2023-today-india-vs-west-indies-cricket-live-score-updates-port-of-spain-trinidad-rohit-sharma-kraigg-brathwaite-2639625",
      "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/07/24/1247401-indvswiday5.jpeg",
      "publishedAt": "2023-07-24T10:07:19Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "NDTV News" },
      "author": null,
      "title": "\"X Is Live\": Elon Musk Posts Photo Of Twitter Headquarters With New Logo - NDTV",
      "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      "url": "https://www.ndtv.com/news",
      "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
      "publishedAt": "2023-07-24T08:07:38Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "HT Sports Desk",
      "title": "DK's brutal 'Champions Trophy final' reminder after Pakistan A crush India A - Hindustan Times",
      "description": "India A lost by 128 runs to Pakistan A in the final of the Men's Emerging Asia Cup in Colombo.  | Cricket",
      "url": "https://www.hindustantimes.com/cricket/tough-loss-bitter-pill-dinesh-karthik-serves-brutal-champions-trophy-final-reminder-after-pakistan-a-crush-india-a-101690183066415.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/24/1600x900/karthik_pakistan_1690185585233_1690185596292.jpg",
      "publishedAt": "2023-07-24T08:01:23Z",
      "content": "India A may have gone into the final of the Emerging Asia Cup against Pakistan A as favourites but the result was as far away from it as it could be. The Yash Dhull-led side were completely outclasse… [+1858 chars]"
    },
    {
      "source": { "id": null, "name": "NDTV News" },
      "author": null,
      "title": "Watch: Lion Takes A Casual Stroll In Rain-Battered Gujarat's Junagadh - NDTV",
      "description": "Posted by former cricketer Syed Saba Karim on Twitter, the video shows a lion calmly walking on the road.",
      "url": "https://www.ndtv.com/india-news/watch-lion-takes-a-casual-stroll-in-rain-battered-gujarats-junagadh-4235592",
      "urlToImage": "https://c.ndtvimg.com/2023-07/k22oi1bg_lion-in-junagadh_625x300_24_July_23.jpg",
      "publishedAt": "2023-07-24T06:39:12Z",
      "content": "The video shows the big cat walking down the road as vehicles pass by.\r\nA video has surfaced on the internet which shows a lion casually walking on a flyover in Gujarat's Junagadh amid heavy rainfall… [+2041 chars]"
    },
    {
      "source": { "id": null, "name": "Crictoday.com" },
      "author": "CT Contributor",
      "title": "Take strict disciplinary action against Harmanpreet Kaur for her pathetic behaviour against Bangladesh: Madan Lal to BCCI - Crictoday.com (Cricket News) ",
      "description": "Madan Lal, the member of the 1983 World Cup winning Indian team, has demanded strict action against Harmanpreet Kaur for her behaviour.",
      "url": "http://crictoday.com/cricket/news/take-strict-disciplinary-action-against-harmanpreet-kaur-for-her-pathetic-behaviour-against-bangladesh-madan-lal-to-bcci/",
      "urlToImage": "https://crictoday.com/wp-content/uploads/2023/02/harmanpreet-kaur-1.jpg",
      "publishedAt": "2023-07-24T05:20:24Z",
      "content": "Madan Lal, the member of the 1983 World Cup winning Indian team, has demanded strict action against Harmanpreet Kaur for her pathetic behaviour against the Bangladesh’s women’s team.\r\nHarman was fine… [+1027 chars]"
    }
  ]
  static defaultProps = {
    country:'in',
    pagesize:8,
    category:'general',
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }
    constructor(props){
      super(props);
      this.state={
        articles:this.articles,
     loading:false,
     page:1
      };
  }
  
  async update(){
   
    let url=`https://newsapi.org/v2/top-headlinses?country=${this.props.country}&category=${this.props.category}&apiKey=725e5b588fc24a58b20b58f70328b909&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData =await data.json();
    this.setState({
    articles:parsedData.articles,
    totalResults:parsedData.totalResults,
    loading:false,
    page:1
  })
  
  }
  async componentDidMount(){
    
    this.update();
  }
  handleprevclick = async ()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=725e5b588fc24a58b20b58f70328b909&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // this.setState({
    //   loading:false,
    //   articles:parsedData.articles,
    //   page:this.state.page-1,
    // })
    this.setState({page:this.state.page-1,});
    this.update();
  }
  handlenextclick =async()=>{
//  if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pagesize))){
//     let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=725e5b588fc24a58b20b58f70328b909&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
//     this.setState({loading:true});
//     let data=await fetch(url);
//     let parsedData=await data.json();
//     this.setState({
//       loading:false,
//       articles:parsedData.articles,
//       page:this.state.page+1
//     })
this.setState({page:this.state.page+1});
this.update();
  
  }
  fetchMoreData = async () => {
    this.setState({page:this.state.page+1});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=725e5b588fc24a58b20b58f70328b909&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    
    let data=await fetch(url);
    let parsedData =await data.json()
  this.setState({
    articles:this.state.articles.concat(parsedData.articles),
    totalResults:parsedData.totalResults,
    
  
    
  })
  };
  render() {
    return (
      <div className="container">
        <h2 className="my-4 text-center">DomNews-TopHeadlines</h2>
     {/* {this.state.loading && <Spinner/>} */}
       
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
           <div className="row my-5 container">
          
          {this.state.articles.map((item,id) => {
            return <div className="col-md-3" key={id}>
              <NewsItem
                title={item.title?item.title.slice(0,30):""}        
                     description={item.description?item.description.slice(0,55):""}
                imgUrl={item.urlToImage}
                newsUrl={item.url}
                author={item.author}
                date={item.publishedAt}
                source={item.source.name}
              />
            </div>
          })}
          
          </div>
           </InfiniteScroll>
        
        {/* <div className="conatiner d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
        <button disabled={(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pagesize))}type="button" class="btn btn-dark " onClick={this.handlenextclick}>Next &rarr;</button>
        </div> */}
      </div>
     

    );
  }
}