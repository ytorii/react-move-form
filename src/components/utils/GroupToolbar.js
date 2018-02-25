import React from 'react'

const PropTypes = require('prop-types');
PropTypes.component = PropTypes.element;
require('react').PropTypes = PropTypes;
require('react').createClass = require('create-react-class')

const {
  ToolsPanel: { AdvancedToolbar: Toolbar, GroupedColumnsPanel },
} = require('react-data-grid-addons')

export default props => (
  <Toolbar enableFilter={props.enableFilter}/>}
    <GroupedColumnsPanel
      groupBy={props.groupBy}
      onColumnGroupAdded={props.onColumnGroupAdded}
      onColumnGroupDeleted={props.onColumnGroupDeleted}
    />
  </Toolbar>
)
