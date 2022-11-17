import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type ActiveTabContextType = {
	activeTab: string;
	setActiveTab: Dispatch<SetStateAction<string>>;
};

type ActiveTabProviderProps = {
	children: ReactNode;
	defaultTabId: string;
};

const ActiveTabContext = createContext<ActiveTabContextType | null>(null);

export const ActiveTabProvider = ({ children, defaultTabId }: ActiveTabProviderProps) => {
	const [activeTab, setActiveTab] = useState(defaultTabId);
	return <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>{children}</ActiveTabContext.Provider>;
};

export const useActiveTabContext = () => useContext(ActiveTabContext) as ActiveTabContextType;
