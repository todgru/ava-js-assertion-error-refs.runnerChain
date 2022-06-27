import test from 'ava';

// Tests from @clshortfuse https://github.com/avajs/ava/issues/2946#issuecomment-1079208787
test('sync test', (t) => {
  t.pass();
});

test('async test', async (t) => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});