import React from "react";
import './searchpage.css';
import Search from './search';
import image from './download.png';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {useStateValue} from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import {Link} from "react-router-dom";
function Searchpage(){
	const [{term}, dispatch] = useStateValue();
	const {data} = useGoogleSearch(term);
	
	//mock api cal..const data = Response;
	//console.log(data)
	return (
		<div className ="searchpage"> 
			<div className ="searchpage_header"> 
				<Link to="/">
					<img className="searchpage_logo" src ={image} alt='guys here'
				/>
				</Link>
				<div className='searchpage_header_body'>
					<Search hideButton/>
					<div className= 'search_page_options'>
						<div className= 'search_page_options_left'>
							<div className= 'search_page_option'>
								<SearchIcon/>
								<Link to="/all">All</Link>
							</div>
							<div className= 'search_page_option'>
								<DescriptionIcon/>
								<Link to="/news">News</Link>
							</div><div className= 'search_page_option'>
								<ImageIcon/>
								<Link to="/images">Images</Link>
							</div><div className= 'search_page_option'>
								<LocalOfferIcon/>
								<Link to="/shopping">Shopping</Link>
							</div><div className= 'search_page_option'>
								<RoomIcon/>
								<Link to="/maps">Maps</Link>
							</div>
							<div className= 'search_page_option'>
								<MoreVertIcon/>
								<Link to="/more">More</Link>
							</div>
						</div>
						<div className ="searchpage_options_Right"> 
							<div className= 'search_page_option'>
								<Link to="/settings">Settings</Link>
							</div>
							<div className= 'search_page_option'>
								<Link to="/tools">Tool</Link>
							</div>
						</div> 
					</div>
				</div>
			</div> 
			{term &&(
			<div className ="searchpage_results">
				<p className="search_page_resultcount">
					About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
				</p>
				{data?.items.map(item=>(
				<div className= 'searchPage_result'>
						<a href ={item.link}>
							{item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (<img className="searchpage_result_image"
							src={
								item.pagemap?.cse_image[0]?.src
							}alt=""/>)}
							{item.displayLink}
						</a>
					<a href ={item.link} className= 'searchPage_result_Title' >
						<h2>{item.title}</h2>
					</a>
					<p className ='searchPage_result_snippet'>
					{item.snippet}
					</p>
				</div>
				))}
			</div>
			)}
		</div>
	)
}
export default Searchpage;