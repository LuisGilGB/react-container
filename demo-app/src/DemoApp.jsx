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
                layout="rowflex"
                minWidth={600}
                style={{
                    padding: '15px',
                    backgroundColor: 'mediumseagreen'
                }}
            >
                <Container
                    flex={2}
                    style={{
                        border: '3px solid steelblue',
                        padding: '15px'
                    }}
                >
                    This is a Container with flex 2 into a rowflex Container.
                </Container>
                <Container
                    flex={1}
                    minWidth={300}
                    style={{
                        border: '3px solid steelblue',
                        padding: '15px'
                    }}
                >
                    This is a Container with flex 1 into a rowflex Container.
                </Container>
            </Container>
            <Container
                layout="center"
                height={300}
                style={{
                    backgroundColor: 'lavender'
                }}
            >
                This is a center layout 300px height Container
            </Container>
        </Container>
      </div>
    );
}

export default DemoApp;
