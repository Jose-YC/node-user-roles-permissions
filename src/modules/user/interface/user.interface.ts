export interface UserRaw {
  id: number;
  name: string;
  email: string;
}

export interface UserByIdRaw extends UserRaw {
  roles: { id: number; name: string }[];
}

export interface UserPermissionsByIdRaw extends UserRaw {
  permissions: string[];
}
