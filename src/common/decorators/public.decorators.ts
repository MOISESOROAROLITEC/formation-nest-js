import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = "isPublic";
export const IS_USER_KEY = "isUser";
export const IS_ADMIN_KEY = "isAdmin";

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
export const User = () => SetMetadata(IS_USER_KEY, true);
export const Admin = () => SetMetadata(IS_ADMIN_KEY, true);
