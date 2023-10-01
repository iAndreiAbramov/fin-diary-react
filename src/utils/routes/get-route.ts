export const GetRoute = {
  Home: (): string => '/',
  Dashboard: (): string => '/dashboard',
  Cabinet: (): string => '/dashboard/cabinet',
  Login: (): string => '/login',
  Registration: (): string => '/registration',
} as const;
