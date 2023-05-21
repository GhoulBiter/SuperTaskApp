import React, { useState } from 'react';
import { TextInput, StyleSheet, Alert, Pressable } from 'react-native';
import theme, { Box, Text } from '../theme';
import SafeAreaWrapper from '../components/SafeAreaWrapper';

function EditPage({ route, navigation }) {
  const { setTasks, task } = route.params

  const [name, setName] = useState(task && task.name ? task.name : '')
  const [description, setDescription] = useState(task && task.description ? task.description : '')
  const [complete, setComplete] = useState(task && task.status ? task.status : 'false')
  const [editing, setEditing] = useState(task && task.name ? true : false)

  const createTask = () => {
    const newTask = { name, description, status: complete }
    setTasks(tasks => [...tasks, newTask])
    Alert.alert("Task Added", "Your new task has been created successfully!")
    navigation.goBack()
  };

  const editTask = () => {
    const editedTask = { ...task, name, description, status: complete }
    setTasks(tasks => {
      const index = tasks.findIndex(t => t === task)
      if (index !== -1) {
        const updatedTasks = [...tasks]
        updatedTasks[index] = editedTask
        return updatedTasks
      }
      return tasks
    });
    Alert.alert("Task Updated", "Your task has been updated successfully!")
    navigation.goBack()
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px={6} mt={6}>
        <Box>
          <Text ml={4} mb={1}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Task Name"
            value={name}
            onChangeText={setName}
          />
        </Box>

        <Box>
          <Text ml={4} mb={1}>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Task Description"
            value={description}
            onChangeText={setDescription}
            multiline={true}
          />
        </Box>

        <Box
          bg={"blu800"}
          mx={10}
          mt={6}
          variant={"textXl"}
          borderRadius={"rounded-7xl"}
        >
          <Pressable
            onPress={editing ? editTask : createTask}
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
              {editing ? "Edit Task" : "Create Task"}
            </Text>
          </Pressable>
        </Box>
      </Box>
    </SafeAreaWrapper>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors["slate600"],
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: theme.borderRadii["rounded-7xl"],
  },
});

export default EditPage;
