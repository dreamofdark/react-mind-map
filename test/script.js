ReactDOM.render(
  React.createElement(MindMap.default, { nodes: map.nodes, connections: map.connections, editable: true }),
  document.getElementById('target'),
);
