import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { ItemTypeStrings } from '../Result/Result';

type ConfigType = {
	header?: { label: string };
	items?: { label: string; type: ItemTypeStrings; options?: { label: string; value: string }[] }[];
	footer?: {
		buttons: { label: string }[];
	};
};

type ConfigContextType = {
	config: ConfigType;
	setConfig: Dispatch<SetStateAction<ConfigType>>;
};

type ConfigProviderProps = {
	children: ReactNode;
};

const ConfigContext = createContext<ConfigContextType | null>(null);

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
	const [config, setConfig] = useState({});
	return <ConfigContext.Provider value={{ config, setConfig }}>{children}</ConfigContext.Provider>;
};

export const useConfigContext = () => useContext(ConfigContext) as ConfigContextType;
