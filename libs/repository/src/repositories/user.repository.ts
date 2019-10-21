import { Injectable } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';
import { BaseRepository, EntityRepository, InjectClient, InjectDb } from '@juicycleff/nest-multi-tenant';
import {UserEntity} from '../entities';

@Injectable()
@EntityRepository({ name: 'user' })
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(
    @InjectClient() private readonly dbc: MongoClient,
    @InjectDb() private readonly db: Db,
  ) {
    super({
      client: dbc,
      db,
    });
  }
}