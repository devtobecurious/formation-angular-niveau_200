export interface User {
  email: string;
  name: string | null | undefined;
  password: string;
  token: string | null | undefined;
}
