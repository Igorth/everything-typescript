import React, { createContext } from 'react';

// Importação
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';

// TYPE
type textOrNull = string | null;

// CONTEXT
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // Variaveis
  const name: string = 'Igor';
  const age: number = 25;
  const isWorking: boolean = true;

  // Funcoes
  const userGreeting = (name: string): string => {
    return `Olá ${name}`;
  };

  // TYPE
  const myText: textOrNull = 'This is my text';
  let secondText: textOrNull = null;
  // secondText = 'This is second text';

  type fixed = 'Isso' | 'ou' | 'aquilo';
  const fixedTest: fixed = 'aquilo';

  // CONTEXT
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome {name}</h2>
        <p>Idade {age}</p>
        {isWorking && <p>Esta trabalhando!</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name={name} />
        <Destructuring
          title="Primeiro post"
          content="Destructuring"
          commentsQty={10}
          tags={['react', 'typescript']}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo Post"
          content="Destructuring"
          commentsQty={5}
          tags={['python', 'flask']}
          category={Category.JS}
        />
        <State />
        {myText && <p>Tem texto na variavel</p>}
        {secondText && <p>Tem texto na variavel</p>}
        {fixedTest}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
