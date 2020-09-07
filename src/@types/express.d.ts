declare namespace Express {
  // Substituição de tipos, para o Request reconhecer o id
  export interface Request {
    user: {
      id: string;
    };
  }
}
