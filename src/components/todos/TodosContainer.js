import React, { component } from 'react';
import { connect } from 'react-redux';

class Todos extends component {

    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
    render() {
        return( 
        <div>
            {this.renderTodos()}
        </div>
        );
     };
}

const MapStateToProps = state => {
   return {
       todos: state.todos
   }

}


export default connect(MapStateToProps)(Todos)