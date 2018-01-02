
# react-native-score-rating

## Introduction
A flexible, lightweight star rating component for React Native. Unlike others, this component offers absolute flexibility in your rating's icon rendering.

The component responds to drags and not just clicks, icon boundaries are computed automatically.


## Installation
```sh
npm i -S react-native-score-rating
```
Component is entirely JS, no linking required.



## Demo
<img src="https://i.imgur.com/YtC6xgS.gif" />


## Usage

```js
import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

import ScoreRating from 'react-native-score-rating';

export class Demo extends React.Component {
  state = {
    value: 2
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <ScoreRating
          rating={this.state.value}
          maximum={5}

          onChangeValue={value =>
            this.setState({
              value
            })
          }

          renderItem={(active) =>
            <Text color={active ? Colors.yellow20 : Colors.dark20} icon>{Icons.star}</Text>
          }
        />
      </View>
    )
  }
}

```
Note: Text is a custom component to demonstrate coloring. You have absolute control in the icon rendered -- styling included.



## Props
| Name         | Description    | Default       |
| :---         |     :---:      |          ---: |
| rating       | Current score  | 0             |
| maximum      | Maximum rating/"star count"  | 5|
| spacing      | Spacing between each component*  | 10|
| onChangeValue      | Func:bool=>JSX to render a single score/rating component  | Not supplied - requires implementation |

\* Spacing is applied as a right margin of all inner ratings.

## License

The MIT License.