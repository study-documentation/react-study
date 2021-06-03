import { getByPlaceholderText } from '@testing-library/react';
import React, { Component } from 'react';

class Counter extends Component {
// state includes any data that the component needs
    state = {  
    count: 0,
    //added to render a list
    tags: []

};

constructor(){
    super();
    this.handleIncrement = this.handleIncrement.bind(this)
}

handleIncrement() {
    this.setState({ count: this.state.count + 1 })
}

renderTags() {
    if (this.state.tags.length === 0 ) return <p>There are no tags</p>;
    
    return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
}
    //implictly here is React.createElement
        //there can only be one parent 
        //key added to li attributes in a real application keys might be for objects then key={tag.id} would be valid
    render() {
        return (
            <React.Fragment>
                <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                { this.state.tags.length === 0 &&  "Please create new tag"}
                {this.renderTags()}
                </div>
            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

//convention is to create the class and export seperately
export default Counter;