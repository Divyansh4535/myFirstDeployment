import Currency from "./Components/Currency"
import PasswordGenerator from "./Components/PasswordGenerator"
import TextCorrection from "./Components/subComponents/TextCorrection"

const App = () => {
  return (
    <>
      <TextCorrection />
      <PasswordGenerator />
      <Currency />
    </>
  )
}

export default App