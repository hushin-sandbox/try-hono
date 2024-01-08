import { Hono } from 'hono';
import { poweredBy } from 'hono/powered-by';

const app = new Hono();

app.use('*', poweredBy());

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.get('/post/:id/:commentId', (c) => {
  const { id, commentId } = c.req.param();
  return c.text(`Hello Hono! ${id} ${commentId}`);
});

export default app;
