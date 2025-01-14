import redis from "@/app/lib/redis";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const email = (await cookies()).get("user_email")?.value;

        if (!email) {
            return Response.json({ message: "Необходимо войти в систему" }, { status: 401 });
        }

        const user = await redis.hgetall(`user:${email}`);
        if (!user || Object.keys(user).length === 0) {
            return Response.json({ message: "Пользователь не найден" }, { status: 404 });
        }

        return Response.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Ошибка на сервере:", error);
        return Response.json({ message: "Внутренняя ошибка сервера" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const email = (await cookies()).get("user_email")?.value;

        if (!email) {
            return Response.json({ message: "Необходимо войти в систему" }, { status: 401 });
        }

        const body = await req.json();
        const { name, surname, login, password } = body;

        const userExists = await redis.hgetall(`user:${email}`);
        if (!userExists || Object.keys(userExists).length === 0) {
            return Response.json({ message: "Пользователь не найден" }, { status: 404 });
        }

        const updatedFields = {};
        if (name) updatedFields.firstName = name;
        if (surname) updatedFields.lastName = surname;
        if (login) updatedFields.username = login;
        if (password) updatedFields.password = await bcrypt.hash(password, 10);

        if (Object.keys(updatedFields).length === 0) {
            return Response.json({ message: "Нужно передать хотя бы одно поле для обновления" }, { status: 400 });
        }

        await redis.hmset(`user:${email}`, updatedFields);

        return Response.json({ message: "Данные успешно обновлены" }, { status: 200 });
    } catch (error) {
        console.error("Ошибка на сервере:", error);
        return Response.json({ message: "Внутренняя ошибка сервера" }, { status: 500 });
    }
}

export async function DELETE() {
    try {
        const cookieStore = await cookies();

        // Проверяем наличие куки user_email
        const email = cookieStore.get("user_email")?.value;

        if (!email) {
            return new Response(
                JSON.stringify({ message: "Пользователь уже вышел из системы" }),
                { status: 200, headers: { "Content-Type": "application/json" } }
            );
        }

        cookieStore.set({
            name: "user_email",
            value: "",
            expires: new Date(0),
        });

        return new Response(
            JSON.stringify({ message: "Вы успешно вышли из системы" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Ошибка на сервере:", error);
        return new Response(
            JSON.stringify({ message: "Внутренняя ошибка сервера" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

