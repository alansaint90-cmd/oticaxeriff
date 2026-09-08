export type Role =
  | "administrador"
  | "pastor"
  | "secretaria"
  | "integracao"
  | "discipulado"
  | "intercessao"
  | "lider_ministerio";

export type Permission =
  | "dashboard:read"
  | "people:read"
  | "people:write"
  | "prayer:read"
  | "prayer:confidential"
  | "cms:write"
  | "qr:manage"
  | "users:manage";

const rolePermissions: Record<Role, Permission[]> = {
  administrador: [
    "dashboard:read",
    "people:read",
    "people:write",
    "prayer:read",
    "prayer:confidential",
    "cms:write",
    "qr:manage",
    "users:manage"
  ],
  pastor: ["dashboard:read", "people:read", "people:write", "prayer:read", "prayer:confidential", "cms:write", "qr:manage"],
  secretaria: ["dashboard:read", "people:read", "people:write", "cms:write", "qr:manage"],
  integracao: ["dashboard:read", "people:read", "people:write"],
  discipulado: ["dashboard:read", "people:read", "people:write"],
  intercessao: ["dashboard:read", "prayer:read"],
  lider_ministerio: ["dashboard:read", "people:read"]
};

export function can(role: Role | undefined, permission: Permission) {
  if (!role) return false;
  return rolePermissions[role].includes(permission);
}
