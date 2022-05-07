import React from 'react';
import GridLayout, {Responsive, WidthProvider} from 'react-grid-layout';
import { Thumbs } from 'swiper';
import { Paginator } from '../../../../components/export';
import "./productgridview.css";

const AutoGridLayout = WidthProvider(GridLayout);
const AutoResponsiveGL = WidthProvider(Responsive);

export default class ProductGridView extends React.Component {
  constructor(props){
    super(props);

    // Constants for controlling the maximum number of grid rows and columns per page
    this.gridColumn = 3;
    this.gridRow = 2;
    this.gridPerPage = this.gridColumn * this.gridRow;

    // Constants for responsive grid layout
    this.breakpoints = {lg: 1200, md: 1024, sm: 768, xs: 480, xxs: 0 };
    this.cols = {lg : this.gridColumn, md : this.gridColumn, sm : 1, xs : 1, xss : 1};

    this.state = {
      // Current page number
      currentPage : 1, 
      productsData : /* this.props.requestService.getShopProducts() */[
        {
          id : 1,
          name : "Drinking bottle",
          description : "great drinking bottle",
        },
        {
          id : 2,
          name : "Mouse pad",
          description : "great mouse pad",
        }, 
        {
          id : 3,
          name : "Keyboard",
          description : "great keyboard",
        },
        {
          id : 4,
          name : "laptop",
          description : "great laptop",
        }
      ],
    }
  }

  setPage(page){
    this.setState({
      currentPage: page,
    })
  }

  render() {
    const shownProd = this.state.productsData.slice(
      (this.state.currentPage - 1)*this.gridPerPage, this.state.currentPage*this.gridPerPage);
    let layout = []; let lastX = 0; let lastY = 0;
    for (const product of shownProd){
      layout.push({ i: product.id.toString(), x: lastX, y: lastY, w: 1,h: 2});
      lastY = lastX == (this.gridColumn - 1) ? lastY + 1 : lastY;
      lastX = lastX == (this.gridColumn - 1) ? 0 : lastX + 1;
    }

    return (
      <>{/*
        <AutoResponsiveGL
          className='grid-container' 
          layouts={layout} 
          breakpoints= {this.breakpoints}
          cols={this.cols}
        >
          {shownProd.map(function (e){
            return (<div key={e.id.toString()} className='product-grid-item'>
                <p>GRID ITEM</p>
              </div>);
            })
          }
        </AutoResponsiveGL> */}

        <AutoGridLayout
          className='product-grid-container'
          layout={layout}
          cols={this.gridColumn}
          isDraggable={false}
          isResizeable={false}
        >
          {shownProd.map(function (e){
            return (<div key={e.id.toString()} className='product-grid-item'>
                <p>GRID ITEM</p>
              </div>);
            })
          }
        </AutoGridLayout>

        {<Paginator page={this.state.currentPage} setPage={this.setPage} itemsCountPerPage={this.gridPerPage} 
        totalItemsCount={this.state.productsData.length}/>}
      </>
    )
  }
}
