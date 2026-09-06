import { buildSystemThread } from '../factory';
import { samkhyaKarikaThread as en } from './samkhya-karika-thread';
import { samkhyaKarikaThreadMl as ml } from './samkhya-karika-thread-ml';

export const samkhyaThread = buildSystemThread('samkhya-karika', { en, ml });
