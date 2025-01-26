import React, { useState } from "react";
import { Header } from "./components/Header";
import './App.css';

// Importar pantallas específicas
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";

const App: React.FC = () => {
  // Estado para gestionar la pantalla actual
  const [currentScreen, setCurrentScreen] = useState<number>(1);

  // Función para cambiar de pantalla
  const navigateTo = (screen: number) => {
    setCurrentScreen(screen);
  };

  // Renderizar pantalla según el estado
  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <Screen1 onNext={() => navigateTo(2)} />;
      case 2:
        return <Screen2 onNext={() => navigateTo(3)} onReturn={() => navigateTo(1)} />;
      case 3:
        return <Screen3 onNext={() => navigateTo(4)} onReturn={() => navigateTo(2)} />;
      case 4:
        return <Screen4 onReturn={() => navigateTo(3)} />;
      default:
        return <Screen1 onNext={() => navigateTo(2)} />;
    }
  };

  return (
    <div className="App">
      <Header />
      <main>{renderScreen()}</main>
    </div>
  );
};

export default App;
