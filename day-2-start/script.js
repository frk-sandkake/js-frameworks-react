// console.log("test here");

// Examples in destructing
const user = {
  id: 89898,
  name: "Hadras",
  tags: ["tag 1", "tag 2", "tag 3"],
  info: {
    gender: "male"
  }
}

function logStuff({id, name, tags}) {
  console.log(id)
  console.log(name)
  console.log(tags)
}

logStuff(user);

// console.log(user.id);
// console.log(user.name);

// const {id, name} = user;

// console.log(id);
// console.log(name);

// console.log(user.info.gender);
// const gender = user.info.gender;
// console.log(gender);

// const {gender} = user.info;
// console.log(gender);


