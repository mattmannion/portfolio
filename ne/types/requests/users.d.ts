export interface userIF {
  id: number;
  username: string;
}

export interface getAllUsersIF {
  data: {
    users: [userIF];
  };
}
