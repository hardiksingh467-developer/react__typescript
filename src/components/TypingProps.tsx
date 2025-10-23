type PropComponentWithProp = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
  // Object below
  personName: {
    first: string;
    last: string;
  };
  // Array of objects below
  peopleList: {
    first: string;
    last: string;
  }[];
  // enum prop using union
  status: "loading" | "error" | "success";
  // children's as props
  children: React.ReactNode;
  // events as props
  optionalValue?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  defaultInputValue?: string;
  inputHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // style as props
  styles: React.CSSProperties;
};

const ComponentWithProp = (props: PropComponentWithProp) => {
  return (
    <>
      {props.isLoggedIn && <div>Welcome back</div>}
      <div> Hello {props.name}</div>
      <div> You have {props.messageCount} unread messages</div>
      <div>
        One of the message is from {props?.personName?.first || "Ghost"}{" "}
        {props?.personName?.last || ""}
      </div>
      <div>
        <h3>People you may know:</h3>
        <ul>
          {props.peopleList.map((person, index) => (
            <li key={index}>
              {person?.first || "Ghost"} {person?.last || ""}
            </li>
          ))}
        </ul>
      </div>
      <div>{props.children}</div>
      {props.optionalValue && <div>Optional Value: {props.optionalValue}</div>}
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
      <input
        type="text"
        value={props.defaultInputValue}
        onChange={props.inputHandleChange}
      />
      <div style={props.styles}>Text Content goes here</div>
    </>
  );
};

const ComponentWithPropDestructured = ({value, handleChange}: PropComponentWithProp) => {
  return (
    <>
      {props.isLoggedIn && <div>Welcome back</div>}
      <div> Hello {props.name}</div>
      <div> You have {props.messageCount} unread messages</div>
      <div>
        One of the message is from {props?.personName?.first || "Ghost"}{" "}
        {props?.personName?.last || ""}
      </div>
      <div>
        <h3>People you may know:</h3>
        <ul>
          {props.peopleList.map((person, index) => (
            <li key={index}>
              {person?.first || "Ghost"} {person?.last || ""}
            </li>
          ))}
        </ul>
      </div>
      <div>{props.children}</div>
      {props.optionalValue && <div>Optional Value: {props.optionalValue}</div>}
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
      <input
        type="text"
        value={props.defaultInputValue}
        onChange={props.inputHandleChange}
      />
      <div style={props.styles}>Text Content goes here</div>
    </>
  );
};

const TypingProps = () => {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const peopleList = [
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
    {
      first: "Barry",
      last: "Allen",
    },
  ];
  return (
    <>
      <ComponentWithProp
        name="Hardik"
        messageCount={10}
        isLoggedIn={true}
        personName={personName}
        peopleList={peopleList}
        status="loading"
        handleClick={(event, id) => {
          console.log("I got clicked", id, "event is ", event);
        }}
        defaultInputValue="Type here"
        inputHandleChange={(event) => {
          console.log("Input changed", event.target.value);
        }}
        styles={{ border: "1px solid black", padding: "10px" }}
      >
        <div>Hello, I am a child component</div>
      </ComponentWithProp>
    </>
  );
};

export default TypingProps;
