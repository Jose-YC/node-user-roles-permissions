import { PermissionMapper } from "../../permission/mapper/permission.mapper";
import { RoleListItemDto, RoleResponseDto } from "../dto";
import { RoleRaw, RoleByIdRaw } from "../interface/rol.interface";

export class RoleMapper {

  static toListItemDto(role: RoleRaw): RoleListItemDto {
    return {
      id: Number(role.id) || 0,
      name: role.name.trim().toLowerCase() || 'Sin nombre',
      description: role.description?.trim(),
      count_permissions: Number(role.permissions) || 0,
    };
  }

  static toListItemDtoArray(roles: RoleRaw[]): RoleListItemDto[] {
    return roles.map(role => this.toListItemDto(role));
  }

  static toResponseDto(role: RoleByIdRaw): RoleResponseDto {
    return {
      id: Number(role.id) || 0,
      name: role.name.trim().toLowerCase() || '',
      description: role.description?.trim(),
      permissions: Array.isArray(role.permissions)
        ? role.permissions.map((p) => PermissionMapper.toResponseDto(p))
        : [],
    };
  }
}