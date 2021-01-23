import { Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {

    @Column({ type: 'boolean', default: true})
    isActive: boolean;

    @Column({ type: 'boolean', default: false })
    isArchived: boolean;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @Column({ type: 'varchar', length: 300,  default: null})
    createdBy: string | null

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;

    @Column({ type: 'varchar', length: 300, default: null })
    lastChangedBy: string | null

    @Column({ type: 'varchar', length: 300, default: null })
    internalComment: string | null;
}