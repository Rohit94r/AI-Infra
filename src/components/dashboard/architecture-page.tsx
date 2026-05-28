"use client";

import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  type Edge,
  type Node,
  Position,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  { id: "frontend", position: { x: 60, y: 180 }, data: { label: "Frontend" }, sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: "router", position: { x: 260, y: 80 }, data: { label: "App Router" }, sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: "auth", position: { x: 260, y: 280 }, data: { label: "Auth" }, sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: "api", position: { x: 460, y: 80 }, data: { label: "API Layer" }, sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: "services", position: { x: 460, y: 280 }, data: { label: "Services" }, sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: "db", position: { x: 660, y: 80 }, data: { label: "Database" }, sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: "seo", position: { x: 660, y: 280 }, data: { label: "SEO Layer" }, sourcePosition: Position.Right, targetPosition: Position.Left },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "frontend", target: "router", animated: true, style: { stroke: "#2de29d", strokeWidth: 2 } },
  { id: "e2", source: "frontend", target: "auth", animated: true, style: { stroke: "#38bdf8", strokeWidth: 2 } },
  { id: "e3", source: "router", target: "api", animated: true, style: { stroke: "#2de29d", strokeWidth: 2 } },
  { id: "e4", source: "auth", target: "services", animated: true, style: { stroke: "#38bdf8", strokeWidth: 2 } },
  { id: "e5", source: "api", target: "db", animated: true, style: { stroke: "#2de29d", strokeWidth: 2 } },
  { id: "e6", source: "services", target: "seo", animated: true, style: { stroke: "#a78bfa", strokeWidth: 2 } },
  { id: "e7", source: "api", target: "services", style: { stroke: "rgba(59,58,80,0.3)", strokeWidth: 1.5, strokeDasharray: "4 4" } },
];

const nodeStyle = {
  background: "white",
  border: "1px solid rgba(59,58,80,0.14)",
  borderRadius: "8px",
  padding: "10px 16px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#3b3a50",
  boxShadow: "0 2px 12px rgba(59,58,80,0.08)",
};

export function ArchitecturePage() {
  const [nodes, , onNodesChange] = useNodesState(
    initialNodes.map((n) => ({ ...n, style: nodeStyle }))
  );
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3a50]">Architecture</h1>
        <p className="mt-1 text-sm text-[#3b3a50]/55">Live dependency graph for neon-commerce-ai</p>
      </div>

      <div className="h-[560px] overflow-hidden rounded-xl border border-[#3b3a50]/10 bg-white/80">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="bottom-right"
        >
          <Background color="rgba(59,58,80,0.06)" gap={24} />
          <Controls className="!border-[#3b3a50]/10 !bg-white !shadow-sm" />
        </ReactFlow>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs text-[#3b3a50]/55">
        {[
          { color: "#2de29d", label: "Primary data flow" },
          { color: "#38bdf8", label: "Auth flow" },
          { color: "#a78bfa", label: "SEO pipeline" },
          { color: "rgba(59,58,80,0.3)", label: "Internal dependency" },
        ].map((item) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <span className="h-0.5 w-6 rounded-full" style={{ backgroundColor: item.color }} />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
