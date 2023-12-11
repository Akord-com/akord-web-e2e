export function getEnvironment() {
  return {
    username: process.env.E2E_USERNAME || 'e2eweb@akord.com',
    password: process.env.E2E_PASSWORD || 'HuuuugeOverflow',
    url: new URL(process.env.E2E_URL || 'http://localhost:3000')
  };
}
