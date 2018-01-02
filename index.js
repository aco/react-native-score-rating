import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

export default class ScoreRating extends React.Component {
  static defaultProps = {
    maximum: 5,
    rating: 0,

    spacing: 10,

    onChangeValue: (index) => {},
  };

  constructor(props) {
    super(props);
    
    this.state = {
      ...this.props
    };
  }

  _onLayout = (layout) => { // compute rating icon size
    this.setState({
      containerLayout: layout.nativeEvent.layout,
      size: layout.nativeEvent.layout.width
    });
  }

  _onShouldSetResponder() {
    return true;
  }

  _updateChangeValue = (evt) => {
    let rating = Math.ceil((evt.nativeEvent.pageX - this.state.containerLayout.x) / 
      (this.state.size + this.props.spacing));

    if(rating < 0)
      rating = 0;
    else if (rating > this.state.maximum)
      rating = this.state.maximum;
    
    this.setState({
      rating
    });
    
    this.props.onChangeValue(rating);
  }

  render() {
    let icons = [];

    for (let i = 0; i < this.state.maximum; i++) {
      let styles = {
        ...this.props.containerStyle,
      };

      if (i < this.state.maximum - 1)
        styles.marginRight = this.props.spacing;
        
      icons.push(
        <View
          key={i}
          style={styles}
          onLayout={i < 1 ? this._onLayout : null}
        >
          {this.props.renderItem(i < this.state.rating)}
        </View>
      );
    }

    return (
      <View
        style={styles.container}
        
        onStartShouldSetResponder={this._onShouldSetResponder}
        onMoveShouldSetResponder={this._onShouldSetResponder}
        
        onResponderGrant={this._updateChangeValue}
        onResponderMove={this._updateChangeValue}
      >
        {icons}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})