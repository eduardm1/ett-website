import React, { Component } from 'react';
import {Navbar, Footer,Lavabg} from '../../components/export';
import ProductGridView from './containers/gridview/ProductGridView';
import ProductView from './containers/individualview/ProductView';
import CartView from './containers/cartview/CartView';


export default class Shop extends Component {
    constructor(props){
        super(props);
        this.state = { shownComponent : 'ProductGridView'};
    }

    setShownComponent(componentToShow){
        this.setState({
            shownComponent: componentToShow,
        });
    }
    
    render() {
        let componentToShow = <ProductGridView requestService={this.props.requestService} setShownComp={this.setShownComponent} />;
        if (this.state.shownComponent === 'ProductGridView')
            componentToShow = <ProductGridView requestService={this.props.requestService} setShownComp={this.setShownComponent}/>;
        else if (this.state.shownComponent === 'ProductView')
            componentToShow = <ProductView requestService={this.props.requestService} setShownComp={this.setShownComponent}/>;
        else if (this.state.shownComponent === 'CartView')
            componentToShow = <CartView requestService={this.props.requestService} setShownComp={this.setShownComponent}/>;
        return (
            <>
                <Navbar currentPage="Shop"/>

                {componentToShow}

                <Footer />
                <Lavabg />
            </>
        );
    }
}
