import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { poweredBy } from 'hono/powered-by';

type Bindings = {
  COUNTERS: KVNamespace;
};

const app = new Hono();
app.use('*', poweredBy());

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

const api = new Hono<{ Bindings: Bindings }>();
app.use('/api/*', cors());

api.get('/counter', async (c) => {
  const key = 'visits';
  let count = Number(await c.env.COUNTERS.get(key)) || 0;
  count++;
  await c.env.COUNTERS.put(key, count.toString());

  return c.text(count.toString());
});
app.route('/api', api);

export default app;
