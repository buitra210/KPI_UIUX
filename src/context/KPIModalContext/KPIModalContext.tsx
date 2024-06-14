import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type UserInfoData = {
  file?: string | null;
  name: string;
  tag: string;
  target: string;
  metrics: string;
  task: string[];
  date1: string;
  date2: string;
  status: string;
};

type UserInfoContextType = {
  userInfo: UserInfoData;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoData>>;
};

const defaultUserInfo: UserInfoData = {
  file: null,
  name: "",
  tag: "",
  target: "",
  metrics: "",
  task: [],
  date1: "",
  date2: "",
  status: "",
};

const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export const KPIProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfoData>(defaultUserInfo);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error("useUserInfo must be used within a UserInfoProvider");
  }
  return context;
};
