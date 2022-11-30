import logo from "./logo.svg";
import "./App.css";
const fetchData = async () => {
  return await fetch(
    "https://webhook.site/552080b7-64dd-41e6-af3a-3fcd5636a426",
    {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
};
function App() {
  fetchData().then((res) => {
    console.log(res);
  });
  return <button onClick={fetchData}></button>;
}

export default App;
