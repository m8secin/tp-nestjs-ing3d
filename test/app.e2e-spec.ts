import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/travel (GET)', () => {
    return request(app.getHttpServer())
      .get('/travel')
      .expect(200)
      .expect([
        { id: 1, name: 'To China', price: 1000 },
        { id: 2, name: 'To Morocco', price: 1200 },
      ]);
  });

  it('/travel/:id (GET)', () => {
    return request(app.getHttpServer())
      .get('/travel/1')
      .expect(200)
      .expect({ id: 1, name: 'To China', price: 1000 });
  });

  afterEach(async () => {
    await app.close();
  });
});
