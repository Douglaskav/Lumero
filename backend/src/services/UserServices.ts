import {getCustomRepository} from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class UserService {
  private userRepository: UserRepository;

  async create({ username, email, password }) {
    this.userRepository = await getCustomRepository(UserRepository);

    const userExists = await this.userRepository.findOne({ email });

    if (userExists) {
      throw Error("User Already exists"); return;
    }

    const user = await this.userRepository.create({
      username,
      email,
      password
    });

    await this.userRepository.save(user);

    delete user.password;
    return user;
  }
}

export {UserService}
