import { createContext, ReactNode } from "react";

interface VoteContextData {};

interface VoteContextProps {
    children: ReactNode;
}

export const VoteContext = createContext({} as VoteContextData);

export function VoteProvider({ children }: VoteContextProps) {
    return (
        <VoteContext.Provider value = {{}}>
            {children}
        </VoteContext.Provider>
    )
}