type Something = {
  name: string;
  age: number;
};


export async function main (params: any, thing: Something) {
  const result = {
    statusCode: 200,
    body: 'this is a TS action',
    params,
    thing
  }

  const x = { ...result, foo: 'bar '}

  return result
}
