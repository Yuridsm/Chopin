import BaseEntity from './BaseEntity';
import * as stream from 'stream';

export default class Document extends BaseEntity {
    title: string;
    document: stream;
}
