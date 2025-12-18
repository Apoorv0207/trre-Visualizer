import { Card, Button } from "react-bootstrap";
import { Handle, Position } from "@xyflow/react";

export default function TreeNode({ data }) {
  return (
    <Card
      style={{
        minWidth: 130,
        textAlign: "center",
        border: data.selected
          ? "2px solid #0d6efd"
          : data.hovered
          ? "2px solid #6c757d"
          : "1px solid #dee2e6",
        backgroundColor: data.selected ? "#e7f1ff" : "white",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: data.hovered
          ? "0 4px 10px rgba(0,0,0,0.15)"
          : "none",
        cursor: "pointer",
      }}
      onMouseEnter={data.onHover}
      onMouseLeave={data.onLeave}
      onClick={data.onSelect}
    >
      <Handle type="target" position={Position.Top} />

      <Card.Body className="p-2">
        <Card.Title style={{ fontSize: 14, marginBottom: 4 }}>
          {data.label}
        </Card.Title>

        {/* 🔹 Metadata */}
        {data.meta && (
          <div style={{ fontSize: 11, color: "#6c757d" }}>
            {data.meta.type}
          </div>
        )}

        {/* 🔹 Expand / Collapse */}
        {data.hasChildren && (
          <Button
            size="sm"
            variant="secondary"
            className="mt-1"
            onClick={(e) => {
              e.stopPropagation();
              data.onToggle();
            }}
          >
            {data.collapsed ? "+" : "−"}
          </Button>
        )}
      </Card.Body>

      <Handle type="source" position={Position.Bottom} />
    </Card>
  );
}
