import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type ActiveTabContextType = {
	activeTab: string;
	setActiveTab: Dispatch<SetStateAction<string>>;
};

type ActiveTabProviderProps = {
	children: ReactNode;
};

const ActiveTabContext = createContext<ActiveTabContextType | null>(null);

export const ActiveTabProvider = ({ children }: ActiveTabProviderProps) => {
	const [activeTab, setActiveTab] = useState('');
	return <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>{children}</ActiveTabContext.Provider>;
};

export const useActiveTabContext = () => useContext(ActiveTabContext) as ActiveTabContextType;
