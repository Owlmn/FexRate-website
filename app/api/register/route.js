import redis from "@/app/lib/redis";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password, firstName, lastName, username } = body;

        if (!email || !password || !firstName || !lastName || !username) {
            return new Response(
                JSON.stringify({ message: "Все поля обязательны для заполнения" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const existingUser = await redis.hgetall(`user:${email}`);
        if (existingUser.email) {
            return new Response(
                JSON.stringify({ message: "Пользователь уже существует" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const usernameExists = await redis.hget(`usernames`, username);
        if (usernameExists) {
            return new Response(
                JSON.stringify({ message: "Логин уже занят" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Сохранение пользователя в Redis
        await redis.hmset(`user:${email}`, {
            email,
            password: hashedPassword,
            firstName,
            lastName,
            username,
        });

        await redis.hset(`usernames`, username, email);

        await redis.del(`favorites:${email}`);

        // Установка cookie для текущего пользователя
        (await cookies()).set("user_email", email, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return new Response(
            JSON.stringify({
                message: "Регистрация успешна",
                user: { email, firstName, lastName, username },
            }),
            {
                status: 201,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Ошибка на сервере:", error);
        return new Response(
            JSON.stringify({ message: "Внутренняя ошибка сервера" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
