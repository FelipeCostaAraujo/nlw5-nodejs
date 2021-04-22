import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class SettingsService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const settings = usersRepository.create({
            email,
        });

        await usersRepository.save(settings);

        return settings;
    }
}

export { SettingsService }