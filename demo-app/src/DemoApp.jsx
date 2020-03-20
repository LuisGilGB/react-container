import React from 'react';
import Container from '../../src/Container';
import './DemoApp.css';

function DemoApp() {
  return (
    <div className="app">
      <header className="app-header">
        <p>
          Edit <code>src/DemoApp.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Container
        style={{
          backgroundColor: 'papayawhip',
          padding: '15px'
        }}
      >
        <p>This is a Container with no layout</p>
        <Container
          layout="hflex"
          style={{
            padding: '15px',
            backgroundColor: 'mediumseagreen'
          }}
        >
          <Container
            flex={2}
            style={{
              border: '3px solid steelblue'
            }}
          >
            This is a container with flex 2 into an hflex Container.
          </Container>
          <Container
            flex={1}
            style={{
              border: '3px solid steelblue'
            }}
          >
            This is a container with flex 1 into an hflex Container.
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default DemoApp;
