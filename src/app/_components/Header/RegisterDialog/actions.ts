"use server";

import { z } from "zod";
import { db } from "@/db/client";
import { users } from "@/db/schema";
import bcrypt from "bcryptjs";

const registrationSchema = z
    .object({
        name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
        email: z.string(),
        password: z.string().min(6, "Heslo musí mít alespoň 6 znaků"),
        passwordConfirm: z.string().min(6),
        consent: z.boolean().refine((val) => val === true, {
            message: "Musíte souhlasit se zpracováním osobních údajů",
        }),
    })
    .refine((data) => data.password === data.passwordConfirm, {
        message: "Hesla se neshodují",
        path: ["passwordConfirm"],
    });

export type RegistrationValues = z.infer<typeof registrationSchema>;

export async function submitRegistration(values: RegistrationValues) {
    const parsed = registrationSchema.safeParse(values);

    if (!parsed.success) {
        throw new Error("Neplatná data formuláře");
    }

    const { name, email, password } = parsed.data;

    const passwordHash = await bcrypt.hash(password, 10);

    await db.insert(users).values({
        name,
        email,
        passwordHash,
    });

    return { ok: true };
}
