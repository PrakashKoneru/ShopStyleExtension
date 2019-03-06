import React, { Component } from 'react';

class SimilarProducts extends Component {
  state = {
    hidden: true
  }
  render() {
    console.log('called');
    const { price } = this.props;
    const { hidden } = this.state;
    return (
      <div>
        <div className="similar_products_price_categ">{price}</div>
        <div
          onMouseEnter={() => this.setState({hidden: false})} onMouseLeave={() => this.setState({hidden: true})}
          style={{ height:"275px", width:"200px", margin: 'auto'}}
        >
          <img
            height="275px"
            width="200px"
            src="https://slimages.macysassets.com/is/image/MCY/products/5/optimized/11934455_fpx.tif?op_sharpen=1&amp;wid=500&amp;hei=613&amp;fit=fit,1&amp;$filtersm$"
          />
          <div className={hidden ? 'hidden' : "similar_products_actions_div"}>
            <div>
              <div className="similar_products_actions">
                <div className="iconContainer plus"><i className="fas fa-plus"></i></div>
                <div className="iconContent">Add to Look</div>
              </div>
              <div className="similar_products_actions">
                <div className="iconContainer search"><i className="fas fa-search"></i></div>
                <div className="iconContent">Product Details</div>
              </div>
              <div className="similar_products_actions">
                <div className="iconContainer heart"><i className="far fa-heart"></i></div>
                <div className="iconContent">Add to List</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SimilarProducts