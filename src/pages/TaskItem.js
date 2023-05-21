import React from 'react';
import { Pressable } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import theme, { Box, Text } from '../theme';

function TaskItem({
    task,
    onToggle: onToggleHandler,
    onRemove: onRemoveHandler,
    onPress: onPressHandler
  }) {
  return (
    <Box flexDirection='row'>
      <BouncyCheckbox
        text={task.status === 'true'}
        fillColor={theme.colors.blu600}
        isChecked={task.status === 'true' ? true : false}
        onPress={onToggleHandler}
      />

      <Pressable
        style={{flexGrow: 1, justifyContent: "center"}}
        onPress={onPressHandler}
      >
        <Box>
          <Text variant={"textBase"}>{task.name}</Text>
        </Box>
      </Pressable>

      <Pressable onPress={onRemoveHandler} style={{
        paddingVertical: theme.spacing["3.5"]
      }}>
        <Box
          bg={"blu600"}
          px={3}
          py={2}
        >
          <Text
            textAlign='center'
            color={"white"}
            textTransform='uppercase'
            variant={"textXs"}
          >
            X
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
}

export default TaskItem;
