import crypto from 'crypto';

export default abstract class BaseEntity {
    protected Identifier: string = crypto.randomUUID();
}
