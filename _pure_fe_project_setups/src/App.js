import React from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [isParagraphVisible, setIsParagraphVisible] = React.useState(false);
  const [allowToggle, setAllowToggle] = React.useState(false);

  // useCallback creates reference to function, and it allows to use memo with function props
  const toggleParagraphHandler = React.useCallback(() => {
    if (allowToggle) {
      setIsParagraphVisible((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleParagraphHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput showOutput={isParagraphVisible}/>
      <Button onClick={allowToggleParagraphHandler}>
        Allow Toggle
      </Button>
      <Button onClick={toggleParagraphHandler}>
        Show Paragraph
      </Button>
    </div>
  );
}

export default App;
