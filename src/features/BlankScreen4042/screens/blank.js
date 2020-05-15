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
        <Text styles={{ overflow: "visible", borderStyle: "solid" }}>Text</Text>
        <Button
          title="Button"
          color="#2196F3"
          styles={{ overflow: "visible", borderStyle: "solid" }}
        />
        <CbInputNumber
          placeholder="Text input placeholder"
          readonly={false}
          maxLength=""
          value=""
          styles={{ overflow: "visible", borderStyle: "solid" }}
        />
        <Toggle
          value={true}
          activeColor=""
          inactiveColor=""
          disabled={false}
          text="switch ON/OFF"
          styles={{ overflow: "visible", borderStyle: "solid" }}
        />
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
