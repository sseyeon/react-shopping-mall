import React, {useState, createContext} from 'react';
// create context
export const SidebarContext = createContext();
const SidebarProvider = ({children}) => {
  // sidebar state
  return <SidebarContext.Provider>
    {children}
  </SidebarContext.Provider>;
}
export default SidebarProvider;