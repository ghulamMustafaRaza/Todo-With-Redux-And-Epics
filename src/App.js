import React, { Component } from 'react';
import './App.css';
import actions from './store/actions';
import { connect } from 'react-redux';
import { TextField, Paper, RaisedButton, List, ListItem, IconButton } from 'material-ui';
class App extends Component {
  state = {
    text: ''
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state.text)
    this.setState({ text: '' })
  }
  render() {
    return (
      <Paper style={ { margin: 100, padding: 50 } } zDepth={3}>
        <form onSubmit={this.onSubmit}>
          <TextField fullWidth hintText="AddTodo" value={this.state.text} onChange={e => this.setState({text: e.target.value})} />
          <RaisedButton primary fullWidth label="Add" type="submit"/>
        </form>
        <List>
          {
            this.props.todo.map((a, i) => (
              <ListItem primaryText={a} rightIconButton={<IconButton iconClassName="material-icons" tooltip="Delete"  onClick={() => this.props.delete(i)}>D</IconButton>} key={i}></ListItem>
            ))
          }
        </List>
      </Paper>
    );
  }
}
const mapStateToProps = (state) => ({
  todo: state.todo
})


const mapDispatchToProps = (dispatch) => ({
  add: (payload) => {
    dispatch(actions.add(payload))
  },
  delete: (payload) => {
    dispatch(actions.delete(payload))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App) 
