import React, { Component } from 'react';
import './App.css';
import Facebook from "./assets/facebook-icon.png";
import Twitter from "./assets/twitter-icon.png";
import Tumbler from "./assets/tumblr-icon.png"
import Blogger from "./assets/blogger-icon.png"
import WordPress from "./assets/wordpress-icon.png"
import Pinterest from "./assets/pinterest-icon.png"
import Email from "./assets/email-icon.png"
import SimilarProducts from './similarProducts';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="main_recommendation_conatiner">
          <div className="main_recommendation">
            <div className='main_recommendation_content'>
              <div>
                <img height="200px" width="150px" src="https://slimages.macysassets.com/is/image/MCY/products/5/optimized/11934455_fpx.tif?op_sharpen=1&amp;wid=500&amp;hei=613&amp;fit=fit,1&amp;$filtersm$"/>
              </div>
              <div className="main_content_details_container">
                <div className="main_content_details">
                  <div className="main_content_details_title">Space-Dyed Zip Hoodie</div>
                  <div className="main_content_details_price">
                    $32.60 &nbsp;&nbsp;&nbsp; <span className="strikethrough">$38.15</span>
                  </div>
                  <div className="main_content_details_estimate">Estimated Commission: $2.41</div>
                  <div className="actions_div">
                    <div className="heart_container"><i className="far fa-heart fa-2x"></i></div>
                    <div className="copy_link">Copy Link</div>
                    <div className="add_to_widget">+ Add to Widget</div>
                  </div>
                  <div className="share-buttons">
                    <div><img height={18} width={14} src={Facebook} /></div>
                    <div><img height={18} width={14} src={Twitter} /></div>
                    <div><img height={18} width={14} src={Tumbler} /></div>
                    <div><img height={18} width={14} src={Blogger} /></div>
                    <div><img height={20} width={17} src={WordPress} /></div>
                    <div><img height={20} width={17} src={Pinterest} /></div>
                    <div><img height={20} width={17} src= {Email} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="similar_products_container">
          <div className="similar_products_title">Add similar styles at different price points to maximize your earning!!</div>
          <div className="similar_products_content">
            <div style={{borderRight: '1px solid black', width: '100%', textAlign:'center', position:'relative'}}>
              <SimilarProducts price={'$'}/>
            </div>
            <div style={{borderLeft: '1px solid black', width: '100%', textAlign:'center', position:'relative'}}>
              <SimilarProducts price={'$$$'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;