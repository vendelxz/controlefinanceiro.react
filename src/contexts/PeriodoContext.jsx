import { useState, useContext, createContext } from "react";

const PeriodoContext = createContext();

export function PeriodoProvider({children}){
const [mes, setMes] = useState(new Date().getMonth() + 1);
const [ano, setAno] = useState(new Date().getFullYear());

return(<PeriodoContext.Provider value={{ mes, setMes, ano, setAno }}>
      {children}
    </PeriodoContext.Provider>);
}

export const usePeriodo = () => {
  const context = useContext(PeriodoContext);

  if(!context){
    throw new Error("usePeriodo só pode ser usado dentro de um PeriodoProvider");
  }
  return context;
};



