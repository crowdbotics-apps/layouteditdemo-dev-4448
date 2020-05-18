import React from "react"
import { View } from "react-native"
import { withStyles } from "react-native-ui-kitten"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  render = () => (
    <View
      styles={{
        overflow: "visible",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <Button
        title="Button"
        color="#2196F3"
        styles={{ overflow: "visible", borderStyle: "solid" }}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
