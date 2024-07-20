import React, { Component } from 'react'
import {Text, View, TouchableWithoutFeedback, LayoutAnimation} from 'react-native'
import {CardSection} from './common'
import {connect} from 'react-redux'
import * as actions from '../actions'


class ListItem extends Component {

    UNSAFE_componentWillUpdate(){
        LayoutAnimation.spring()
    }

    renderDescription(){

        const {library, expanded } = this.props
        const {sectionStyle} = styles

        if (expanded){

            return (
                <CardSection>
                    <Text style={sectionStyle}>
                        {library.item.description}
                    </Text>
                </CardSection>

            )
        }

    }

    render() {
        const {textStyle} = styles
        const {id, title, description} = this.props.library.item
      
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                    <Text style={textStyle}>
                        {title}
                    </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>

        )
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    sectionStyle: {
        padding: 5,
        flex: 1
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = ownProps.library.item.id === state.selectedLibraryId;

    return {expanded}
}

export default connect(mapStateToProps, actions)(ListItem)