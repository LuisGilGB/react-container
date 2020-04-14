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
                style={{
                    padding: '15px',
                    backgroundColor: 'mediumseagreen'
                }}
            >
                <Container
                    flex={2}
                    minWidth={250}
                    style={{
                        border: '3px solid steelblue',
                        padding: '15px'
                    }}
                >
                    This is a Container with flex 2 into a rowflex Container.
                    {null && <div>Look what happens when a null is passed as a child</div>}
                    {false && <div>Look what happens when a false is passed as a child</div>}
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
                    <div>And a div</div>
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
