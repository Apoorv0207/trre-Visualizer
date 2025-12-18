let nodeWidth = 160;
let nodeHeight = 80;
let horizontalGap = 40;
let verticalGap = 100;

export function calculateLayout(
  node,
  depth = 0,
  xOffset = { value: 0 },
  collapsed
) {
  if (collapsed.has(node.id)) {
    const x = xOffset.value;
    xOffset.value += nodeWidth + horizontalGap;

    return {
      nodes: [{
        id: node.id,
        data: { label: node.label },
        position: { x, y: depth * verticalGap }
      }],
      edges: []
    };
  }

  let childrenLayouts = [];
  let edges = [];

  for (const child of node.children || []) {
    const layout = calculateLayout(child, depth + 1, xOffset, collapsed);
    childrenLayouts.push(layout);
    edges.push(...layout.edges);
  }

  let x;
  if (childrenLayouts.length === 0) {
    x = xOffset.value;
    xOffset.value += nodeWidth + horizontalGap;
  } else {
    const first = childrenLayouts[0].nodes[0].position.x;
    const last =
      childrenLayouts.at(-1).nodes[0].position.x;
    x = (first + last) / 2;
  }

  const currentNode = {
    id: node.id,
    data: { label: node.label },
    position: { x, y: depth * verticalGap }
  };

  childrenLayouts.forEach(child =>
    edges.push({
      id: `${node.id}-${child.nodes[0].id}`,
      source: node.id,
      target: child.nodes[0].id,
    })
  );

  return {
    nodes: [currentNode, ...childrenLayouts.flatMap(l => l.nodes)],
    edges
  };
}
