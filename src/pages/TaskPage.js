import React, { useState, useEffect } from "react"
import { FlatList, TextInput, Pressable, StyleSheet } from "react-native"
import { Picker } from "@react-native-picker/picker"
import theme, { Box, Text } from "../theme"
import SafeAreaWrapper from "../components/SafeAreaWrapper"
import TaskItem from "./TaskItem"

function TaskPage({ route, navigation }) {
  const { name } = route.params
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [filteredTasks, setFilteredTasks] = useState([])

  useEffect(() => {
    navigation.setParams({ setTasks })
  }, [])

  useEffect(() => {
    let tempTasks = tasks
    if (filter === "true") {
      tempTasks = tasks.filter((task) => task.status === "true")
    } else if (filter === "false") {
      tempTasks = tasks.filter((task) => task.status === "false")
    }

    if (search) {
      tempTasks = tempTasks.filter((task) => task.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredTasks(tempTasks)
  }, [tasks, search, filter])

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx={4}>
        <Text variant={"textXl"} fontWeight="700">Welcome, {name}!</Text>

        <Picker
          selectedValue={filter}
          onValueChange={(itemValue) => setFilter(itemValue)}
        >
          <Picker.Item label="All tasks" value="all" />
          <Picker.Item label="Completed tasks" value="true" />
          <Picker.Item label="Uncompleted tasks" value="false" />
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Search tasks"
          value={search}
          onChangeText={setSearch}
        />

        <FlatList
          style={styles.list}
          data={filteredTasks}
          renderItem={({ item, index }) => (
            <TaskItem
              task={item}
              onToggle={() => {
                let updatedTasks = [...tasks]
                updatedTasks[index].status = updatedTasks[index].status === "true" ? "false" : "true"
                setTasks(updatedTasks)
              }}
              onRemove={() => {
                let updatedTasks = [...tasks]
                updatedTasks.splice(index, 1)
                setTasks(updatedTasks)
              }}
              onPress={() => {
                navigation.navigate("EditPage", { setTasks, task: item })
                // console.log("Hello")
              }}
            />
          )}
        />

        <Box style={styles.buttonContainer}>
          <Pressable onPress={() => navigation.navigate("EditPage", { setTasks })}>
            <Box
              borderRadius={"rounded-7xl"}
              bg={"blu600"}
              px={4}
              py={1}
            >
              <Text color={"white"} variant={"text3Xl"}>+</Text>
            </Box>
          </Pressable>
        </Box>
      </Box>
    </SafeAreaWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  list: {
    marginBottom: 80, // Leave space for the floating button
  },
  buttonContainer: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
})

export default TaskPage
