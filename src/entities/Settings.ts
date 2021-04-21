import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("settings")
class Settings {

    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;
}

export { Settings }