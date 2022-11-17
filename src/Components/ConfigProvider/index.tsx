import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { ItemTypeStrings } from '../Result/Result';
import { DEFAULT_CONFIG } from './constants';

export type ConfigType = {
	header?: { label: string };
	items?: { label: string; type: ItemTypeStrings; options?: { label: string; value: string }[] }[];
	footer?: {
		buttons: { label: string }[];
	};
};

type ConfigContextType = {
	config: ConfigType;
	setConfig: Dispatch<SetStateAction<ConfigType>>;
	unparsedConfig: string;
	setUnparsedConfig: Dispatch<SetStateAction<string>>;
};

type ConfigProviderProps = {
	children: ReactNode;
};

const ConfigContext = createContext<ConfigContextType | null>(null);

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
	const [config, setConfig] = useState({});
	const [unparsedConfig, setUnparsedConfig] = useState(DEFAULT_CONFIG);
	return (
		<ConfigContext.Provider value={{ config, setConfig, unparsedConfig, setUnparsedConfig }}>
			{children}
		</ConfigContext.Provider>
	);
};

export const useConfigContext = () => useContext(ConfigContext) as ConfigContextType;
