import { UserByIdRaw, UserPermissionsByIdRaw, UserRaw } from "../interface/user.interface";
import { UserListItemDto, UserPermissionsResponseDto, UserResponseDto } from "../dto";

export class UserMapper {

    static toListItemDto(user: UserRaw): UserListItemDto {
        return {
            id: Number(user.id) || 0,
            email: user.email.trim().toLowerCase() || 'Sin email',
            name: user.name.trim().toLowerCase() || 'Sin nombre',
        }
    }

    static toListItemDtoList(users: UserRaw[]): UserListItemDto[] {
        return users.map((user) => this.toListItemDto(user));
    }

    static toResponseDto(user: UserByIdRaw): UserResponseDto {
        const roles = Array.isArray(user.roles)
        ? user.roles.map((role) => ({
            id: Number(role.id) || 0,
            name: role.name.trim() || 'Sin nombre',
            }))
        : [];

        return {
        id: Number(user.id) || 0,
        email: user.email.trim().toLowerCase() || 'Sin email',
        name: user.name.trim().toLowerCase() || 'Sin nombre',
        rol: roles,
        };
    }

    static toPermissionsDto(user: UserPermissionsByIdRaw): UserPermissionsResponseDto {
        return {
        id: Number(user.id) || 0,
        email: user.email.trim().toLowerCase() || 'Sin email',
        name: user.name.trim().toLowerCase() || 'Sin nombre',
        permissions: Array.isArray(user.permissions)
            ? user.permissions.filter((p) => typeof p === 'string')
            : [],
        };
    }
}