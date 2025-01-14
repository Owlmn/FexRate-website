import redis from "@/app/lib/redis";
import bcrypt from "bcryptjs";
import {cookies} from "next/headers";

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return new Response(JSON.stringify({ message: "Email и пароль обязательны" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const user = await redis.hgetall(`user:${email}`);
        if (!user.email) {
            return new Response(JSON.stringify({ message: "Пользователь не найден" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return new Response(JSON.stringify({ message: "Неверный пароль" }), {
                status: 401,
                headers: { "Content-Type": "application/json" },
            });
        }

        (await cookies()).set("user_email", email, {
            path: "/", maxAge: 60 * 60 * 24
        });

        return new Response(JSON.stringify({ message: "Вход выполнен успешно" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Ошибка на сервере:", error);
        return new Response(JSON.stringify({ message: "Внутренняя ошибка сервера" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
