export default function App(ctx: any) {
  console.log(ctx);

  let room = [
    {
      key: 1,
      color: "green"
    }
  ]
let service = {
  stripchat: [
    status: 1,
    uptime: 1.22,
  
  ],
  chaturbate: []
}
  return (
    <div>
      <h1>App</h1>
      <button>Login</button>

     service.map(i => <div>{i}</div>)

    </div>
  );
}

// const Form = require("@ant-design/pro-form");
