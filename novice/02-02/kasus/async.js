const axios = require("axios");

// async function getUserOdd() {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users?id=id%2==1"
//     );
//     console.log(response);
//   } catch (err) {
//     console.error(err);
//   }
// }

const getUserOdd = async () => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    const numId = await resp.data;

    // const filter = numId.filter((data) => data.id % 2 == 1);
    // console.log(filter);

    for (let i = 0; i < numId.length; i++) {
      if (numId[i].id % 2 == 1) {
        odd = numId[i];
        console.log(odd);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

getUserOdd();
