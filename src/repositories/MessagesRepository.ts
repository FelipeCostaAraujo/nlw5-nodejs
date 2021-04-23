import { Repository } from "typeorm";
import { Message } from "../entities/Messages";

class MessagesRepository extends Repository<Message>{ }

export { MessagesRepository }