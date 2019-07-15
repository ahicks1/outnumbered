import React, { useEffect, useState } from 'react';
import PropTypes from'prop-types';
import { Redirect } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import QueryString from 'query-string';

function usePalaceConnection(name, room, eventHandler) {
  //let [conn,setConn] = useState(null);
  let conn;
  useEffect(() => {
    conn = new WebSocket(`ws://localhost:8080/join?name=${name}&room=${room}`);
    conn.onmessage = message => eventHandler(message.data);
    //setConn();
    return () => {if(conn) conn.close();};
  },[name,room]);

  return function send(message) {
    if(conn && conn.send)
      conn.send(message);
  };
}

function ClientPage({location}) {
  const params = new URLSearchParams(location.search);
  const name = params.get('name');
  const room = params.get('room');
  
  usePalaceConnection(name,room, data => {
    console.log(data);
  });
  if(!(room && name)) return <Redirect to='/'/>;
  return <Box mt={3}>
    <Typography variant="h2" gutterBottom>
      Welcome to Outnumbe.red
    </Typography>
  </Box>;
}
ClientPage.propTypes = {
  location:PropTypes.shape({search:PropTypes.func}).isRequired
};
export default ClientPage;