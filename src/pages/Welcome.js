import React, { useState } from 'react';
import { TextInput, StyleSheet, Pressable } from 'react-native';
import theme, { Box, Text } from '../theme';
import SafeAreaWrapper from '../components/SafeAreaWrapper';


function Welcome({ navigation }) {
  const [name, setName] = useState('')

  const enterApp = () => {
    if (name.trim() != '') {
      setName(name.trim())
      navigation.navigate('TaskPage', { name })
    }
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} justifyContent='center' mx={10}>
        <Text textAlign='center' variant={'text2Xl'} mb={2} fontWeight='700'>
          Welcome to TaskApp!
        </Text>

        <Text textAlign='center' mb={6}>Get Started by Entering Your Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name.trimStart()}
          onChangeText={setName}
        />

        <Box
          bg={"blu800"}
          mx={10}
          mt={6}
          variant={"textXl"}
          borderRadius={"rounded-7xl"}
        >
          <Pressable 
            onPress={enterApp}
            style={{
              paddingVertical: theme.spacing["3.5"]
            }}
          >
            <Text
              textAlign='center'
              color={"white"}
              textTransform='uppercase'
              variant={"textXs"}
            >
              Get Started
            </Text>
          </Pressable>
        </Box>
      </Box>
    </SafeAreaWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: theme.colors.gray400,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
})

export default Welcome
