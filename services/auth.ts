import api from "@/lib/axios";
import { LoginForm } from "@/types";

export const login = async (payload: LoginForm) => {
     const { username, password } = payload;
     const { data } = await api.post("/auth/login", { username, password });
     return data;
}

export const authMe = async () => {
     const { data } = await api.get("/auth/me");
     return data;
}

export const logout = async () => {
     const { data } = await api.get("/auth/logout");
     return data;
}