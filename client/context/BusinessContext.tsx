import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export interface BusinessConfig {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceRegions: string[];
  trustedClients: string[];
  experience: string;
  installations: string;
}

const DEFAULT_CONFIG: BusinessConfig = {
  name: "Mayur Aircon",
  phone: "9909017725",
  email: "mayuraircon1684@gmail.com",
  address:
    "Service Coverage: Ahmedabad, Gandhinagar, and Radhanpur, Gujarat, India",
  serviceRegions: ["Ahmedabad", "Gandhinagar", "Radhanpur"],
  trustedClients: [
    "TATA",
    "Vodafone",
    "Airtel",
    "GNFC",
    "News18",
    "ABP News",
    "Stock Exchange Ahmedabad",
  ],
  experience: "2+",
  installations: "5000+",
};

const BusinessContext = createContext<BusinessConfig>(DEFAULT_CONFIG);

export const BusinessProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BusinessContext.Provider value={DEFAULT_CONFIG}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusinessConfig = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    return DEFAULT_CONFIG;
  }
  return context;
};
