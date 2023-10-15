export const GetRoute = {
  ChangePassword: (): string => '/dashboard/change-password',
  Dashboard: (): string => '/dashboard',
  Home: (): string => '/',
  Income: (): string => '/dashboard/income',
  Login: (): string => '/login',
  Registration: (): string => '/registration',
  Spending: (): string => '/dashboard/spending',
  Summary: (): string => '/dashboard/summary',
} as const;
