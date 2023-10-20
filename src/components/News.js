import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types';




export default class News extends Component {
     static defaultProps = {
          country: "in",
          pageSize: 8,
          category: "general"

     }

     static propTypes = {
          country: PropTypes.string,
          category: PropTypes.string,
          pageSize: PropTypes.number

     }
     capitalizeFirstLetter = (str) => {

          // converting first letter to uppercase
          const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

          return capitalized;
     }

     constructor(props) {

          super(props);
          this.state = {
               articles: [],
               totalResults: 1,
               loading: false,
               page: 1
          }
          document.title = this.capitalizeFirstLetter(this.props.category)
     }

     async updatePages() {
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          this.setState({ loading: true })
          let data = await fetch(url);
          let parsedata = await data.json();
          this.setState({
               articles: parsedata.articles,
               totalResults: parsedata.totalResults,
               loading: false
          })

     }
     async componentDidMount() {

          this.updatePages();

     }

     GOTOPrevious = async () => {
          // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61a273077d1e43bd9a3dd9ba96757b06&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
          // this.setState({loading:true})
          // let data=await fetch(url);
          // let parsedata=await data.json();
          // this.setState({
          //      page:this.state.page-1,
          //      articles:parsedata.articles,
          //      loading:false
          // })
          this.setState({ page: this.state.page - 1 })
          this.updatePages()

     }
     GOTONext = async () => {


          // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){


          //      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61a273077d1e43bd9a3dd9ba96757b06&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          //      this.setState({loading:true})
          //      let data=await fetch(url);
          //      let parsedata=await data.json();
          //      this.setState({
          //           page:this.state.page+1,
          //           articles:parsedata.articles,
          //           loading:false
          //      })
          // }
          this.setState({ page: this.state.page + 1 })
          this.updatePages()
     }
     render() {

          return (
               <>

                    <div className="container">
                         <div className='container text-center'><h1>It's News Time from {this.capitalizeFirstLetter(this.props.category)}</h1></div>
                         {this.state.loading && <Spiner />}
                         <div className="row">
                              {!this.state.loading && this.state.articles.map((element) => {
                                   return <div className="col-md-3" key={element.url}>
                                        <NewsItem title={element.title} description={element.description} ImageUrl={element.urlToImage} newsurl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                                   </div>

                              })}

                         </div>
                    </div>
                    <div className='container d-flex justify-content-between my-2'>
                         <button disabled={this.state.page <= 1} type="button" className="btn btn-warning" onClick={this.GOTOPrevious}>Previus</button>
                         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.GOTONext}>Next</button>

                    </div>

               </>
          )
     }
}
