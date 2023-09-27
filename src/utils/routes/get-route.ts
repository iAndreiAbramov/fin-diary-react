export const GetRoute = {
  Home: (): string => '/',
  Dashboard: (): string => '/dashboard',
  Login: (): string => '/login',
  Registration: (): string => '/registration',
} as const;
