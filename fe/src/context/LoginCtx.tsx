import { createContext } from 'react';

interface LoginCtxIF {
  username: string;
}

export const LoginCtx = createContext<LoginCtxIF>({} as LoginCtxIF);

interface LoginCtxProviderIF {
  children: React.ReactNode;
  value: LoginCtxIF;
}

export default function LoginCtxProvider({
  children,
  value,
}: LoginCtxProviderIF) {
  return <LoginCtx.Provider value={value}>{children}</LoginCtx.Provider>;
}
