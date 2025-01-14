import redis from "@/app/lib/redis";
import { cookies } from "next/headers";

export async function GET() {
    try {
        const email = (await cookies()).get("user_email")?.value;

        if (!email) {
            return Response.json({ message: "Необходимо войти в систему" }, { status: 401 });
        }

        const favorites = await redis.smembers(`favorites:${email}`);

        return Response.json({ favorites }, { status: 200 });
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
        const { chartId } = body;

        if (!chartId) {
            return Response.json({ message: "Не указан код валюты" }, { status: 400 });
        }

        // Добавление валюты в избранное
        await redis.sadd(`favorites:${email}`, chartId);
        return Response.json({ message: "Валюта добавлена в избранное" }, { status: 200 });
    } catch (error) {
        console.error("Ошибка на сервере:", error);
        return Response.json({ message: "Внутренняя ошибка сервера" }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const email = (await cookies()).get("user_email")?.value;

        if (!email) {
            return Response.json({ message: "Необходимо войти в систему" }, { status: 401 });
        }

        const body = await req.json();
        const { chartId } = body;

        if (!chartId) {
            return Response.json({ message: "Не указан код валюты" }, { status: 400 });
        }

        // Удаление валюты из избранного
        await redis.srem(`favorites:${email}`, chartId);
        return Response.json({ message: "Валюта удалена из избранного" }, { status: 200 });
    } catch (error) {
        console.error("Ошибка на сервере:", error);
        return Response.json({ message: "Внутренняя ошибка сервера" }, { status: 500 });
    }
}
