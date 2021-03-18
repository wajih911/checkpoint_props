import "./App.css";
import ProfileComponent from "./Profile/ProfileComponent";

function App() {
  const handleName = (fullName) => {
    alert(`My name is ${fullName}`);
  };
  return (
    <ProfileComponent
      fullName="Wajih Bou Ali"
      handleName={handleName}
      bio="Welcome to my BIO"
      profession="Student"
    >
      <img
        style={{
          borderRadius: "20px",
          width: "500px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
        }}
        src="https://www.sport.fr/wp-content/uploads/2021/02/Icon_PS_210131_041.jpg"
        alt="pic"
      />
    </ProfileComponent>
  );
}

export default App;
