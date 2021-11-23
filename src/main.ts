import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { join } from 'path';

/* Express + EJS */
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  // serve static assets
  // node_modules\@nestjs\platform-express\interfaces\serve-static-options.interface.d.ts
  app.useStaticAssets(join(__dirname, '..', 'public'), {});

  // set the view engine to ejs
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  // run app
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

/*
// import {
//   NestFastifyApplication,
//   FastifyAdapter,
// } from '@nestjs/platform-fastify';
// fastiy + handlebars
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });
*/
