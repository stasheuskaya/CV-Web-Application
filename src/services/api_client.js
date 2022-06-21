const url = 'http://localhost:3000/api';

export function getEducations() {
  return fetch(`${url}/educations`);
  // GET skills
  // return fetch(`${url}/skills`);

  // POST skills
  // const body = {};
  // body.name = "React";
  // body.range = 100;
  // return fetch(`${url}/skills`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(body),
  // });
}
