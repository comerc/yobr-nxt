import React from 'react'
import { connect } from 'react-redux'

const Test = (props) => <div>{props.my}{console.log('props', props)}</div>

// Test.contextTypes = {
//   store: React.PropTypes.object
// }

// const mapDispatchToProps = () => ({})

export default connect((state) => ({my: state.my}))(Test)
