import theme from "../theme"
import { SafeAreaView } from 'react-native-safe-area-context'

const SafeAreaWrapper = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.green100
      }}
    >
      {children}
    </SafeAreaView>
  )
}

export default SafeAreaWrapper