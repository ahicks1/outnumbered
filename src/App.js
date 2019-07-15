import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4511e',
    },
    secondary: {
      main: '#607d8b',
    },
    error: {
      main:'#bf360c'
    }
  },
  spacing: 8
  
});



  function Home() {
    const [name, setName] = React.useState('');
    const [room, setRoom] = React.useState('');
    

    return <div className="App">
        <Box mt={3}>
          <Typography variant="h2" gutterBottom>
          Welcome to Outnumbe.red
          </Typography>
          <form action="/action_page" method="GET">
          <Box><TextField
            id="standard-name"
            label="Name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            margin="normal"
          /></Box>
          <Box><TextField
            id="standard-name"
            label="Room Code"
            value={room}
            onChange={e => setRoom(e.target.value)}
            margin="normal"
          /></Box>
           <input type="submit" value="Submit"></input>
          <Box m={2}>
            <Button 
                variant="contained" 
                size="large" 
                color="primary" 
                onClick={e => this.joinMatch()}
            >
              Join Game
            </Button>
          </Box></form>
          <Box m={2}>
            <Button size="large" color="primary" component={Link} to="/start">
              Start Game
            </Button>
          </Box>
        </Box>
      </div>
  }


function App() {
  return (
    <div class="App-body">
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
