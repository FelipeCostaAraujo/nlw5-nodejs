import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const user = usersRepository.create({
            email,
        });

        await usersRepository.save(user);

        return user;
    }
}

export { UsersService }