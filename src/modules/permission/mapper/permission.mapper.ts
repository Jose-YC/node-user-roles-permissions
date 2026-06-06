import { PermissionRaw } from "../interface/permission.interface";
import { PermissionResponseDto } from "../dto";

export class PermissionMapper {
    static toResponseDto(permission: PermissionRaw): PermissionResponseDto {
      return {
        id: Number(permission.id) || 0,
        name: permission.name.trim().toLowerCase() || 'Sin nombre',
        module: permission.module.trim().toUpperCase() || 'Sin módulo',
      };
    }

    static toResponseDtoList(permissions: PermissionRaw[]): PermissionResponseDto[] {
        return permissions.map(permission => this.toResponseDto(permission));
    }
}