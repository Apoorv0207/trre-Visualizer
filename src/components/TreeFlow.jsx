import React, { useState, useMemo, useEffect } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { treeData } from "../data/treeData";
import { calculateLayout } from "../utils/layout";
import TreeNode from "./TreeNode";

const nodeTypes = {
  treeNode: TreeNode,
};

export default function TreeFlow() {
  const [collapsed, setCollapsed] = useState(new Set());
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [search, setSearch] = useState("");
  const [rfInstance, setRfInstance] = useState(null);

  const toggleNode = (id) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const { nodes, edges } = useMemo(() => {
    return calculateLayout(treeData, 0, { value: 0 }, collapsed);
  }, [collapsed]);

  // 🔹 Auto-fit on layout change
  useEffect(() => {
    if (rfInstance) {
      rfInstance.fitView({ padding: 0.2 });
    }
  }, [nodes, rfInstance]);

  // 🔹 Enhanced nodes (metadata, hover, selection, search)
  const enhancedNodes = nodes.map((node) => ({
    ...node,
    type: "treeNode",
    data: {
      label: node.data.label,
      meta: node.data.meta,
      hasChildren: true,
      collapsed: collapsed.has(node.id),
      selected:
        selectedNode === node.id ||
        (search &&
          node.data.label
            .toLowerCase()
            .includes(search.toLowerCase())),
      hovered: hoveredNode === node.id,
      onToggle: () => toggleNode(node.id),
      onSelect: () => setSelectedNode(node.id),
      onHover: () => setHoveredNode(node.id),
      onLeave: () => setHoveredNode(null),
    },
  }));

  // 🔹 Hover-highlight edges
  const enhancedEdges = edges.map((edge) => ({
    ...edge,
    animated: edge.source === hoveredNode,
    style: {
      stroke:
        edge.source === hoveredNode ? "#0d6efd" : "#999",
      strokeWidth: edge.source === hoveredNode ? 2 : 1,
    },
  }));

  return (
    <ReactFlowProvider>
      {/* 🔍 Search Box */}
      <input
        placeholder="Search node..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 10,
          padding: 6,
        }}
      />

      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={enhancedNodes}
          edges={enhancedEdges}
          nodeTypes={nodeTypes}
          fitView
          nodesDraggable={false}
          nodesConnectable={false}
          onInit={setRfInstance}
        />
      </div>
    </ReactFlowProvider>
  );
}
