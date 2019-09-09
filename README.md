# React Native Talk Balloon
This is a component of talk balloons for React Native.



[![N|Solid](https://img.shields.io/badge/release-v1.0-blue.svg)](https://nodesource.com/products/nsolid)

## Install
### `npm -i react-native-talk-balloon`

## How to use
```javascript
import TalkBalloon from "react-native-talk-balloon";

<TalkBalloon
  backgroundColor="#D6EAF8"
  borderColor="#000000"
  borderRadius={17}
  triangleSize={17}
  triangleOffSet="22%"
  onPress={() => {
    Alert.alert('Hello!', 'You Pressed Me.');
  }}>
    <Text>
      You Message Here :)
    </Text>
</TalkBalloon>
```
## API

| Prop | Type | Default | Description |
|---|---|---| ---|
|**`triangleDirection`**| `string`| `left` |set the  direction from triangle  `top`/`bottom`/`left`/`right`.  |
|**`triangleOffSet`**| `string`| `20%` |set percentage offset of triangle position from top or left . |
|**`triangleSize`**|  `number`|`10` |set the triangle size |
|**`borderColor`**| `string`| `#000000` |color of border|
|**`borderWidth`**|  `number`| `1` |width of border|
|**`containerStyle`**| `object`| `null` |set the style of balloon container. |
|**`onPress`**| `function`| `null` |triggered on pressed the talk balloon.|
|**`onLongPress`**|  `function`| `null` |triggered on long pressed talk balloon.|
|**`borderRadius`**| `number`| `10` |radius of border|
|**`backgroundColor`**| `string`| `#FFFFFF` |color of background|
|**`width`**| `number`| `300` |width of talk balloon|
|**`height`**| `number`| `50` |height of talk balloon|
|**`children`**| `node`| `<View />` |Content of `<TalkBalloon />`|

## Credits
This component is an improvement of the code from [react-native-balloon](https://github.com/takahi5/react-native-balloon "react-native-balloon"), so I leave the creation credits to its creator.

## License

![](https://img.shields.io/badge/license-MIT-green)
