// Array + method

type User = {
  name: string;
  active: boolean;
};

const users: User[] = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];

const checkUser = users.filter((user) => {
    return user.active === true
})
console.log(checkUser)

// simple greet message

export function greet(name : string) : string{
  return "hello world!"
}
console.log(greet("digvijay "))

// your order first 

export function order(words : string) : string {
  if(words === ""){
    return "";
  }

  const arr = words.split(" ");

  arr.sort((a,b) => {
    const numA = Number(a.match(/\d/)?.[0]);
    const numB = Number(b.match(/\d/)?.[0]);

    return  numA - numB;
  });

  return arr.join(" ");
}

console.log(order("is2 there1 a3 test4"));